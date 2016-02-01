String.prototype.toYoda = function() {
  return this.split(" ").sort().join(" ").replace("_", "").toUpperCase() + "!";
}
