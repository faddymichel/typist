export const establishment = function establishment () {

const { scenarist, output } = this;

document .onkeydown = document .onkeyup = ( event ) => {

if ( document .activeElement .id !== 'text' ) {

const scenarioEvent = {};

scenarioEvent .event = event .type === 'keydown' ? `${ event .key }:on` : `${ event .key }:off`;
scenarioEvent .action = event .key;

scenarist .play ( scenarioEvent )
.catch ( ( error ) => {

console .error ( '#error', error );

} );

}

if ( event .type === 'keyup' && event .key === 'Control' ) {

document .getElementById ( 'text' ) .focus ();

}

};

};
