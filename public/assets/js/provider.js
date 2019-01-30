$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $("#first_name").text(data.first_name);
  });

  $(".delete").on("click", function() {
    console.log("hit delete");
    var id = $(this).parents("li").attr("data-id");
    confirm("You would like to delete site #" + id);
  
    $.ajax({
        method: "DELETE",
        url: `/api/sane_results/${id}`
    }).then(function(dbSite) {
        console.log("result deleted", dbSite);
        location = location;
    })
  })

  $.get("/update").then(function(data) {
    $("#first_name").text(data.first_name);
  });

  var updateForm = $("form.updateSite");
  var country = $("#country");
  var state = $("#state");
  var county = $("#county");
  var city = $("#city");
  var facility = $("#facility");
  var address = $("#address");
  var zip = $("#zip");
  var latitude = $("#latitude");
  var longitude = $("#longitude");
  var phone_1 = $("#phone_1");
  var phone_2 = $("#phone_2");
  var website = $("#website");
  var other_info = $("#other_info");

  $(".updateSite").on("submit", function(event) {
    event.preventDefault();
    console.log("hit updateSite button");
    var id = $(this).data("value");
    console.log(id, "looking for id");
    // confirm("You would like to update site #" + id);
    var updateData = {
      country: country.val().trim(),
      state: state.val().trim(),
      county: county.val().trim(),
      city: city.val().trim(),
      facility: facility.val().trim(),
      address: address.val().trim(),
      zip: zip.val().trim(),
      latitude: latitude.val().trim(),
      longitude: longitude.val().trim(),
      phone_1: phone_1.val().trim(),
      phone_2: phone_2.val().trim(),
      website: website.val().trim(),
      other_info: other_info.val().trim()
    };
    console.log(updateData, "updateData in provider.js");
    $.ajax({
        method: "PUT",
        url: `/api/sane_results/${id}`,
        data: updateData,
    }).then(function(dbSite) {
        console.log("result updated", dbSite);
        window.location.href = "/provider";
    })
  })
});

