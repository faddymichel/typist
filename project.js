export const characters = {};

characters .events = [ 'project' ];
characters .action = function action ( event ) {

const { typist, scenarist } = this;

switch ( event .character ) {

case 'new':

typist .send ( JSON .stringify ( event ) );

default:

scenarist .write ( 'main', 'h2', {}, 'page' );

}

};
