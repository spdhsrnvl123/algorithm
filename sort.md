# sort

javascript에서 배열을 정렬하기 위해서 `sort()`함수를 사용한다.
sort() 메서드를 사용하면 배열의 요소를 <span style="color:orange">**오름차순**</span> <span style="color:red">**내림차순**</span>으로 정렬할 수 있으며, 기존 배열 요소들을 정렬한다.


## sort()메서드의 특징
1. 기본적으로 오름차순으로 정렬한다.
2. 배열 요소를 **문자열로 캐스팅**하고 변환된 문자열을 비교하여 순서를 결정한다.
3. 배열 요소가 `undefined`인 경우에는 문자열로 변환되지 않는다.
4. 배열 요소가 `undefined`인 경우에는 배열의 맨 끝으로 정렬이 된다.

```js
let numbers = [1,10,2,20,3,30];
numbers.sort();

console.log(numbers); //[1,10,2,20,3,30]
```
정렬 순서를 `1,2,3,10,20,30`으로 예상을 했지만, <span style="color:red">**문자열을 비교**</span>하므로 `1,10,2,20,3,30` 순서로 정렬이 된다.
문자열 `10`과 문자열 `2`를 비교할 때, `"1"<"2"` 이므로 `10`이 `2`보다 앞에 존재한다.

위 문제를 해결하려면 비교 함수를 `sort()`메서드에 전달해야 한다.
> arr.sort([compareFunction])

### 비교 함수(compareFunction)
<span style="color:red">정렬 순서를 정의하는 함수.</span>
- 이 **값이 생략**되면, **배열의 element들은 문자열**로 취급되어, 유니코드 값 순서대로 정렬된다.
- 이 함수는 두 개의 배열 element를 파라미터로 입력 받는다.

> if) 이 함수가 a, b 두개의 element를 파라미터로 입력받을 경우
- 리턴하는 값이 0 보다 작을 경우, a가 b보다 앞에 오도록 정렬한다.
- 리턴하는 값이 0 보다 클 경우, b가 a보다 앞에 오도록 정렬한다.
- 만약 0을 리턴하면, a와 b의 순서를 변경하지 않는다.
<span style="color:red">**리턴값**</span>
compareFunction 규칙에 따라서 정렬된 배열을 리턴한다.
이때, 원본 배열인 arr가 정렬이 되고, 리턴하는 값 또한 원본 배열인 arr을 가리키고 있음에 유의해야된다.

#### 비교 함수의 구문
```js
function compare(a,b){
  //정렬 로직
  //return값은 숫자
}
```

#### 비교 함수를 사용하여 정렬
```js
//방법1)
let numbers = [1,10,2,20,3,30];

numbers.sort(fucntion compare(a,b){
	if(a>b) return 1;
    if(a<b) return -1;
    return 0;
}

console.log(numbers) // [1,2,3,10,20,30]

방법2)
let numbers = [1,10,2,20,3,30];

numbers.sort(function comparre(a,b){
	return a -b;
})

console.log(numbers);
```
#### 비교 함수의 동작방법
```js
function compare(a,b){
	if(a > b) return 1;
  	if(a < b) return -1;
}
```
sort()메서드는 한 번에 두 매개 변수 a와 b 값을 비교 함수에 전달하여 배열의 모든 값을 비교한다.

**if(a > b) return 1;**
return value > 0 이므로 a는 b 뒤에 온다.

**if(a<b) return -1;**
return  value < 0 이므로 a는 b 앞에 온다.

**return 0;**
a와 b의 정렬을 유지한다.

다음은 숫자 타입의 "price" 속성을 기준으로 배열을 정렬하는 경우이다.
