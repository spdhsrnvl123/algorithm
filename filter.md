# filter

`filter()`메서드는 주어진 함수의 테스트를 통과하여 모든 요소를 모아 새로운 배열로 반환한다.

## 특징

- 값이 존재하는 인덱스에 대해서만 호출.
- 삭제 또는 값이 없는 배열은 filter 함수가 실행되지 않는다.
- 기존 배열의 값을 변경하지 않는다.
- 처리되는 범위는 callback의 첫 호출 전에 설정. callback 호출 후 기존 배열을 추가해도 추가된 요소는 filter 함수에서 반영되지 않는다.

## 구문

```
arr.filter(callback(element[, index[, array]])[, thisArg])
```

## 매개변수

- `callback`<br />
  각 요소를 테스트 할 함수.
  - element : `true`를 반환하면 요소를 유지하고,`false`를 반환하면 버린다. 다음 세 가지 매개변수를 받는다. 처리할 현재 요소.
  - index(Optional) : 처리할 현재 요소의 인덱스.
  - array(Optional) : `filter`를 호출한 배열.
- `thisArg(Optional)` callback을 실행할 때 `this`로 사용하는 값.

## 반환 값

테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환한다.

길이가 6이상인 단어 필터링

```js
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result); // ['exuberant', 'destruction', 'present']
```

배열 요소에서 5의 배수인 요소만 반환

```js
const arr = [1, 5, 8, 10, 12, 15, 16, 20];

var newArr = arr.filter((data) => {
  return data % 5 === 0 ? true : false;
});

console.log(newArr); //[5,10,15,20]
```

참고 : https://developer-talk.tistory.com/2

## 배열 내용 검색

```js
const movies = ["avengers", "Thor", "spiderman", "Ironman", "antman"];

const filterMovie = (query) => {
  return movies.filter((value) => {
    return value.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
};

console.log(filterMovie("man"));
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
