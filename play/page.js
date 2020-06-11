const events = [ 'new', 'load' ];

module .exports = function scenario$yallah ( participant ) {

const teatro = this;
const interface = require ( 'readline' ) .createInterface ( {

input: participant,
output: participant,
prompt: JSON .stringify ( {

scene: 'page'

} )

} );

participant .on ( 'error', () => {

interface .removeAllListeners ();
interface .close ();

} );

interface .prompt ();

interface .on ( 'script', ( script ) => {} );

};
