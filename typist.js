export const establishment = function establishment () {

const setting = this;
const { scenarist } = setting;
const typist = setting .typist = new WebSocket ( 'ws://localhost:1300' );

typist .onopen = ( event ) => {

scenarist .write ( 'main', 'h6', {}, 'Typist is now serving you!' );

};

typist .onerror = ( event ) => {

console .error ( event );
scenarist .write ( 'main', 'h6', {}, 'Typist could not serve you this time!' );

};

typist .onmessage = ( event ) => {

if ( event .data instanceof Blob ) {

const reader = new FileReader ();
 reader .onload = () => {

scenarist .play (
JSON .parse ( reader .result )
);

};

reader .readAsText ( event .data );

}

};

};
