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
scenarioEvent .details = line .splice ( 2 ) .join ( ' ' );

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
