let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const containerEl = document.getElementById("container")
let listItems = " ";

inputBtn.addEventListener("click", function (){
   myLeads.push(inputEl.value)
  renderLeads();
  inputEl.value ='';
   });

function renderLeads(){
    for (let i = 0; i < myLeads.length; i++){
      //listItems = "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
      listItems = `
      <li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
      </li>`
      console.log(listItems);
  }
  ulEl.innerHTML += listItems;
  }
 
  //li = document.createElement("li")
  //li.textContent =  myLeads[i]
  //ulEl.append(li) 