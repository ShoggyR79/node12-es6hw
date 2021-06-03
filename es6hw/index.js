let historyArr = []
const guessNumber = Math.round(Math.random() * 100);


const onGuess = () => {
    let num = parseInt(document.getElementById("userInput").value);
    document.getElementById("userInput").value = "";
    let message = "";
    if (num == guessNumber) {
        message = "Chúc mừng bạn đã đoán đúng số!";
    } else if (num < guessNumber) {
        message = "số nhập vào nhỏ hơn số cần tìm";
    }
    else {
        message = "số nhập vào lớn hơn số cần tìm";
    }
    document.getElementById("result").innerHTML = message;
    historyArr.push(num);
    if (num == guessNumber) {
        document.getElementById("guessHistory").innerHTML = (historyArr.map((num, index) => {
            return `<li>
                Lần ${index}: ${num}
            </li>`
        })).join('')
        document.getElementById("historyDiv").className = "card mt-3"
    }
}

