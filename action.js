export const character = {};

character .events = [ '#a', '#action' ];
character .action = function action ( script, cue, blooper ) {

const { scenarist } = this;

switch ( script .action ) {

case '#m':
case '#map':

( ( [ event, scriptEvent, scriptAction ] ) => {

const character = {};
character .events = [ event ];
character .action = ( script, cue, blooper ) => cue ( {

event: scriptEvent,
action: scriptAction,
details: script .details .splice ( 2 )

} );

scenarist .cast ( character );

} ) ( script .details );

}

};
