import { Scenarist } from '/scenarist/index.js';

window .onload = () => {

const scenarist = new Scenarist ();
scenarist .scenario ( {

name: 'typist',
paths: [

'/typist/output.js',
'/typist/stage.js',
'/typist/input/script.js',
'/typist/input/action.js',
'/typist/input/ws.js',
'/maitre/prompt.js',
'/typist/prompt.js',
'/typist/line.js'
//'/typist/typist.js'
////'/maitre/play/contrato.js'

],
setting: {

input: {},
ws: {

scheme: 'ws',
host: 'localhost',
port: 1300,

}

},
establish: true

} );

scenarist .display = 'typist';

};
