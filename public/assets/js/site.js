$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $("#first_name").text(data.first_name);
  });
});

var siteForm = $("form.create");
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

$(".create").on("submit", function (event) {
  event.preventDefault();
  console.log("in submit button clicked on site.js");

  var siteData = {
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
  console.log(siteData, "user in site.js");
  // if (!siteData.facility || !siteData.address || !siteData.phone_1 || !siteData.website) {
  //   return;
  // }
  // // If we have an email and password, run the signUpUser function
  // createSite(siteData.facility, siteData.address, siteData.phone_1, siteData.website);
  // facility.val("");
  // address.val("");
  // phone_1.val("");
  // website.val("");

  $.ajax({
    method: "POST",
    url: "/api/sane_results",
    data: siteData
  }).then(function (site) {
    console.log("new site added");
    location.href = "/provider";
  })
})