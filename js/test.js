const chatBg = document.getElementById("chat-bg");
const inputChat = document.getElementById("input-chat");
const btn = document.getElementById("send");


function click1() {
  
    if(inputChat.value.trim().length > 0) {
      chatBg.innerHTML += "<p><span> " + inputChat.value + " </span></p>";
      chatBg.scrollTop = chatBg.scrollHeight;
    } else {
      alert("채팅 보낼 문자를 입력해주세요");
    }
    inputChat.value = "";
}

inputChat.addEventListener("keyup", function() {
  if(window.event.key == "Enter") {
    click1();
  }
})
