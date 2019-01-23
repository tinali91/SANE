$("#submit").on("click", function(event) {
    event.preventDefault();
      console.log("in the on click");
  var user = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
  };
  console.log("user", user);

  $.post("/api/user", user,
      function(data) {
          console.log("user data", data);
        $("#email").text(user.email);
        $("#password").text(user.password);

        window.location.href ="/provider";
      });
});