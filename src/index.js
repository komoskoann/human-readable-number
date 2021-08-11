module.exports = function toReadable (number) {
    const arrUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    let n1 = number.toString().slice(0, 1);
    let n2 = number.toString().slice(1, 2);
    let n3 = number.toString().slice(2, 3);
    let n4 = number.toString().slice(1, 3);
  

    //return numbers from 0 to 99
    if(number < 20 && number > 0) {
        return(arrUnits[number]);
    } else if (number === 0) {
        return('zero');
    } else if(number >= 20 && number < 100 && number % 10 === 0) {
        return(`${arrDozens[n1]}`);
    } else if(number >= 20 && number < 100 && number % 10 !== 0) {
        return(`${arrDozens[n1]} ${arrUnits[n2]}`);
    } 
    
    //return hundreds: 100, 200, ...
      else if(number >= 100 && number % 100 === 0) {
        return(`${arrUnits[n1]} hundred`);
    }

    //return 105, 208, 509, ...
      else if(number >= 100 && n4 < 10) {
        return(`${arrUnits[n1]} hundred ${arrUnits[n3]}`);
    }

    //return 117, 814, 615, ...
      else if(number >= 100 && n4 >= 10 && n4 < 20) {
        return(`${arrUnits[n1]} hundred ${arrUnits[n4]}`);
    }

    //return 125, 384, 952, ...
      else if(number >= 100 && number % 100 !== 0 && number % 10 !== 0) {
        return(`${arrUnits[n1]} hundred ${arrDozens[n2]} ${arrUnits[n3]}`);
    }
      
    //return 140, 730, 880, ...
      else if(number >= 100 && number % 100 !== 0 && number % 10 == 0) {
        return(`${arrUnits[n1]} hundred ${arrDozens[n2]}`);
    } 
    
}
