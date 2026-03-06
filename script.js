function sendMessage() {
    let input = document.getElementById("userInput").value;
    let response = chatbotResponse(input);
    document.getElementById("response").innerText = response;
}
