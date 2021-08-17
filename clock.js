const clockContatiner=document.querySelector(".js-clock");
const clockTitle=clockContatiner.querySelector("h1");

function getClock(){
  const date = new Date();
  const minutes=date.getMinutes();
  const hours=date.getHours();
  const seconds=date.getSeconds();
  clockTitle.innerText = 
  `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

// 04분 07초 등등이 나타나게 만드는 것 . 

function init() {
  getClock();
  setInterval(getClock,1000);
  //getClock 부분은 시간을 얻는 부분 , 시계 부분의 html을 변형시킨다. 실시간 시간 
}

init();

