export const characters = {};

characters .events = [ 'page' ];
characters .action = function action ( event ) {

const { scenarist } = this;

scenarist .write ( 'main', 'h2', {}, 'page' );

};
