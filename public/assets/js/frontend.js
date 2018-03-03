$(function() {
  $(".devour-stew").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: true
    };

    // Send PUT request
    $.ajax("/api/stews/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        $(".devour-stew").hide();
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newStew = {
      stew_name: $("#stewName").val().trim(),
    };

    // Send the POST request
    $.ajax("/api/stews", {
      type: "POST",
      data: newStew
    }).then(
      function() {
        location.reload();
      }
    );
  });
});