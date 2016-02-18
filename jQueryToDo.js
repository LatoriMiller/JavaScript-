//jQuery version of  To Do List API
//wrap the jQuery to make sure the DOM has loaded
(document).ready(function(){

//add item
$("#add").click(function(){
  var aaa = $("newToDo").val();
  console.log(aaa);
  $("ul").append("<li>" + aaa + </li>");
});

//removes item once clicked
$("li").click(function(){
  $(this).remove();
  });

});
