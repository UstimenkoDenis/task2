'use strict';

var money = +prompt("Ваш бюджет на месяц?", "");
var time =  prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    Income: [],
    savings: false
};

for( let i = 0; i < 2; i++) {
    let ques = prompt("Введите обязательную статью расходов в этом месяце?", ''),
        answr = prompt("Во сколько обойдется?", '');
    if( (typeof(ques))=== 'string' && (typeof(ques)) != null && (typeof(answr)) != null 
    && ques !='' && answr != '' && ques.length < 50)  {
            console.log("done");
            appData.expenses[ques] = answr;
    }  else {
        i--;
    }
};

// let k=0;
// while (k<2) {
//     let ques = prompt("Введите обязательную статью расходов в этом месяце?", ''),
//         answr = prompt("Во сколько обойдется?", '');
//     if( (typeof(ques))=== 'string' && (typeof(ques)) != null && (typeof(answr)) != null 
//     && ques !='' && answr != '' && ques.length < 50)  {
//             console.log("done");
//             appData.expenses[ques] = answr;
//     }  else {
//         k--;
//     }
//     k++;
// }

// let k=0;
// do {
//     let ques = prompt("Введите обязательную статью расходов в этом месяце?", ''),
//         answr = prompt("Во сколько обойдется?", '');
//     if( (typeof(ques))=== 'string' && (typeof(ques)) != null && (typeof(answr)) != null 
//     && ques !='' && answr != '' && ques.length < 50)  {
//             console.log("done");
//             appData.expenses[ques] = answr;
//     }  else {
//         k--;
//     }
//     k++;
// }
// while (k<2);

appData.moneyPerDay = appData.budget/30;
alert("Ежедневный бюджет" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}