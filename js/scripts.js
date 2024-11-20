function newItem() {
   let li =  $('<li></li>');
   $('ol').append(li);
   let inputValue = $('#input').val();
   let text = document.createTextNode(inputValue);
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
   }

    //2. Crossing out an item from the list of items:
    
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //3(i). Adding the delete button "X":
    //why isn't the code below working? I found "it" on https://api.jquery.com/add/#add-selector
    // let crossOutButton = $(li).add(<crossOutButton> 'X' </crossOutButton>);
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    function deleteListItem() {
         li.addClass("delete")
    }
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    
 // 4. Reordering the items: 
  $('#list').sortable();
  
 // 5. Clear input after adding item
  $("#input").val(""); 
}

  //6. Add Enter key functionality
$("#input").on("keydown", function (event) {
if (event.key === "Enter") {
event.preventDefault(); // Prevent form submission or unwanted behavior
newItem();
}
});
