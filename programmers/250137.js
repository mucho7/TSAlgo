function solution(bandage, health, attacks) {
    // bandage : [시전시간, 초당 회복량, 추가 회복량]
    // health : 캐릭터의 최대 체력
    // attacks : [공격 시간, 피해량][] 
      // 붕대 취소 및 데미지 오름차순 정렬
      // 공격시간은 unique
    
    // 캐릭터가 공격으로 사망하면 -1 return
    // 마지막 공격까지 열심히 도닥붕
    const [casting, hps, reward] = bandage;
    
    let answer = health;
    let lastDealt = 0
    attacks.some(([attTime, attDeal]) => {
        // 닥붕닥붕
        const healTime = attTime - lastDealt - 1 // 맞는 시간은 힐이 안됨ㅠ
        answer += healTime * hps + Math.floor(healTime / casting) * reward;
        if (answer > health) answer = health;
        lastDealt = attTime;
        
        // 데미지 받기
        answer -= attDeal
        
        //사망처리
        if (answer <= 0) {
            answer = -1
            return true;
        }
        return false;
    })
    return answer;
}