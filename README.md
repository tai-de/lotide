# Lotide JS Library

## Equality checks

Functions used to compare

<!-- eqArrays -->

``` javascript
eqArrays(arrayOne, arrayTwo)
```
- Returns `true` or `false` after checking if the arrays are equal
  - *Does not currently support nested arrays
- `arrayOne` and `arrayTwo` can be given any array arguments

<!-- assertEqual -->

``` javascript
assertEqual(actual, expected)
```
- Returns `Assertion Passed` or `Assertion Failed` after checking if the test (actual) matches the expected output (expected)
- `actual` can be given any argument (see below for Array variant)
- `expected` is a hard-coded output expectation

<!-- assertArraysEqual -->

``` javascript
assertArraysEqual(actual, expected)
```
- Returns `Assertion Passed` or `Assertion Failed` after checking if the test (actual) matches the expected output (expected)
- `actual` can be given any array or function that returns an array
- `expected` is a hard-coded output expectation

## Array functions

Functions used to manipulate or parse an array

<!-- FLATTEN -->

``` javascript
flatten(array)
```
- Returns a new array after doing a single-level flattening of any nested values/arrays
- `flatten([1, 2, [3, 4], 5, [6]])` => `[1, 2, 3, 4, 5, 6]`

<!-- HEAD -->

``` javascript
head(array)
```
- Returns the head (first value) in a given array
- `head(["Hello", "Lighthouse", "Labs"])` => `"Hello"`

<!-- MIDDLE -->

``` javascript
middle(array)
```
- Returns the middle value of an array
  - If array length is less than 2, return empty array
  - If array length is odd, return exact middle value
  - If array length is even, return middle two values
- `middle([1])` => `[]`
- `middle([1, 2, 3])` => `[2]`
- `middle([1, 2, 3, 4])` => `[2, 3]`

<!-- TAIL -->

``` javascript
tail(array)
```
- Returns the tail (array minus head) in a given array
- `head(["Hello", "Lighthouse", "Labs"])` => `["Lighthouse", "Labs"]`

<!-- WITHOUT -->

``` javascript
without(array, itemsToRemove)
```
- Parses `array` and returns a new array that excludes all of the values passed through `itemsToRemove`
- `without([1, 2, 3], [1])` => `[2, 3]`
- `without(["1", "2", "3"], [1, 2, "3"])` => `["1", "2"]`

## Object functions

Functions used to manipulate or parse an array

<!-- COUNTONLY -->

``` javascript
countOnly(array, object)
```
- An object will be returned containing counts of everything within the array that the `object` parameter listed as `true`
  - If the `object` lists `true` for a key that does not exist in the array, include an undefined value in the object output
- `countOnly(["Jason", "Jason", "Fang", "Agouhanna"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })` => `{ Jason: 2, Karima: undefined, Fang: 1 }`

<!-- COUNTLETTERS -->

``` javascript
countLetters(string)
```
- An object will be returned containing counts of all unique letters in the `string`
  - Spaces are excluded/trimmed from the input
- `countLetters("Hello")` => `{ h: 1, e: 1, l: 2, o: 1 }`

<!-- LETTERPOSITIONS -->

``` javascript
letterPositions(string)
```
- An object will be returned containing the index positions of all unique letters in the `string`
  - Spaces are excluded from the output, but do contribute to the positions
- `letterPositions("hello")` => `{ h: [0], e: [1], l: [2,3], o: [4] }`
- `letterPositions("lighthouse in the house")` => `{ l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] }`

<!-- FINDKEYBYVALUE -->

``` javascript
findKeyByValue(object, value)
```
- Given an `object` of single key/value pairs, this will return the first key where the value is found
  - If no matching key is found for the value, return `undefined`

> const bestTVShowsByGenre = {\
   &emsp; sci_fi: "The Expanse",\
   &emsp; comedy: "Brooklyn Nine-Nine",\
   &emsp; drama: "The Wire",\
   &emsp; space: "The Expanse"\
 }

- `findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")` => `"comedy"`
- `findKeyByValue(bestTVShowsByGenre, "Scandal")` => `undefined`

<!-- EQOBJECTS -->

``` javascript
eqObjects(object1, object2)
```
- Given two `object` arguments of varying lengths/key-value pairs, perform a deep* comparison and return `true` or `false` depending on results
  - *Currently only supports primitive values or single-level arrays, no nested arrays or objects as values

> const cd = { c: "1", d: ["2", 3] };\
const dc = { d: ["2", 3], c: "1" };\
const cd2 = { c: "1", d: ["2", 3, 4] };

- `eqObjects(cd, dc)` => `true`
- `eqObjects(cd, cd2)` => `false`