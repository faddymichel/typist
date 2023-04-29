import Shell from '@faddymichel/shell';
import { Interface, createInterface } from 'readline';
import { Console } from 'console';
import { createReadStream } from 'fs';

export default function Typist ( { play, script, file, greeting } ) {

const typist = Object .setPrototypeOf (

Object .defineProperties ( createInterface ( {

input: typeof file === 'string' ? createReadStream ( file ) : process .stdin,
output: ! file ? process .stdout : null,
completer: line => typist .play ( Symbol .for ( 'shell/complete' ), line )

} ), descriptors ),
Typist .prototype

);

typist .play = typeof play === 'function' ? play : new Shell ( script ) [ Symbol .for ( 'shell/play' ) ];
typist .page = new Console ( typist .output );

for (const event of [ 'line', 'SIGINT', 'close', 'error' ] )
typist .on ( event, typist [ 'on' + event ] );

if ( typeof greeting == 'string' && greeting .length )
typist .page .log ( greeting );

typist [ Symbol .for ( 'typist/prompt' ) ] = typist .getPrompt ();

typist .prompt ();

return typist;

};

const descriptors = {

online: {

enumerable: true,
value: async function online ( line ) {

const typist = this;

typist .pause ();

try {

const resolution = await typist .play ( Symbol .for ( 'shell/enter' ), line );

if ( typeof resolution ?.play === 'function' && typeof resolution ?.prompt === 'string' ) {

typist .play = resolution .play;

typist .setPrompt ( resolution .prompt .trim () + ' ' + typist [ Symbol .for ( 'typist/prompt' ) ] );

}

else if ( [ 'string', 'number', 'boolean' ] .includes ( typeof resolution ) )
typist .page .log ( resolution );

if ( typist .listenerCount ( 'post' ) )
await new Promise ( cue => {

typist .emit ( 'post', resolution, cue );

} );

typist .resume ();

typist .prompt ();

}

catch ( error ) {

if ( error .code === Symbol .for ( 'play/error/unknown-direction' ) && [ undefined, '' ] .includes ( error .direction ) )
return typist .online ( line .trim () + ' .' );

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

typist .page .error ( `(${ error .toString () })` );
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
line = [ ... line .slice ( 0, -1 ), Symbol .for ( 'shell/complete' ), line [ line .length - 1 ] ];

return this .play ( ... line );

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
