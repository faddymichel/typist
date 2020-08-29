const Play = {};
export default Play;

const character = Play .character = {};

character .events = [ 'line', '#line' ];
character .action = function action ( script, cue, blooper ) {

const { contrato } = this;
const { page } = contrato;
const { argument } = script .details;

switch ( script .action ) {

case 'insert':

page.insert (
new Date () .getTime (),
argument
);

break;

/*
case 'next':

page .next ();

break;

case 'point':

page .point ( argument );

break;

case 'traverse':

for ( const point of page .traverse () )
console .log ( '#' + point .mark, point .content );

break;
case 'remove':
page .remove ( argument );
*/

}

const line = `#line #insert ${ JSON .stringify ( {

content: page .pointer .content,
mark: page .pointer .mark

} ) }`;

console .log ( line );
cue ( line );

};
