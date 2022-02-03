function newItem(){
    let li = $('<li></li>');
    let inputValue = $('input').val();

    li.append(document.createTextNode(inputValue));

    //Adding item to list with Add button
    if (inputValue = ''){
        alert('This feild is required');
    }else{
        $('#list').append(li);
    }
    
    //put line through items when clicked
    function crossOut(){
        li.toggleClass('strike');
    }
    li.on('click',crossOut);

    //adding delete button
    let deleteButton = $(<button>X</button>);
    deleteButton.addClass('crossOutButton');
    li.append(deleteButton);

    //delete list item when button is clicked
    function deleteItem(){
        li.addClass('delete');
    }
    deleteButton.on('click', deleteItem);

    //change order of list
    $('#list').sortable();
}