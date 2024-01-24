document.getElementById("send-btn").addEventListener("click", function () {
  sendMessageToAI();
});

function sendMessageToAI() {
  let userInput = document.getElementById("user-input").value;

  let requestBody = {
    model: "gpt-3.5-turbo-1106",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: userInput }
    ],
    temperature: 1,
  };

  let requestHeaders = {
    Authorization: "Bearer xxxxxxxxxxxxxxxx",
  };

  axios
    .post("https://api.openai.com/v1/chat/completions", requestBody, {
      headers: requestHeaders,
    })
    .then((response) => {
      let reply = response.data.choices[0].message.content;
      document.getElementById("text1").textContent = reply;
    })
    .catch((error) => {
      console.error("Error ssnding request to AI:", error);

    });
}
