# find

> 판별 함수를 만족하는 첫 요소를 반환

```js
arr.find(callback[, thisArg])
```

- 반환 타입은 찾은 요소의 타입, 없다면 undefinded
- `callback(element,index,array)`<br />
  콜백 함수가 받는 인자(각 인자는 find 메서드를 호출한 배열에서 받아옴)
  - element : 콜백함수에서 처리할 현재 요소.
  - index(optional) : 콜백함수에서 처리할 현재 요소의 인덱스.
  - array(optional) : `find`함수를 호출한 배열.
- `thisArg`<br />
  선택 항목. 콜백이 호출될 때 `this`로 사용할 객체.

- **원하는 요소 찾기**<br />
  원하는 요소를 찾자마자 메서드를 종료함(뒤쪽 요소는 관심조차 주지도 않는다)

```js
const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];

const find1 = arr.find((element, index, array) => {
  //인덱스 2인 요소를 찾을 때 까지 반복
  console.log("콜백함수를 실행한 배열은? ", array);
  return index == 2;
});
const find2 = arr.find((element, index, arr) => element === 3);
const find3 = arr.find((e) => e > 8);
const find4 = arr.find((e) => e > 10);

console.log("find1:", find1);
console.log("find2:", find2);
console.log("find3:", find3);
console.log("find4:", find4);
```

```js
/*
콜백함수를 실행한 배열은?  [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
콜백함수를 실행한 배열은?  [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
콜백함수를 실행한 배열은?  [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
find1: 9
find2: 3
find3: 9
find4: undefined
*/
```

https://bbaktaeho-95.tistory.com/40
