const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector(".js-toDoList");

const TODOS_LS= "toDos";

const toDos=[];


function saveToDos(){
    // localStorage.setItem(TODOS_LS,toDos);
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //89 JSON.stringif는 자바스크립트 object를 string으로 바꾸어주는 코드이다 
}

function paintToDo(text){
    const li = document.createElement("li");
    //li는 ul 안에 Todo리스트로 받는 내용들이 저장되서 보여져야 하기 
    //때문에 만들어진 것이다. 
    const delBtn=document.createElement("button");
    delBtn.innerText="❌";
    const span=document.createElement("span");
    const newId=toDos.length+1;
    //li 들에게 id를 부여할 필요성을 느낌 -> 삭제할때 어느것을 삭제할지 알아야하니까
    span.innerText=text;
    li.appendChild(delBtn); 
    li.appendChild(span);
    li.id=newId;
    //각 li 목록에 하나씩 1,2,3 등등 id를 부여하게된다. 
    toDoList.appendChild(li);
    const toDoObj={
        text:text,
        id:newId};
        //toDos는 배열이고 , 배열길이 +1을 하면 예시로, [] 빈 배열
        //의 경우에는 0에 1을 더하여 1이 되는 것이다. 
        toDos.push(toDoObj);
        
        //toDos array안에 toDoObj를 넣게 되는 것이다. 
        //push를 사용하여 array안에 element 하나를 넣어줄 수 있다.

        //saveToDos(); 는 push를 한 이후에 호출을해야한다. 그 전에하면 저장할 수 있는
        //것이 아무것도 없어서 저장이 안된다 
        saveToDos();
        //89localStorage에는 자바스크립트의 data를 저장할 수가 없다.왜냐하면 자바스크립트는 
        //89모든 데이터를 String으로 저장하려고 하기때문이다. 
    }





function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}



function showToDoList(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    //getItem은 변수의 값을 반환하여 toDos에 저장해준다. 
    if(loadedToDos !==null){
        console.log(loadedToDos);
        const parsedToDos=JSON.parse(loadedToDos);
      
        // ▼함수를 실행하는데,array에 담겨있는 것들 각각에 한번씩 함수를
        // ▼실행 시켜주는 것이다. toDos에 있는 각각에 대하여 function을 실행할 것이다. 
            
        parsedToDos.forEach(
            function(toDo){
        paintToDo(toDo.text);}
        );
/* toDo는 매개변수이다. 코드 내에서 찾지말것. 
something(parsedToDos[0]);
something(parsedToDos[1]);
something(parsedToDos[2]);

이렇게 배열을 호출해주는 역활
거기에 toDo.text를 했으니, toDo 배열 안에 있는 객체 안에 있는 text값을 출력해준다.*/   
    }
}

function init(){
    showToDoList();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();