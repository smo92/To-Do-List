function newItem(){
    let li = $('<li></li>');
    let inputValue = $('input').val();

    li.append(inputValue);

    //Adding item to list with Add button
    if (inputValue === ''){
        alert('This feild is required');
    }else{
        $('#list').append(li);
    }
    
    //put line through items when clicked
    li.on('dbclick', function(){
     li.addClass('strike');
   });

    //adding delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
      crossOutButton.on('click', deleteItem);

    //delete list item when button is clicked
    function deleteItem(){
        li.addClass('delete');
    }

    //change order of list
    $('#list').sortable();// list is sortable using mouse
}