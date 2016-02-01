function doThisLater(time, func) {
  if (typeof func == "function") {
    setTimeout(func, time * 1000);
  }
}

function bugMe() {
  alert("Buy this app");
}

function bugMeAgain() {
  alert("But you really want it");
}

doThisLater(1, bugMe);
doThisLater(5, bugMeAgain);