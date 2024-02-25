<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# convertSame

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert an array to the same data type as a second input array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
convertSame = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-convert-same@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-convert-same/tags). For example,

```javascript
convertSame = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-convert-same@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var convertSame = require( 'path/to/vendor/umd/array-convert-same/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-convert-same@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.convertSame;
})();
</script>
```

#### convertSame( x, y )

Converts an array to the same data type as a second input array.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = [ 1.0, 2.0, 3.0 ];
var y = new Float32Array( 0 );

var out = convertSame( x, y );
// returns <Float32Array>[ 1.0, 2.0, 3.0 ]
```

The function supports input arrays having the following data types:

-   `float32`: single-precision floating-point numbers.
-   `float64`: double-precision floating-point numbers.
-   `complex64`: single-precision complex floating-point numbers.
-   `complex128`: double-precision complex floating-point numbers.
-   `generic`: values of any type.
-   `int16`: signed 16-bit integers.
-   `int32`: signed 32-bit integers.
-   `int8`: signed 8-bit integers.
-   `uint16`: unsigned 16-bit integers.
-   `uint32`: unsigned 32-bit integers.
-   `uint8`: unsigned 8-bit integers.
-   `uint8c`: unsigned clamped 8-bit integers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/new-cap-error -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var dtypes = require( '@stdlib/array-dtypes' );
var ctors = require( '@stdlib/array-ctors' );
var convertSame = require( '@stdlib/array-convert-same' );

// Create a generic array:
var arr = filledarrayBy( 5, 'generic', discreteUniform( -100, 100 ) );

// Get a list of array data types:
var DTYPES = dtypes();

// Convert the generic array to each array data type:
var out;
var i;
for ( i = 0; i < DTYPES.length; i++ ) {
    out = convertSame( arr, new ( ctors( DTYPES[ i ] ) )( 0 ) );
    console.log( out );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-convert`][@stdlib/array/convert]</span><span class="delimiter">: </span><span class="description">convert an array to an array of a different data type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-convert-same.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-convert-same

[test-image]: https://github.com/stdlib-js/array-convert-same/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/array-convert-same/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-convert-same/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-convert-same?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-convert-same.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-convert-same/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-convert-same/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-convert-same/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-convert-same/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-convert-same/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-convert-same/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-convert-same/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-convert-same/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-convert-same/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/convert]: https://github.com/stdlib-js/array-convert/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
