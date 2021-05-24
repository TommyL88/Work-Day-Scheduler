// JQuery
//CDN Link - Content Delivery Network Link 
$("#date").text(moment().format("MMM Do YY"));
//grab and save content from di for each hour
$(".save").click(function(){
  //creating the logic for the click event
  var parentTime = $(this).parent().attr("id");
  //grabbing the content of the textarea using the siblings method (JQuery) and value method
  var content = $(this).siblings('.content').val();

  console.log(parentTime, content);

  localStorage.setItem(parentTime, content)
  
})

//what is parent 

//what is siblings 

//what is this

//change the row background using JQuery syntax
function backgroundChange(){ 
  // retrieve the current time
var currentTime = moment().hours();
  // check each time block using DRY and JQuery syntax

$(".row").each(function(){
  //the value of each row's id which is the time 
var iNum = parseInt($(this).attr("id"));

 // check the current status of each time (past, present, future)
 if(iNum < currentTime){
    // grab the current add a class of past to it 
    $(this).addClass("past");
 }else if(iNum === currentTime){
    $(this).addClass("present");
    $(this).removeClass("past");
 }else{
  $(this).addClass("future");
  $(this).removeClass("past");
  $(this).removeClass("present");
//future added 
//past & present removed 

 }
    // and adjust class accordingly
})
 


}
backgroundChange();
