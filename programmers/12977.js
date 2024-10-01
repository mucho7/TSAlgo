const getCombiSum = (nums) => {
    const combiSumList = [];
    const len = nums.length;
    
    // 세 개의 숫자를 뽑아 더함
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                combiSumList.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    return combiSumList;
};

const getPrimeList = () => {
    const max = 3000;  // 1000을 넘는 세 숫자의 최대합은 3000
    const primeList = Array(max + 1).fill(true);
    primeList[0] = primeList[1] = false;
    
    for (let i = 2; i * i <= max; i++) {
        if (primeList[i]) {
            for (let j = i * i; j <= max; j += i) {
                primeList[j] = false;
            }
        }
    }
    
    return primeList
};

function solution(nums) {
    // nums의 len은 3이상 50 이하
    // num의 최댓값은 1000 => nums의 combination이 가질 수 있는 최댓값은 3000
    // nums는 중복을 허용하지 않는다 => combination은 unique
    // nums에서 서로 다른 3개의 num을 골라 더하고 그게 소수라면 answer에 1을 더한다
    const primeList = getPrimeList();
    const sumList = getCombiSum(nums);
    
    let answer = 0;
    sumList.forEach((sum) => {
        if (primeList[sum]) answer += 1;
    }, 0)
    
    return answer;
}