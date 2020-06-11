import { Scenarist } from '/scenarist/index.js';

window .onload = () => {

const scenarist = new Scenarist ();

scenarist .write ( 'body', 'header' )
.write ( 'header', 'h1' )
.write ( 'header h1', 'a', {

href: 'https://github.com/teatro13',
target: '_blank'

}, 'teatro13' )
.write ( 'header h1', 'span', {}, ' / ' )
.write ( 'header h1', 'a', {

href: 'https://github.com/teatro13/typist',
target: '_blank'

}, 'typist' )
.write ( 'body', 'main', { id: 'scenario' } )
.write ( 'body', 'nav' );

scenarist .scenario ( {

name: 'typist',
paths: [

'/typist/ascii.js',
'/typist/typist.js',
'/typist/page.js'

],
establish: true

} );

scenarist .display = 'typist';

};
