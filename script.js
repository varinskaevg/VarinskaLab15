// 1 ЗАВДАННЯ
let a = 0;
let result1 = '';

while (a <= 100) {
    let isPrime = true;
    for (let b = 2; b <= Math.sqrt(a); b++) {
        if (a % b === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(a);
        result1 += a + ' ';
    }
    a++;
}
document.getElementById('output1').innerHTML = result1;

// 2 ЗАВДАННЯ
let c = 0;
let result2 = '';

do {
    if (c === 0) {
        console.log(c + " – це нуль");
        result2 += c + ' – це нуль';
    } else if (c % 2 === 0) {
        console.log(c + " – парне число");
        result2 += c + ' – парне число';
    } else {
        console.log(c + " – непарне число");
        result2 += c + ' – непарне число';
    }
    if (c !== 10) {
        result2 += '<br>';
    }
    c++;
} while (c <= 10);
document.getElementById('output2').innerHTML = result2

// 3 ЗАВДАННЯ
let numb = 10000;
let result3 = numb;
let counter1 = 0;

while (result3 >= 50) {
    result3 /= 2;
    counter1++;
}
console.log(`Результат: ${result3}`);
console.log(`Кількість ітерацій: ${counter1}`);
document.getElementById('output3').innerHTML = `Результат: ${result3}<br>Кількість ітерацій: ${counter1}`;

// 4 ЗАВДАННЯ
function findSeason() {
    let month = prompt("Введіть номер місяця (від 1 до 12)");
    let season, monthName;

    switch (Number(month)) {
        case 1:
        case 2:
        case 12:
            season = "Зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "Весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "Літо";
            break;
        case 9:
        case 10:
        case 11:
            season = "Осінь";
            break;
        default:
            alert("Ви ввели некоректне значення!");
            return;
    }
    switch (Number(month)) {
        case 1:
            monthName = "Січень";
            break;
        case 2:
            monthName = "Лютий";
            break;
        case 3:
            monthName = "Березень";
            break;
        case 4:
            monthName = "Квітень";
            break;
        case 5:
            monthName = "Травень";
            break;
        case 6:
            monthName = "Червень";
            break;
        case 7:
            monthName = "Липень";
            break;
        case 8:
            monthName = "Серпень";
            break;
        case 9:
            monthName = "Вересень";
            break;
        case 10:
            monthName = "Жовтень";
            break;
        case 11:
            monthName = "Листопад";
            break;
        case 12:
            monthName = "Грудень";
            break;
    }
    alert("Місяць – " + monthName + '     ' + " Пора року – " + season);
}

// 5 Завдання
function convertTemperature() {
    let Tc = prompt("Введіть температуру в градусах Цельсія:");
    let Tf = (9/5) * Tc + 32;
    alert("Температура в градусах Фаренгейта: " + Tf + '°');
}


// 6 Завдання
function getDayOfWeek() {
    let day = parseInt(prompt("Введіть число від 1 до 7"));

    switch (day) {
        case 1:
            alert("Понеділок");
            break;
        case 2:
            alert("Вівторок");
            break;
        case 3:
            alert("Середа");
            break;
        case 4:
            alert("Четвер");
            break;
        case 5:
            alert("П'ятниця");
            break;
        case 6:
            alert("Субота");
            break;
        case 7:
            alert("Неділя");
            break;
        default:
            alert("Ви ввели некоректне значення!");
            break;
    }
}