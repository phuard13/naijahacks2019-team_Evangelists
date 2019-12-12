function validation() {
  var first_name = document.getElementById("first_name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  if (first_name == "" || surname == "" || password == "" || email == "") {
    document.getElementById("eresult").innerHTML = "ALL FIELD REQUIRED";
    return false;
  } else if (first_name.length < 3) {
    document.getElementById("eresult").innerHTML =
      "name must be atleast 3 character";
    return false;
  } else if (surname.length < 2) {
    document.getElementById("eresult").innerHTML =
      "surname must be at least 3 character";

    return false;
  } else if (password.length < 6) {
    document.getElementById("eresult").innerHTML =
      "password must be more than 6 character";
    return false;
  } else if (age < 18) {
    document.getElementById("eresult").innerHTML = "18 above";

    return false;
  } else {
    return true;
  }
}
