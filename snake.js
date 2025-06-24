
// 게임 실행
playGame();

function nextstart(current, dice) {
    const next = current + dice;
    if (next == 4) return 14;
    else if (next == 8) return 30;
    else if (next == 21) return 42;
    else if (next == 28) return 76;
    else if (next == 50) return 67;
    else if (next == 71) return 92;
    else if (next == 80) return 99;

    return dice;
}
function snake(current, dice2) {
    const next = current + dice2;
    if (next == 97) return 78;
    else if (next == 95) return 56;
    else if (next == 88) return 24;
    else if (next == 62) return 18;
    else if (next == 48) return 26;
    else if (next == 36) return 6;
    else if (next == 32) return 10;

    return dice2;
}

function playGame() {
    let start = 1;
    let turn = 1;

    console.log("게임 시작! 목표: 100에 도달하세요\n");

    while (start < 100) {
        const dice = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        const move = nextstart(start, dice);
        const snakeMove = snake(start, dice2);
        if(move == 14 || move == 30 || move == 42 || move == 76 || move == 67 || move == 92|| move == 99){
            const next = move;
            const move2 = start + dice;
            if(next > 100){
                    const next = 100;
            }
        console.log(`턴 ${turn}: from=${start}, dice=${dice}, move=${move2}, 사다리 타고 이동 next=${next}`);

        start = next;
        turn++;

        }else if(snakeMove == 78 || snakeMove == 56 || snakeMove == 24 || snakeMove == 18 || snakeMove == 26 || snakeMove == 6 || snakeMove == 10){
            const next = snakeMove;
            const move2 = start + dice2;
            if(next > 100){
                    const next = 100;
            }
        console.log(`턴 ${turn}: from=${start}, dice=${dice2}, move=${move2}, 뱀에 물림 next=${next}`);

        start = next;
        turn++;
        }else {
            const next = start + move;
            const move2 = start + dice;
            if(next > 100){
                    const next = 100;
                    console.log(`턴 ${turn}: from=${start}, dice=${dice}, move=${move2}, next=${next}`);
            }else{
                    console.log(`턴 ${turn}: from=${start}, dice=${dice}, move=${move2}, next=${next}`);
            }       
        start = next;
        turn++;
        }
    }
    console.log(`\n도착! 총 ${turn - 1}턴 만에 100에 도달했습니다.`);
}

