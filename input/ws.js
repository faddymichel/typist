export const establishment = function establishment () {

const setting = this;
const { scenarist, input, output, ws } = setting;

if ( typeof ws !== 'object' )
return;

const { scheme, host, port } = ws;

input .ws = new WebSocket ( `${ scheme }://${ host }:${ port }` );

input .ws .onopen = ( event ) => {

};

input .ws .onclose = () => {

console .error ( 'connection closed' );

};

input .ws .onerror = ( event ) => {

console .error ( event );
output ( 'main', 'h6', {}, 'input could not serve you this time!' );

};

input .ws .onmessage = ( event ) => {

const line = event .data .trim () .split ( ' ' );

scenarist .play ( {

event: line [ 0 ],
action: line [ 1 ],
details: line .splice ( 2 ) .join ( ' ' )

} )
.catch ( ( error ) => {

//console .error ( '#error', error );

} );

};

};
