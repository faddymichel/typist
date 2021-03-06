export const establishment = function establishment () {

const setting = this;
const { scenarist, input, keyboard } = setting;

document .onkeydown = document .onkeyup = ( event ) => {

if ( event .repeat )
return;

if ( document .activeElement .id !== 'text' )
scenarist .play ( {

event: '#script',
action: '#play',
details:
event: event .key,
action: event .type

} );

if ( event .type === 'keyup' && event .key === 'Control' ) {

document .getElementById ( 'text' ) .focus ();

}

};

};

export const character = {};

character .events = [ '#k', '#keyboard' ];
const action = character .action = {};

action [ '#m' ] = action [ '#map' ] = function action ( script, cue, blooper ) {

const setting = this;
const [ key, type ] = script .details;

scenarist .cast ( {

events: [ '#' + event ]

line = script .details .splice ( 2 );
line = {

event: line [ 0 ],
action: line [ 1 ],
details: line .splice ( 2 )

};

cue ();

};
