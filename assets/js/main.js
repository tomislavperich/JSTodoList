// Check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click X to delete task
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // Grab new task text from input
    var task_text = $(this).val();
    // Reset input field
    $(this).val("");
    // Create a new li and add to ul
    $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + task_text + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});