console.log("site.js loaded");

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


    // // add site functionality
    // $(document).ready(function() {
    //   console.log("in site.js");
    //     // Getting references to our form and input
    //     var siteForm = $("form.create");
    //     var country = $("input#country");
    //     var state = $("input#state");
    //     var county = $("input#county");
    //     var city = $("input#city");
    //     var facility = $("input#facility");
    //     var address = $("input#address");
    //     var zip = $("input#zip");
    //     var latitude = $("input#latitude");
    //     var longitude = $("input#longitude");
    //     var phone_1 = $("input#phone_1");
    //     var phone_2 = $("input#phone_2");
    //     var website = $("input#website");
    //     var other_info = $("input#other_info");

    //     // When the signup button is clicked, we validate the email and password are not blank
    //     siteForm.on("submit", function(event) {
    //       console.log("in submit on site.js");
    //       event.preventDefault();
    //       var siteData = {
    //         country: country.val().trim(),
    //         state: state.val().trim(),
    //         county: county.val().trim(),
    //         city: city.val().trim(),
    //         facility: facility.val().trim(),
    //         address: address.val().trim(),
    //         zip: zip.val().trim(),
    //         latitude: latitude.val().trim(),
    //         longitude: longitude.val().trim(),
    //         phone_1: phone_1.val().trim(),
    //         phone_2: phone_2.val().trim(),
    //         website: website.val().trim(),
    //         other_info: other_info.val().trim()
    //       };
    //       console.log(siteData, "user in site.js");
    //       if (!siteData.facility || !siteData.address || !siteData.phone_1 || !siteData.website) {
    //         return;
    //       }
    //       // If we have an email and password, run the signUpUser function
    //       createSite(siteData.facility, siteData.address, siteData.phone_1, siteData.website);
    //       facility.val("");
    //       address.val("");
    //       phone_1.val("");
    //       website.val("");
    //     });

    //     // Does a post to the signup route. If successful, we are redirected to the provider page
    //     // Otherwise we log any errors
    //     function createSite(facility, address, phone_1, website) {
    //       console.log("hit api/create in site.js");
    //       $.post("/api/create", {
    //         country: country,
    //         state: state,
    //         county: county,
    //         city: city,
    //         facility: facility,
    //         address: address,
    //         zip: zip,
    //         latitude: latitude,
    //         longitude: longitude,
    //         phone_1: phone_1,
    //         phone_2: phone_2,
    //         website: website,
    //         other_info: other_info
    //       }).then(function(data) {
    //         window.location.replace(data);
    //         location.href = "provider";
    //         // If there's an error, handle it by throwing up a bootstrap alert
    //       }).catch(handleLoginErr);
    //     }

    //     function handleLoginErr(err) {
    //       $("#alert .msg").text(err.responseJSON, "err.responseJSON signup.js page");
    //       $("#alert").fadeIn(500);
    //     }
    //   });


    // // filter contact by type functionality
    // $("#filterSites").on("change", function () {
    //     var type = $(this).val().toLowerCase();
    //     // alert(type);
    //     location.href = `/${type}`
    // })
    // delete contact functionality
    // $(".delete").on("click", function () {
    //     var id = $(this).parents("tr").attr("data-id");
    //     // alert(id);

    //     $.ajax({
    //         method: "DELETE",
    //         url: `/api/site/${id}`
    //     }).then(function (site) {
    //         console.log("site deleted");
    //         location.href = "/provider";
    //     })
    // })