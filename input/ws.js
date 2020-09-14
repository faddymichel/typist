export const establishment = function establishment () {

const setting = this;
const { scenarist, input, output, ws } = setting;

if ( typeof ws !== 'object' )
return;

const { scheme, host, port } = ws;

input .ws = new WebSocket ( `${ scheme }://${ host }:${ port }` );

input .ws .onopen = ( event ) => {

};

input .ws .onerror = ( event ) => {

console .error ( event );
output ( 'main', 'h6', {}, 'input could not serve you this time!' );

};

input .ws .onmessage = ( event ) => {

if ( event .data instanceof Blob ) {

const reader = new FileReader ();
 reader .onload = () => {

const line = reader .result .trim () .split ( ' ' );

console .log ( 'line:', reader .result );

scenarist .play ( {

event: line [ 0 ],
action: line [ 1 ],
details: line .splice ( 2 ) .join ( ' ' )

} )
.catch ( ( error ) => {

console .error ( '#error', error );

} );

};

reader .readAsText ( event .data );

}

};

};
