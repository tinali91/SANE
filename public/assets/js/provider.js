$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".provider-name").text(data.email);
  });

  $(".delete").on("click", function() {
    console.log("hit delete");
    var id = $(this).parents("li").attr("data-id");
    alert(id);
  
    $.ajax({
        method: "DELETE",
        url: `/api/sane_results/${id}`
    }).then(function(dbSite) {
        console.log("result deleted", dbSite);
        location = location;
    })
  })
});

$("#delete").on("click", function() {
  var id = $(this).parents("tr").attr("data-id");
  alert(id);

  $.ajax({
      method: "DELETE",
      url: `/api/sane_results/${id}`
  }).then(function(dbSite) {
      console.log("result deleted", dbSite);
      location = location;
  })
})

