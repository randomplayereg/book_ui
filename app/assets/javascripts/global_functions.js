// GET COOKIE BY TAG-NAME
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// SET COOKIE WITH TAG NAME
function setCookie(cname,cvalue,exmins) {
  var d = new Date();
  d.setTime(d.getTime() + (exmins*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// DELETE ALL COOKIES
function deleteAllCookies() {
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

// CHECK EMPTY COOKIES FOR THE APPLICATION
function CookieEmpty(){
  return (getCookie("token") == "" || getCookie("user_id") == "" || getCookie("username") == "");
}


// SERIALIZE DATA TO OBJECT-ARRAY FROM A FORM
function objectifyForm(formArray) {
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++){
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
};

function alertAtElement(element_id, message){
  $("#" + element_id).fadeOut();
  $("#" + element_id).html(message);
  $("#" + element_id).fadeIn();
}

// PRINT A LIST FROM ARRAY - MAINLY FOR PRINTING INVALID INPUT WHILE CREATING/EDITTING USERS
function userInfoAlertAtElement(element_id, error){
  $('#' + element_id).empty();
  var asList = "<ul>";
  if (error.email){
    asList += "<li>" + "<strong>Email: </strong>" + error.email + "</li>";
  };
  if (error.username){
    asList += "<li>" + "<strong>Username: </strong>" + error.username + "</li>";
  };
  if (error.password){
    asList += "<li>" + "<strong>Password: </strong>" + error.password + "</li>";
  };
  asList += "</ul>";
  $('#' + element_id).append(asList);
}

// CHECK EMPTY ELEMENT
function isEmpty( el ){
  return !$.trim(el.html())
};
