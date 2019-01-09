var cal_fox = require('./mat/calc');

// object created 
var app = {};

app.mycalculator = function() {

    var op = console.log('enter the no for operations press \n + = 1 , \n - = 2 , \n * = 3 , \n / = 4 \n');
    var no1 = console.log('Enter no 1');
    var no2 = console.log('Enter no 2');
    
    switch (op) {
        case 1:
               var result =  cal_fox.add(no1,no2);
               console.log('The addition of '+ no1 + ' & ' + no2 + ' is = ' + result );
               break;
        case 2:
               var result =  cal_fox.subs(no1,no2);
               console.log('The Substraction of '+ no1 + ' & ' + no2 + ' is = ' + result );
               break;
        case 3:
               var result =  cal_fox.multi(no1,no2);
               console.log('The Multiplication of '+ no1 + ' & ' + no2 + ' is = ' + result );
               break;
        case 4:
               var result =  cal_fox.divide(no1,no2);
               console.log('The division of '+ no1 + ' & ' + no2 + ' is = ' + result );
               break;
        default:
               console.log('Enter the wrong choise');
            break;
    };

};

app.mycalculator();