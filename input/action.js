export const establishment = function establishment () {

const setting = this;
const { scenarist, input } = setting;

document .onkeydown = document .onkeyup = ( event ) => {

if ( event .repeat )
return;

if ( document .activeElement .id !== 'text' && typeof setting .action [ event .key ] === 'object' ) {

const scenarioEvent = Object .assign ( {}, scenarist .setting .action [ event .key ], {

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

export const character = {};

character .events = [ '#keyboard', 'keyboard', '#k', 'k' ];
character .action = function action ( script, cue, blooper ) {

const setting = this;
const { keyboard, input } = setting;
const action = setting .action = {};

for ( const event in keyboard )
keyboard [ event ] .split ( '' ) .forEach ( ( key ) => {

action [ key ] = {

event: event,
action: key

};

} );

cue ();

};
