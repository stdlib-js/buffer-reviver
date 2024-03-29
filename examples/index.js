/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var array2buffer = require( '@stdlib/buffer-from-array' );
var parseJSON = require( '@stdlib/utils-parse-json' );
var buffer2json = require( '@stdlib/buffer-to-json' );
var revivebuffer = require( './../lib' );

var buf = array2buffer( [ 1, 2 ] );
var str = JSON.stringify( buffer2json( buf ) );
console.log( str );
// => '{"type":"Buffer","data":[1,2]}'

var out = parseJSON( str, revivebuffer );
if ( out instanceof Error ) {
	throw out;
}
console.log( out );
// => <Buffer>[ 1, 2 ]
