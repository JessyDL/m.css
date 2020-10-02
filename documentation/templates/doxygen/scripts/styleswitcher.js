function setActiveStyleSheet(title) {
   var i, a;
   var allElements = document.getElementsByTagName("link");
   for(i=0; i < allElements.length; i++) {
     a = allElements[i];
     if(a != null && a.getAttribute("rel")?.indexOf("style") != -1
        && a.getAttribute("title")) {

        a.disabled = a.getAttribute("title") != title;
       setCookie("stylesheet", title);
     }
   }
}

function html_load() {
  document.body.style.visibility='visible';
  var cookie = getCookie("stylesheet");
  if(cookie && cookie != "") {
    setActiveStyleSheet(cookie);
  }
}

function setCookie(cname, cvalue) {
  setCookie(cname, cvalue, 3650);
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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