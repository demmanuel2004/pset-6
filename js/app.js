let items = [];

function displayItems() {

	//Sort by Prioirty 	
	items.sort(function(a, b){
    	return b.priority - a.priority;
	})

	const list = document.querySelector('.todo-list');
	
	list.innerHTML=""; //Clear the list.
	
	Object.entries( items ).forEach(([key, item]) => {
	  
	  var currentPrioirty = item.priority ? 'High' : 'Low';
	  var changePrioirty = item.priority ? 'Low' : 'High';
	  var isCompleted = item.status ? 'strike' : '';
	  var changePrioirtyButton = `<button onclick="changePriority( ${item.id} )">Mark as ${changePrioirty}</button>`;
	  var toggleStatusButton = `<button onclick="changeStatus( ${item.id} )">Toggle Status</button>`;
	  
	  var removeButton = `<button onclick="removeItem( ${item.id} )">Delete</button>`;
	  
	  list.insertAdjacentHTML( 'beforeend', `
			<li class="todo-item ${isCompleted}" data-key="${item.id}">
			      <span>${item.text}</span>
			      <span>${currentPrioirty}</span>
			      
			      <span> ${changePrioirtyButton} </span>
			      <span> ${toggleStatusButton} </span>
			      <span> ${removeButton} </span>
				</li>` 
  		); 			  	  
	  	
	});

	return;
  // const list = document.querySelector('.todo-list');


}

function addItem() {
  const inputText = document.querySelector('input[name="todoText"]');
  
  if( inputText.value == '') {
  	return;
  }
  //Can also query by class
  //const textValue =  document.querySelector('.todoText');
    
  //const selectDropdown = document.querySelector("select.priority");

  const item = {
    text: inputText.value,
    priority : 0,//selectDropdown.value,
    status: 0,
    id: Date.now(),
  };

  items.push(item);
  
  //Reset Form
  inputText.value="";
  //selectDropdown.value=0;
  
  displayItems();


}

function changePriority( key ) {

	//const index = items.findIndex(item => item.id === Number(key));
	const index = items.findIndex(
 function(item) {
		if( item.id == key) {
			return true;
		}
	});	
	items[index].priority = !items[index].priority;
	displayItems();
}

function changeStatus( key ) {

	//const index = items.findIndex(item => item.id === Number(key));
	const index = items.findIndex(
 function(item) {
		if( item.id == key) {
			return true;
		}
	});

	items[index].status = !items[index].status;
	displayItems();
}

function removeItem( key ) {
	//items = items.filter(item => item.id != key);
	items = items.filter( function( item ) {
		return item.id != key;
	});
    displayItems();
}
