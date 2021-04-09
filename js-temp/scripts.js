var faranhiet = celcius => celcius * 9/5 + 32
var celcius = faranhiet => (faranhiet - 32) * 5/9

var Faranhiet1 = parseInt(prompt("Enter faranhiet: ")); 
var Celsius1 = parseInt(prompt("Enter celsius: "));

var result = celcius(Faranhiet1);
alert(Faranhiet1 + " faranhiet is converted to " + result.toFixed() + " celsius."); 