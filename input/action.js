export const establishment = function establishment () {

const { scenarist, action, input, output } = this;

document .onkeydown = document .onkeyup = ( event ) => {

if ( event .repeat )
return;

if ( document .activeElement .id !== 'text' && typeof action [ event .key ] === 'object' ) {

const scenarioEvent = Object .assign ( {}, action [ event .key ], {

details: event .type === 'keydown' ? 'on' : 'off'

} );

scenarist .play ( scenarioEvent )
.then ( input )
.catch ( ( error ) => {

console .error ( '#error', error );

} );

}

if ( event .type === 'keyup' && event .key === 'Control' ) {

document .getElementById ( 'text' ) .focus ();

}

};

};
