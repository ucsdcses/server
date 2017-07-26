var getCookie = function(name,value) {
  if(document.cookie.indexOf(name) == 0) //Match without a ';' if its the firs
    return -1<document.cookie.indexOf(value?name+"="+value+";":name+"=");
  else if(value && document.cookie.indexOf("; "+name+"="+value) + name.length + value.length + 3== document.cookie.length) //match without an ending ';' if its the last
    return true;
  else { //match cookies in the middle with 2 ';' if you want to check for a value
    return -1<document.cookie.indexOf("; "+(value?name+"="+value + ";":name+"="));
  }
};

$.fn.serializeObject = function()
{
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

function isLoggedIn() {
  return getCookie('Authorization');
}
