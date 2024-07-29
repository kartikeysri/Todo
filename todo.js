let task=[];

printlist();
function addtodo(){
  let inputtask= document.querySelector('#inputclass');
let todoitem=inputtask.value;
let inputdate=document.querySelector('#dateinput'); 
 let tododate=inputdate.value;
 if (todoitem && tododate){ 
 task.push({item: todoitem, date: tododate});
    inputtask.value = '';
    inputdate.value = '';
printlist();
}
 else{
  alert('Please Enter the values');
 }
}

function printlist(){
     let container=document.querySelector('.container');
     let newhtml='';
     for(let i=0;i<task.length;i++){
      newhtml+=`
           <span class="size">${task[i].item}</span>
           <span class="size">${task[i].date}</span>
           <button onclick=" task.splice(${i},1);printlist();" class="deleteme">Delete</button>
       `;
    }
    container.innerHTML=newhtml;
}


