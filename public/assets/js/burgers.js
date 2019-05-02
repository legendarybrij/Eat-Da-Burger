// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  document.body.style.background = "rgb(236, 167, 39)";

  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newdevour = $(this).data("newdevour");

    var newdevourState = {
      devour: newdevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(
      function() {
        console.log("changed devour to", newdevour);
        // Reload the page to get the updated list
       location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      burger_name: $("#ca").val().trim(),
      devour: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
       location.reload();
      }
    );
  });

  // $(".change-devour").on("click", function(event) {
  //   var pic = "<img>";
  //   var message = "<div>";

  //   $(pic).appendTo("#uploadPic");
  //   $(pic).attr("src", "/assets/img/eatburger.gif");
  //   $(message).appendTo("#uploadPic");
  //   $(message).text("hello people");
  // });



});
