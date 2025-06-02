let countdownInterval;

function startCountdown(){
  clearInterval(countdownInterval); 
  const target = new Date(document.getElementById("targetDate").value);
  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById("timer").textContent = "時間になりました！";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").textContent =
      `${days} 日 ${hours} 時間 ${minutes} 分 ${seconds} 秒`;
  }, 1000);
}

function addToDo(){
  const input=document.getElementById("todo-input");
  const text=input.value;
  if (text==="")return;
  const li=document.createElement("li");
  li.textContent=text;
  const deleteBtn=document.createElement("button");
  deleteBtn.textContent="削除";
  deleteBtn.onclick=()=>li.remove();
  li.appendChild(deleteBtn);
  document.getElementById("todo-list").appendChild(li);
  input.value="";
}