function solution(n) {
    var answer = 0;
    
    if(n/7 <= 1){
        answer = 1
    }if(n/7 >= 1){
        answer = Math.ceil(n/7)
    }
    
    return answer;
}