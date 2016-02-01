var app = function (doc) {
  "use strict";
  
  return {
    // getter
    get message() {
      return "If you can read this, then it worked - namespace";
    },
    // function
    didSomething: function (x) {
      return "you gave me " + JSON.stringify(x);
    }
  };
} (document);