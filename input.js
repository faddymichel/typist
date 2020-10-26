export const establishment = function establishment () {

const setting = this;

setting .action = {};
const input = setting .input = function input ( dialogue ) {

if ( input .ws && typeof dialogue === 'string' )
for ( const line of dialogue .trim () .split ( '\n' ) )
input .ws .send ( line );

};

};
