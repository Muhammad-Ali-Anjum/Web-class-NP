function ATM(amount) {
  var notes = [5000, 1000, 500, 100,75, 50, 20, 10];
  var result = [];
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];
    var count = 0;
    while (amount >= note) {
      amount = amount - note;
      count = count + 1;
    }
    if (count > 0) {
      result.push(count + " x " + note);
    }
  }
  var output = "";
  for (var j = 0; j < result.length; j++) {
    output = output + result[j];
    if (j < result.length - 1) {
      output = output + " + ";
         }
  }
  return output;
}
console.log(ATM(13500));

function ATM(amount) {
  return [5000,1000,500,100,75,50,20,10]
    .map(n => {
      let c = Math.floor(amount / n);
      amount %= n;
      return c ? `${c} x ${n}` : '';
    })
    .filter(Boolean)
    .join(' + ');
}

console.log(ATM(13500));

