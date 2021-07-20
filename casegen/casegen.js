document.getElementById("content").innerHTML = gen();

function button() {
    document.getElementById("content").innerHTML = gen();
}

function gen() {
    let first = Math.floor(Math.random() * 2);
    let second = Math.floor(Math.random() * 2);
    let third = Math.floor(Math.random() * 2);
    let num = Math.floor(Math.random() * 9) + 1;
    let lr = Math.floor(Math.random() * 2);
    let out = Math.floor(Math.random() * 3);
    let text = out + "アウト<br>";
    let runner = "ランナー";
    if (first == 1) {
        runner = runner + "1";
    }
    if (second == 1) {
        if (first == 1) {
            runner = runner + ",";
        }
        runner = runner + "2";
    }
    if (third == 1) {
        if (first == 1 || second == 1) {
            runner = runner + ",";
        }
        runner = runner + "3";
    }
    if (first == 0 && second == 0 && third == 0) {
        runner = runner + "なし";
    } else {
        runner = runner + "塁"
    }
    if (first == 1 && second == 1 && third == 1) {
        runner = "ランナー満塁";
    }
    text = text + runner + "<br>";
    text = text + "バッター" + num + "番";
    if (lr == 0) {
        text = text + "（左）" + "<br>";
    } else {
        text = text + "（右）" + "<br>";
    }
    return text;
}