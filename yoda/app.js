String.prototype.toYoda = function() {
  //return this.split(" ").sort().join(" ").replace("_", "").replace("~", "").toUpperCase() + "!";
  return this.split(" ").sort().join(" ").replace(/_/g, "").replace(/~/g, "").toUpperCase() + "!";
}
