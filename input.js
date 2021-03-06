export const establishment = function establishment () {

const setting = this;
const { scenarist } = this;

setting .keyboard = {

map: {}

};

const input = setting .input = function input ( dialogue ) {

switch ( typeof dialogue ) {

case 'string':

input .player (
dialogue .trim () .split ( '\n' )
.map ( line => {

line = line .trim () .split ( ' ' );

return {

event: line [ 0 ],
action: line [ 1 ],
details: line .splice ( 2 )

};

} )
.filter ( line => line .event !== '' )
);

break;

case 'object':

input .player (
( dialogue instanceof Array ? dialogue : [ dialogue ]
);

}

};

input .player = function player ( script, index = 0, chain = true ) {

if ( script instanceof Array && index === script .length )
return;

const line = script [ index ];

if ( chain )

scenarist .play ( line )
.then ( () => input .player ( script, ++index ) )
.catch ( error => console .error ( '#input #scenarist #player #error', error ) );

else {

scenarist .play ( line )
input .player ( script, ++index, chain );

}

};

};
