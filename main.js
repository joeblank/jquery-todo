$(document).ready(function() {

var todoApp = $('#todoApp');
var title = $('<h1>Todo App</h1>');
var inputText = $('<input placeholder="add new todo" />');
var btn = $('<button>Add</button>');
var list = $('<ol></ol>');
var clear = $('<button>Clear</button>')

todoApp.append(title);
todoApp.append(inputText);
todoApp.append(btn);
todoApp.append(list);
todoApp.append(clear);

btn.on('click', function() {

  var inputVal = inputText.val();
  inputText.val(' ');
  var newListItem = $('<li></li>').html(inputVal);
  list.append(newListItem);

})

function clearItems() {
  $('li.done').remove();
}

list.on('click','li' , function() {
  console.log('working');
  $(this).toggleClass('done');
})

clear.on('click', clearItems);



})
