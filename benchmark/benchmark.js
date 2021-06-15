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

// MODULES //

var bench = require( '@stdlib/bench' );
var isCollection = require( '@stdlib/assert-is-collection' );
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var Int32Array = require( '@stdlib/array-int32' );
var Int16Array = require( '@stdlib/array-int16' );
var Int8Array = require( '@stdlib/array-int8' );
var Uint32Array = require( '@stdlib/array-uint32' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
var pkg = require( './../package.json' ).name;
var convertArraySame = require( './../lib' );


// MAIN //

bench( pkg+':dtype=generic', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, arr );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=float64', function benchmark( b ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	v = new Float64Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, v );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=float32', function benchmark( b ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	v = new Float32Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, v );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=int32', function benchmark( b ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	v = new Int32Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, v );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=int16', function benchmark( b ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	v = new Int16Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, v );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=int8', function benchmark( b ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	v = new Int8Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, v );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint32', function benchmark( b ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	v = new Uint32Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, v );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint16', function benchmark( b ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	v = new Uint16Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, v );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint8', function benchmark( b ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	v = new Uint8Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, v );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint8c', function benchmark( b ) {
	var arr;
	var out;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	v = new Uint8ClampedArray( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArraySame( arr, v );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
