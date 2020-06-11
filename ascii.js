export const establishment = function establishment () {

const { scenarist } = this;

const text = {};
text .type = text .id = 'text';
text .placeholder = 'Write a Script to Play';

text .onkeyup = ( event ) => {

const dialog = event .target;

if ( event .key === 'Enter' ) {

const scenarioEvent = {};
const args = dialog .value
.trim ()
.split ( ' ' );
scenarioEvent .scene = args [ 0 ];
scenarioEvent .character = args [ 1 ];
scenarioEvent .action = args [ 2 ];

scenarist .play ( scenarioEvent );
dialog .value = '';

}

else if ( event .key === 'Escape' )
dialog .blur ();

};

scenarist .write ( 'nav', 'input', text );

document .onkeydown = document .onkeyup = ( event ) => {

if ( document .activeElement .id !== 'text' ) {

const scenarioEvent = {};

scenarioEvent .scene = event .type === 'keydown' ? `${ event .key }:on` : `${ event .key }:off`;
scenarioEvent .character = event .key;

scenarist .play ( scenarioEvent );

}

if ( event .type === 'keyup' && event .key === 'Control' ) {

document .getElementById ( 'text' ) .focus ();

}

};

};
