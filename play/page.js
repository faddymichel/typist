import { Typist } from './typist.js';

const scene = {};
export default scene;

const signature = Symbol ();

const characters = scene .characters = {};
characters .events = [ 'page' ];
characters .action = function action ( script ) {

const { scenarist, participant, teatro } = this;

let stamp;

switch ( script .character ) {

case 'new':
case 'create':
case 'add':

const play = teatro .host ( Typist ( scenarist ), signature );
stamp = teatro .issue ( play );

break;

case 'edit':
case 'load':

stamp = script .action && script .action .stamp ? script .action .stamp : undefined;

}

if ( ! stamp )
return;

const ticket = teatro .retrieve ( stamp );

participant .write ( JSON .stringify ( {

scene: 'page',
character: 'new',
action: {

stamp: stamp

}

} ) );

teatro .play ( participant, ticket );

};
