/*Roman Numeral Converter */
/*
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case. 
*/

function convertToRoman(num) {
    let numeral = "";
    if (num >= 1000){
      numeral += "M".repeat(Math.floor(num/1000));
      num = num % 1000;
    }
    if (num >= 900){
      numeral += "CM";
      num -= 900;
    }
    if (num >= 500){
      numeral += "D";
      num -= 500;
    }
    if (num >= 400){
      numeral += "CD";
      num -= 500;
    }
    if (num >= 100){
      numeral += "C".repeat(Math.floor(num/100));
      num = num % 100;
    }
    if (num >= 90){
      numeral += "XC";
      num -= 90;
    }
    if (num >= 50){
      numeral += "L";
      num -= 50;
    }
    if (num >= 40){
      numeral += "XL";
      num -= 40;
    }
    if (num >= 10){
      numeral += "X".repeat(Math.floor(num/10));
      num = num % 10;
    }
    if (num >= 9){
      numeral += "IX";
      num -= 9;
    }
    if (num >= 5){
      numeral += "V";
      num -= 5;
    }
    if (num >= 4){
      numeral += "IV";
      num -= 4;
    }
    if (num >= 1){
      numeral += "I".repeat(Math.floor(num));
    }
    return numeral;
   }
   
   console.log(convertToRoman(44));