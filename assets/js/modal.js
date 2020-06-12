$(document).ready(function(){
    $("#myModal").modal(toggle)
        // Show the Modal on load
    $("#myModal").modal("show");
      
    // Hide the Modal
    $(".myBtn").click(function(){
      $("#myModal").modal("hide");
    });
  });