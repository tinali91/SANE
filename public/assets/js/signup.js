$(document).ready(function() {

  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var first_name = $("input#first_name");
  var last_name = $("input#last_name");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    console.log("in submit signup form on signup.js");
    event.preventDefault();
    var userData = {
      first_name: first_name.val().trim(),
      last_name: last_name.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData);
    if (!userData.first_name || !userData.last_name || !userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.first_name, userData.last_name, userData.email, userData.password);
    first_name.val("");
    last_name.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the provider page
  // Otherwise we log any errors
  function signUpUser(first_name, last_name, email, password) {
    $.post("/api/signup", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      location.href = "login";
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON, "err.responseJSON signup.js page");
    $("#alert").fadeIn(500);
  }
});
  