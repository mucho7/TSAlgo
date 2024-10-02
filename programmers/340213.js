const convertTimeToSec = (mmss) => {
    const [minute, second] = mmss.split(":").map((str) => parseInt(str));
    
    return 60 * minute + second;
}

const convertAnswer = (sec) => {
    const minute = `${Math.floor(sec / 60)}`.padStart(2, "0");
    const second = `${sec % 60}`.padStart(2, "0");
    
    return `${minute}:${second}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
    // 시간 표현 : "mm:ss"
    // pos : 명령어가 실행될 때의 시간
    // op_start, op_end : 각각 오프닝이 시작되고 끝나는 시간
    // commands : 명령어로 이루어진 Array,  ("next" | "prev")[]
    
    // 구현해야하는 기능 : 10초 전/후 이동, 오프닝 건너뛰기
    // prev : 10초 전으로 이동 || 현 시간이 10초 미만이라면 처음 위치로
    // next : 10초 후로 이동 || 남은 시간이 10초 미만이라면 마지막 위치로
    // 오프닝 건너뛰기 : 언제는 오프닝 시간에 cursor가 들어오면 op_end로 이동
    const videoLenSec = convertTimeToSec(video_len);
    const opStartSec = convertTimeToSec(op_start);
    const opEndSec = convertTimeToSec(op_end);
    
    let currentTime = convertTimeToSec(pos);
    
    if (currentTime >= opStartSec && currentTime <= opEndSec )
        currentTime = opEndSec;
    
    commands.forEach((command) => {
        switch (command) {
            case "next":
                currentTime += 10;
                if (videoLenSec < currentTime) currentTime = videoLenSec;
                break;
            case "prev":
                currentTime -= 10;
                if (currentTime < 0) currentTime = 0;
                break;
            default:
                throw new Error('Wrong Command');
        }
        if (currentTime >= opStartSec && currentTime <= opEndSec )
            currentTime = opEndSec;
    })
    
    return convertAnswer(currentTime);
}