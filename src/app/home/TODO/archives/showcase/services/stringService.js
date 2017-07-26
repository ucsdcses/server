angularApp.factory('stringService', function () {
  return {
    isValidEmail: function(email) {
      //Regex for emails
      var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      var returnVal = re.test(email);

      if(returnVal) {
        //Check to make sure ucsd.edu
        if(email.endsWith("ucsd.edu")) {
          return true;
        }
      }
      return false;
    },


    passwordWeakness: function(password) {
      //Check length - must be
      if(password.length < 8) {
        return 'Password must be at least 8 characters.';
      }
      var upperCase = false;
      var numbers = false;
      for(var i = 0; i < password.length; i++) {
        if (password.charAt(i).match(/[A-Z]/g)) {
          upperCase = true;
        }
        if (password.charAt(i).match(/[0-9]/g)) {
          numbers = true;
        }
      }

      if(!upperCase)
        return 'Password must contain at least 1 uppercase letter.';

      if(!numbers)
        return 'Password must contain at least 1 number.';

      return null;
    },

    
    isValidGithubURL: function(string) {
      var pattern = new RegExp('(?:git|https?|git@)(?:\\:\\/\\/)?github.com[/|:][A-Za-z0-9-]+?(?:\\/[\\w\\.\\/-]+)?\\/?(?:#\\w+?|\\?.*)?$');
      return (string === "") || pattern.test(string);
    }
  }
});