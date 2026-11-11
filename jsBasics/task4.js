// Генерація таблиці множення
const number = 5;

// Таблиця множення за допомогою циклу for
console.log("Таблиця множення — цикл for:");

for (let i = 1; i <= 10; i++) {
console.log(number + " x " + i + " = " + (number * i));
}

// Таблиця множення за допомогою циклу while
console.log("Таблиця множення — цикл while:");

let j = 1;

while (j <= 10) {
console.log(number + " x " + j + " = " + (number * j));
j++;
}