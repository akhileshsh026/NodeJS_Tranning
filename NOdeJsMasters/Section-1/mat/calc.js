
// app object

var calc = {};

calc.add = function (no1,no2) {
    return no1+no2;
};

calc.subs = function (no1,no2) {
    if(no1>no2)
     return no1-no2;
    else
     return no2-no1;
};

calc.multi = function (no1,no2) {
    return no1*no2;
};

calc.divide = function (no1,no2) {
    if(no1>no2)
    return no1/no2;
   else
    return no2/no1;
};

// object exported
module.exports = calc;

