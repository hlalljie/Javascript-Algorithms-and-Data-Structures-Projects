/* Telephone Number Validator */
/* 
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
*/
function telephoneCheck(str) {
    let phoneCheck = /^(1[-| ]{0,1}){0,1}([(][0-9]{3}[)]|[0-9]{3})[-| ]{0,1}[0-9]{3}[-| ]{0,1}[0-9]{4}$/;
  
    return phoneCheck.test(str);
  }
  
  console.log(telephoneCheck("5555555555"));