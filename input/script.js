export const establishment = function establishment () {

const { scenarist, input, output } = this;

const onkeyup = ( event ) => {

const dialog = event .target;

if ( event .key === 'Enter' ) {

const scenarioEvent = {};
const line = dialog .value
.trim ()
.split ( ' ' );
scenarioEvent .event = line [ 0 ];
scenarioEvent .action = line [ 1 ];
scenarioEvent .details = line .splice ( 2 );

scenarist .play ( scenarioEvent )
.then ( ( dialogue ) => {

input ( dialogue );
dialog .value = '';

} )
.catch ( ( error ) => {

console .error ( '#input #error', error );

} );

}

else if ( event .key === 'Escape' )
dialog .blur ();

};

output ( {

selector: 'nav',
attributes: { onkeyup },
html: `
<input
id="text"
type="text"
placeholder="Type a Script to Play">
</input>
`

} );

};

export const character = {};

character .events = [ '#s', '#script' ];
const action = character .action = {};

action [ '#t' ] = action [ '#type' ] = function type ( script, cue, blooper ) {

const { input } = this;
const [ signature ] = script .details;
const line = script .details .splice ( 1 );

if ( line .length === 0 )
return blooper ( 'Empty line' );

input .script [ signature ] = input .script [ signature ] || [];
input .script [ signature ] .push ( {

event: line [ 0 ],
action: line [ 1 ],
details: line .splice ( 2 )

} );

};

action [ '#p' ] = action [ '#play' ] = function play ( script, cue, blooper ) {

const { input } = this;

if ( input .script [ signature ] )
cue ( input .script [ signature ] );

blooper ( 'No script to play' );

};
