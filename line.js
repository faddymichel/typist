export const character = {};

character .events = [ '#line', 'line' ];
character .action = function action ( script ) {

const { output } = this;
const { mark, content, previous, next } = JSON .parse ( script .details );

switch ( script .action ) {

case 'insert':
case '#insert':

console .log (
'new line inserted',
output ( {

selector: '#page',
reference: 'line',
tag: 'li',
content: content

} )
);

}

};
