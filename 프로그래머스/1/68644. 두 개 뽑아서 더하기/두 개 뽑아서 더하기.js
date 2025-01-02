function solution(numbers) {
    let answer = [];
    //first - 반복문을 돌려면서 더한 값을 answer 배열에 넣어준다.
    //second - answer값을 Set 객체를 이용해서 반환시켜준다.

    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<i; j++){
            answer.push(numbers[j]+numbers[i]);
        }
    }
    
    // console.log(answer);
    
    return [...new Set(answer)].sort((a,b)=>a-b);
}