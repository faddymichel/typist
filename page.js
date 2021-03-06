export const events = [ '#p', '#page' ];
export const action = {};

action [ '.p' ] = action [ '.prepare' ] = function prepare ( event, action, ... details ) {

const { output } = this;

output ( {

selector: 'body',
html: `
<header>
<h1>
Oscilla
</h1>
</header>
<main id="page"></main>
`

});

};
