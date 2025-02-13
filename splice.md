# splice()
**배열의 기존 요소**를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.
`push`,`pop`,`unshift`,`shift`역할을 다 할 수 있다고 보면 된다.
기존 배열의 값을 변경한다.

 - push : 직접 변경함
 - pop : 맨 마지막 반환, 마지막 엘리먼트 삭제함
 - shift : 앞 반환, 앞 엘리먼트 삭제한다.
 - unshift : 첫번째 값에 넣는다.
 - splice(startIndex, deleteCount, item)
 
위 함수들은 직접 값을 변경하기 때문에 실무에서는 다른거를 사용

## 구문
`array.splice(startIndex[, deleteCount[, item1,[item2], ...]]`

- **stratIndex** : 배열의 변경을 시작한 인덱스
- **deleteCount** : 배열에서 제거할 요소의 수
- **item** : 배열에 추가할 요소.(배열 요소를 삭제할 때는 생략)

## 배열 요소 추가
```js
let mine = [0, 1, 2, 3];

//배열 2번째 위치한 곳에 숫자 5를 추가한다.
mine.splice(2,0,5); //[0, 1, 5, 2, 3]

//배열 2번째 위치한 곳에 숫자 5, 7을 추가한다.
mine.splice(2,0,5,7); //[0, 1, 5, 7, 2, 3]
```

## 배열 요소 제거
```js
let mine = [0, 1, 2, 3];

//배열 1번째 부터 1개를 제거한다.
mine.splice(1,1); //[0, 2, 3]

//배열 1번째 부터 2개를 제거한다.
mine.splice(1, 2); //[0, 3]
```

## 배열 요소 교체
```js
let mine = [0, 1, 2, 3];

//배열 1번째 부터 1개를 제거하고 숫자 5개를 추가한다.
mine.splice(1, 1, 5); //[0, 5, 2, 3]

//배열 1번째 부터 2개를 제거하고 숫자 5로 추가한다.
mine.splice(1, 2, 5); //[0, 5, 3]
```

## 배열 요소 추출하기
```js
let mine = [0, 1, 2, 3];

//배열 1번째 부터 1개를 제거한다.
let remove = mine.splice(1,1); //[1]

//배열 1번째 부터 2개를 제거한다.
let remove = mine.splice(1,2); //[1,2]
```

https://mine-it-record.tistory.com/352
