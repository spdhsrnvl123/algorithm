function solution(n) {
    let answer = 0;
    answer = Array(n).fill().map((_,i)=>i+1).filter(v => v%2 ===0).reduce((a,v)=>a+v,0);
    
    return answer;
}