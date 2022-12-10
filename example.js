import Typist from './index.js';

const typist = new Typist ( {

name: 'typist/example',
version: '1.0.0',
script: {

platters: {

chicken: {

price: 8.00,
description: 'Chicken over rice with fresh salad and your choice of sauces',

buy ( quantity ) {

const item = this;
const order = item .order = item .order || [];

quantity = parseInt ( quantity ) || 1;

order .push ( quantity * item .price );

return `${ quantity } ${ quantity === 1 ? 'item is' : 'items are' } added to your order.`;

}

}

}


}

} );
