import Language from '@faddymichel/language';
import { Interface, createInterface } from 'readline';
import { Console } from 'console';
import { createReadStream } from 'fs';

export default function Typist ( { script, file, name, version } ) {

const typist = Object .setPrototypeOf (

Object .defineProperties ( createInterface ( {

input: typeof file === 'string' ? createReadStream ( file ) : process .stdin,
output: ! file ? process .stdout : null,
completer: line => typist .language ( Symbol .for ( 'language/complete' ), line )

} ), descriptors ),
Typist .prototype

);

typist .language = new Language ( script );
typist .page = new Console ( typist .output );

for (const event of [ 'line', 'SIGINT', 'close', 'error' ] )
typist .on ( event, typist [ 'on' + event ] );

if ( typeof name == 'string' && name .length )
typist .page .log ( 'Welcome to ' + name + ( [ 'string', 'number' ] .includes ( typeof version ) ? ' v' + version : '' ) );

typist [ Symbol .for ( 'typist/prompt' ) ] = typist .getPrompt ();

typist .prompt ();

return typist;

};

const descriptors = {

online: {

enumerable: true,
value: function online ( line ) {

const typist = this;

line = line .trim ();

if ( line === '' )
return typist .prompt ();

try {

const resolution = typist .language ( Symbol .for ( 'language/enter' ), line );

if ( typeof resolution ?.language === 'function' && typeof resolution ?.prompt === 'string' ) {

typist .language = resolution .language;

typist .setPrompt ( typist [ Symbol .for ( 'typist/prompt' ) ] + resolution .prompt .trim () + ' ' )

}

else if ( [ 'string', 'number', 'boolean' ] .includes ( typeof resolution ) )
typist .page .log ( resolution );

typist .prompt ();

}

catch ( error ) {

typist .emit ( 'error', error );

}

typist [ Symbol .for ( 'typist/interrupted' ) ] = false;

}

},
onSIGINT: {

enumerable: true,
value: function SIGINT () {

const typist = this;
const interrupted = Symbol .for ( 'typist/interrupted' );

if ( typist .line ?.length )
typist .line = '';

else if ( typist [ interrupted ] ) {

typist .input .write ( '^C' );

return typist .close ();

}

else {

typist .page .log ( '^C\n(To exit, press Ctrl+C again or Ctrl+D)' );

typist [ interrupted ] = true;

}

typist .prompt ();

}

},
onclose: {

enumerable: true,
value: function onclose () {

this .page .log ( '\n(Yallah bye)' );

}

},

[ Symbol .for ( 'typist/interrupted' ) ]: {

value: 0,
writable: true

},
onerror: {

enumerable: true,
value: function onerror ( error ) {

const typist = this;

typist .page .error ( `#error${ error ?.message .length ? ' ' + error .message : '' }` );
typist .prompt ();

}

}

};

Typist .prototype = Object .defineProperties ( Object .create ( Interface .prototype ), {

constructor: { value: Typist },
complete: {

enumerable: true,
value: function complete ( line ) {

line = line .trimStart () .split ( /\s+/ );
line = [ ... line .slice ( 0, -1 ), Symbol .for ( 'language/complete' ), line [ line .length - 1 ] ];

return this .language ( ... line );

}

},
name: {

enumerable: true,
get () { return this [ Symbol .for ( 'typist/name' ) ] },
set ( name ) {

this [ Symbol .for ( 'typist/name' ) ] = typeof name === 'string' && name .length ?
name
.trim ()
.split ( /[\s-_.,;]+/ )
.map ( name => name [ 0 ] .toUpperCase () + name .slice ( 1 ) .toLowerCase () )
.join ( ' ' )
: 'Typist'

}

},
version: {

enumerable: true,
get () { return this [ Symbol .for ( 'typist/version' ) ] },
set ( version ) {

switch ( typeof version ) {

case 'number':
break;

case 'string':
version = version
.split ( /[\s.-_:]+/ )
.map ( number => parseInt ( number ) )
.filter ( number => ! isNaN ( number ) )
.join ( '.' );

default:
version = undefined;

}

this [ Symbol .for ( 'typist/version' ) ] = version;

}

}

} );
