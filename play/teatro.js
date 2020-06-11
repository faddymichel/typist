#!/usr/bin/env node

'use strict';

const Teatro = require ( '@teatro13/teatro' );
const teatro = new Teatro ();

teatro .on ( 'open', () => {

const page = require ( './page' );
const signature = Symbol ();
const play = teatro .host ( page, signature );
const stamp = teatro .issue ( play );
const ticket = teatro .retrieve ( stamp );


teatro .on ( 'participant', ( participant ) => {

participant .setEncoding ( 'utf8' );
participant .removeAllListeners ();
teatro .play ( participant, ticket );

} );

} );

const options = {};
options .ws = {

host: 'localhost',
port: 1300

};
const key = options .lock = Symbol ();

teatro .open ( options );
