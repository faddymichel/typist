#!/usr/bin/env node

'use strict';

import Teatro from '@teatro13/teatro';
import { producer } from './producer.js';

const signature = Symbol ();
const teatro = new Teatro ();

teatro .on ( 'open', () => {

const play = teatro .host ( producer, signature );
const stamp = teatro .issue ( play );
const ticket = teatro .retrieve ( stamp );

teatro .on ( 'participant', ( participant ) => {

participant .setEncoding ( 'utf8' );
participant .removeAllListeners ();
participant .on ( 'error', () => {} );

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
