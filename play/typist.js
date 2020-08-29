import { Cursor } from '@teatro13/cursor';
import line from './line.js';

export const Play = function Typist ( contrato ) {

return function typist ( participant, scenarist, cue, blooper ) {

if ( typeof contrato === 'object' && ! contrato .page ) {

Object .assign ( contrato, {

page: new Cursor (),
editors: 0

} );

}

scenarist .scenario ( {

name: 'typist',
cast: [ line ],
setting: {

prompt: '#typist',
contrato: contrato

},
establish: true

} )
.then ( () => {

scenarist .display = 'typist';
contrato .editors++;

cue ();

} )
.catch ( ( error ) => {

blooper ( error );

} );

};

};
