# Lotide JS Library

Lodash clone for LHL

<br />

---

## ********** Equality checks **********

---

<br />

Functions used to compare, returning true or false.

<!-- eqArrays -->

``` javascript
eqArrays(arrayOne, arrayTwo)
```
- Returns `true` or `false` after checking if the arrays are equal
  - *Does not currently support nested arrays, or if an array contains an object
- `arrayOne` and `arrayTwo` can be given any array arguments

<!-- eqObjects -->

``` javascript
eqObjects(object1, object2)
```
- Returns `true` or `false` after checking if two objects are equal
  - *Does not currently support nested objects or objects that have a nested array as a value. (Can support a first-levle object value being a non-nested array)
- `object1` and `object2` can be given any array arguments

<br />
<br />
<br />

---

## ********** Assertion functions **********

---

<br />

Functions used to return `Assertion Passed` or `Assertion Failed` whether two arguments are equal.

<!-- assertEqual -->

``` javascript
assertEqual(actual, expected)
```
- Returns `Assertion Passed` or `Assertion Failed` after checking if the passed arguments are equal.
- `actual` and `expected` can be given any argument (primitive values. see below for Array and Object variants)

<!-- assertArraysEqual -->

``` javascript
assertArraysEqual(actual, expected)
```
- Returns `Assertion Passed` or `Assertion Failed` after checking if the two arrays are equal.
- `actual` and `expected` can be given any two arrays as arguments (\*limitations based on `eqArrays` function above)

<!-- assertObjectsEqual -->

``` javascript
assertObjectsEqual(actual, expected)
```
- Returns `Assertion Passed` or `Assertion Failed` after checking if the two objects are equal.
- `actual` and `expected` can be given any two objects as arguments (\*limitations based on `eqObjects` function above)

<br />
<br />
<br />

---

## ********** Array functions **********

---

<br />

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

<!-- MAP -->

``` javascript
map(array, callBackFn)
```
- Mimics .map() behavior and applies the `callBackFn` argument against the `array` items
- `map(["never", "gonna", "give", "you", "up"], word => word[0])` = `["n", "g", "g", "y", "u"]`

<!-- TAKEUNTIL -->

``` javascript
takeUntil(array, callBackFn)
```
- Loops through a given `array` until the condition in the `callBackFn` returns true. A new array is returned with the preceeding values.

> const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

- `takeUntil(data1, x => x < 0)` => `[1, 2, 5, 7, 2]`

> const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood""];

- `takeUntil(data1, x => x < 0)` => `['I've', 'been', 'to', 'Hollywood']`

<br />
<br />
<br />

---

## ********** Object functions **********

---

<br />

Functions used to manipulate or parse an object

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

<!-- FINDKEY -->

``` javascript
findKey(object, callback)
```
- Given an `object` of single key/value pairs, this will return the first key where the value is found
  - If no matching key is found for the value, return `undefined`

> const data = {\
  &emsp; "Blue Hill": { stars: 1 },\
  &emsp; "Akaleri":   { stars: 3 },\
  &emsp; "noma":      { stars: 2 },\
  &emsp; "elBulli":   { stars: 3 },\
  &emsp; "Ora":       { stars: 2 },\
  &emsp; "Akelarre":  { stars: 3 }\
}

- `findKey(data, x => x.stars === 2)` => `"noma"`

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

<!-- LETTERPOSITIONS -->

``` javascript
letterPositions(string)
```
- An object will be returned containing the index positions of all unique letters in the `string`
  - Spaces are excluded from the output, but do contribute to the positions
- `letterPositions("hello")` => `{ h: [0], e: [1], l: [2,3], o: [4] }`
- `letterPositions("lighthouse in the house")` => `{ l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] }`
