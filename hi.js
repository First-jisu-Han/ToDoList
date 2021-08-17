const form=document.querySelector(".js-form");
const input =form.querySelector("input");
const hi=document.querySelector(".js-hi");


const USER_LS="currentUser";
const SHOWING_CN="showing";


function saveName(text){
    localStorage.setItem(USER_LS,text);

    //localStorage에 입력된 currentUser 즉 key와 value 즉 text와 같이 입력받아 
    //저장한다.
}



function handleSubmit(event){
    event.preventDefault();
    /*preventDefault() 메소드는preventDefault를 호출하게되면, 
    일반적으로는 브라우저의 구현에 의해 처리되는 기존의 액션이
    동작하지 않게되고, 그 결과 이벤트가 발생하지 않게된다.*/
    
    /*submit라는 이벤트가 발생하면, 기존에 브라우저는 새로고침을 했는데 
    이 메소드를 통해서 새로고침되는 것을 막아준다.*/
    const currentValue=input.value;
    //input창의 안의 내용을 가져온다. 
    showHi(currentValue);
    // input창의 안의 내용을 보여준다
    saveName(currentValue);
    //input 창의 안의 내용을 저장한다. 


}



function askForName(){
    form.classList.add(SHOWING_CN);
//클래스가 form에 what is your name? input 창을 보여줄 것이다.
//currentUser가 있는경우에는 밑의 showHi의 hellow ~ 을 보여줄 것이다.    
form.addEventListener("submit",handleSubmit);

}


function showHi(text){
    form.classList.remove(SHOWING_CN);
//텍스트를 색칠하려면 폼을 숨겨놔야한다. 
//form의 index.css의 showing 클래스의 기능을 지운다.
    hi.classList.add(SHOWING_CN);
//hi 클래스 안에 SHOWING_CN 즉, showing 클래스를 추가한다. 
    hi.innerText=`Hellow ${text}`;
}

//showHi() 메소드의 경우에는 유저이름을 불러오도록한 것이지, 저장하는 
//함수가아니다

function getName(){
    const currentUser=localStorage.getItem(USER_LS);
    // locaStorage에서 currentUser의 value를 가져오는 코드 
    if(currentUser==null){
        //유저가 없는 경우임. 
        askForName();
    }
    else{
        //유저가 있는 경우임.
        showHi(currentUser);
    }
}

function init(){
    getName();

}
init();
/* local storage 로컬 스토리지란 작은 자바스크립트 정보들을 
저장하는 것 */
