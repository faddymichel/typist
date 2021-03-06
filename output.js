export const events = [ '#o', '#output' ];
export const action = {};

action [ '.i' ] = action [ '.init' ] = function init () {

const setting = this;

setting .output = ( { selector, namespace, tag, attributes, content, html, reference } ) => {

const parent = typeof selector === 'string' ? document .querySelector ( selector ) : null;

if ( !parent )
return null;

const element = typeof tag !== 'string' ?
parent :
( typeof namespace === 'string' ?
document .createElementNS ( namespace, tag ) :
document .createElement ( tag ) ) || parent;

if ( typeof attributes === 'object' )
for ( const attribute in attributes )
attribute .startsWith ( 'on' ) ?
element [ attribute ] = attributes [ attribute ] :
element .setAttribute ( attribute, attributes [ attribute ] );

if ( typeof content === 'string' )
element .textContent = content;

if ( typeof html === 'string' )
element .innerHTML = html;

if ( parent !== element )
parent .insertBefore (
element,
typeof reference === 'string' ? document .getElementById ( reference ) : null
);

return element;

};

};
