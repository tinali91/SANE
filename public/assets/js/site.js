// add contact functionality
$("#addSite").on("submit", function(event) {
    event.preventDefault();

    var newSite = {
        country: $("#country").val().trim(),
        state: $("#state").val().trim(),
        county: $("#country").val().trim(),
        city: $("#city").val().trim(),
        facility: $("#facility").val().trim(),
        address: $("#address").val().trim(),
        zip: $("#zip").val().trim(),
        latitude: $("#latitude").val().trim(),
        longitude: $("#longitude").val().trim(),
        phone_1: $("#phone_1").val().trim(),
        phone_2: $("#phone_2").val().trim(),
        website: $("#website").val().trim(),
        additional_info: $("#additional_info").val().trim()
    }
    $.ajax({
        method: "POST",
        url: "/api/site",
        data: newSite
    }).then(function(site) {
        console.log("new site added", site);
        location.href = "/provider";
    })

})
// filter contact by type functionality
$("#filterSites").on("change", function() {
    var type = $(this).val().toLowerCase();
    // alert(type);
    location.href = `/${type}`
})
// delete contact functionality
$(".delete").on("click", function() {
    var id = $(this).parents("tr").attr("data-id");
    // alert(id);

    $.ajax({
        method: "DELETE",
        url: `/api/site/${id}`
    }).then(function(site) {
        console.log("site deleted", site);
        location.href = "/provider";
    })
})