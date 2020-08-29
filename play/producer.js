import { Scenarist } from '@teatro13/scenarist';
import script from './script.js';
import page from './page.js';

export const producer = function producer ( participant ) {

const teatro = this;
const scenarist = new Scenarist ();
scenarist .scenario ( {

name: 'producer',
setting: {

teatro: teatro,
participant: participant

},
scenes: [ script, page ],
establish: true

} );
scenarist .display = 'producer';

};
