
 const Pname = document.querySelector('#Pname');
 const date = document.querySelector('#Pdate');
 const amount = document.querySelector('#Pamount');
 const addbtn = document.querySelector("#addbtn");
 const bottom = document.querySelector('.bottom');
function addList()
{
 
   const list = document.createElement('div');
   list.classList.add('list')

   const htmlData = ` <div class="list">
   <div class="newName"></div>
   <div class="newDate"></div>
   <div class="newAmount"></div>
 </div>`;
  
  
//  newName.innerHTML = "HIII";
//  newDate.innerHTML = document.querySelector('#Pdate').nodeValue;
//  newAmount.innerHTML = document.querySelector('Pamount').nodeValue;

 list.insertAdjacentHTML('afterbegin',htmlData);
 let newName = list.querySelector('.newName');
 const newDate = list.querySelector('.newDate');
 const newAmount = list.querySelector('.newAmount');

 newName.innerHTML = Pname.value;
 newDate.innerHTML = Pdate.value;
 newAmount.innerHTML = Pamount.value;

 
 bottom.appendChild(list);



}

addbtn.addEventListener('click',addList)