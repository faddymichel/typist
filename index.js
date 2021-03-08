const readline = require ( 'readline' );
const Scenarist = require ( '@faddymichel/scenarist' );
const $ = Scenarist ();

$ ( 'opening', '(' );
$ ( 'closing', ')' );

$ ( 'line', ( $, actor, line ) => process .stdout .write ( `${

$ ( 'enter', ... line .split ( ' ' ) )

}
` ), 'script', 'command' );

$ ( 'enter', ( $, actor, ... details ) => {

const { opening, closing } = $ ();

const start = details .lastIndexOf ( opening );
const end = details .indexOf ( closing, start );

if ( start < 0 && end < 0 )
return details .length > 0 ? $ ( 'play', ... details ) : undefined;

if ( start < 0 || end < 0 )
throw Error ( 'ekhse' );


const prefix = start > 0 ? details .splice ( 0, start ) : details;

const length = end - start - 1;
const nested = details .splice ( 1, length );

const suffix = details .splice ( 2 );

if ( nested .length > 0 )
return $ ( 'enter', ... prefix, $ ( 'recurse', ... nested ), ... suffix );

return $ ( 'enter', ... prefix, ... suffix );

}, 'recurse', 'return' );

$ ( 'play', {} );
$ ( 'play', '"', ( $, actor, ... text ) => text .join ( ' ' ) );


$ ( 'bot', readline .createInterface ( {

input: process .stdin,
output: process .stdout

} ), 'interface', 'cli', 'app', 'program' );

$ ( 'bot', 'on', 'line', line => $ ( 'line', line ) );
