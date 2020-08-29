export const character = {};

character .events = [ '#typist', 'typist' ];
character .action = function action ( script ) {

const { input, output } = this;

switch ( script .action ) {

default:

if ( document .getElementById ( 'typist' ) )
break;

output ( {

selector: 'main',
tag: 'article',
attributes: {

id: 'typist',
class: 'scenario',
tabindex: -1

},
html: `
<h2>Typist</h2>
<ol id='page'>
<li id="line"><input
id="line-input"
type="text" /></li>
</ol>
`

} ) .focus ();

const line = document .getElementById ( 'line-input' );
line .onkeyup = ( event ) => {

if ( event .key .toLowerCase () !== 'enter' )
return;

input .ws .send ( `line insert ${ event .target .value }` );
event .target .value = '';

};

}

};
