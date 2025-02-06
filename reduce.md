# reduce

for문을 돌려서 최종적으로 다른 무언가를 만드는 목적. return필수

`Array.prototype.reduce(callback[, initialValue])`

- `initialValue`: 초기값. 생략시 첫번째 인자가 자동 지정되며, 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생한다.
- `callback`: `function (accumulator, currentValue[, currentIndex[, originalArray]])`
  - `accumulator`: 누산기는 콜백의 반환값을 누적한다. 콜백의 이전 반환값 또는, 콜백의 첫번째 호출이면서 **initialValue**를 제공한 경우에는 **initialValue**의 값이다.
  - `currentValue`: 현재값.
  - `currentIndex`: 현재 인덱스, **initialValue**를 제공한 경우 0, 아니면 1부터 시작.
  - `originalArray`: **reduce()** 를 호출한 배열.

```js
const arr = [1, 2, 3];
const res = arr.reduce(function (p, c, i, arr) {
  console.log(p, c, i, arr, this);
  return p + c;
}, 10);

/*
10 1 0 [1, 2, 3] window
11 2 1 [1, 2, 3] window
13 3 2 [1, 2, 3] window
console.log(res) //16
*/
```

```js
const arr = ["a", "b", "c", "d"];
const str = arr.reduce(function (res, item, index, array) {
  res[item] = item;
  return res;
}, {});
console.log(str); //{a: 'a', b: 'b', c: 'c', d: 'd'}
```

```js
const arr = [1, 2, 3, 4];
const str = arr.reduce(function (res, item, index, array) {
  return res + item;
}, ""); //''생략이 1이 출력.
console.log(str); //1234
```

```js
const arr = ["a", "b", "c", "d"];
const str = arr.reduce(function (res, item, index, array) {
  return res + item;
});
console.log(str); //abcd
```

```js
const arr = [10, 20, 30, 40, 50];
const r = arr.reduce(function (p, c) {
  return p + c;
});
console.log(r); //150
```

return 생략

```jsx
const arr = [10, 20, 30, 40, 50];
const r = arr.reduce((p, c) => p + c);
console.log(r); //150
```

## reduce를 사용하면 좋은점

for문으로 돌릴 경우

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = 0;
for (let b = 0; b < a.length; b++) {
  res += a[b];
}
//55
```

reduce문으로 돌릴 경우

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = a.reduce(function (a, c) {
  return a + c;
});
console.log(res); //55
```
