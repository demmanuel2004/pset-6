let items = [];

function displayItems() {


    items.sort(function(a, b) {
        return b.priority - a.priority;
    })

    const list = document.querySelector('.todo-list');

    list.innerHTML = "";

    Object.entries(items).forEach(([key, item]) = > {

            var currentPrioirty = item.priority ? 'High' : 'Low';
            var changePrioirty = item.priority ? 'Low' : 'High';
            var isCompleted = item.status ? 'strike' : '';
            var changePrioirtyButton = ` < button onclick = "changePriority( ${item.id} )" > Mark as $ {
                changePrioirty
            } < /button>`;
	  var toggleStatusButton = `<button onclick="changeStatus( ${item.id} )">Toggle Status</button > `;

            var removeButton = ` < button onclick = "removeItem( ${item.id} )" > Delete < /button>`;
	  
	  list.insertAdjacentHTML( 'beforeend', `
			<li class="todo-item ${isCompleted}" data-key="${item.id}">
			      <span>${item.text}</span > < span > $ {
                currentPrioirty
            } < /span>
			      
			      <span> ${changePrioirtyButton} </span > < span > $ {
                toggleStatusButton
            } < /span>
			      <span> ${removeButton} </span > < /li>` 
  		); 			  	  
	  	
	});

	return;
 


}

function addItem() {
  const inputText = document.querySelector('input[name="todoText"]');
  
  if( inputText.value == '') {
  	return;
  }
 
    
  

  const item = {
    text: inputText.value,
    priority : 0,
    status: 0,
    id: Date.now(),
  };

  items.push(item);
  
 
  inputText.value="";
 
  
  displayItems();


}

function changePriority( key ) {

	
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
	
	items = items.filter( function( item ) {
		return item.id != key;
	});
    displayItems();
}
