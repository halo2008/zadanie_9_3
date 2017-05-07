var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'zielone słonie';
var animalUpper = animal.toUpperCase();
var textChange = text.replace('Papugi', animalUpper);
var partOFtext = text.slice(0, text.length/2);

console.log(partOFtext);