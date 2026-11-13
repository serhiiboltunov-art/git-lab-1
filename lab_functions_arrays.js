const grades = [10, 8, 12, 7, 9, 11];

// Завдання 1. Виведення оцінок
console.log("Оцінки студента:");

for (let i = 0; i < grades.length; i++) {
console.log(grades[i]);
}

console.log("Кількість оцінок:", grades.length);

// Завдання 2. Підрахунок середнього бала
function calculateAverage(grades) {
let sum = 0;

for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

return sum / grades.length;
}

// Завдання 3. Пошук найвищої оцінки
function findMaxGrade(grades) {
let max = grades[0];

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > max) {
        max = grades[i];
    }
}

return max;
}

// Завдання 4. Підрахунок високих оцінок
function countHighGrades(grades) {
let count = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 10) {
        count++;
    }
}

return count;
}

// Завдання 5. Виведення загального результату
function showResults(grades) {
console.log("===== АНАЛІЗ ОЦІНОК =====");

console.log("Середній бал:", calculateAverage(grades));
console.log("Найвища оцінка:", findMaxGrade(grades));
console.log("Кількість високих оцінок:", countHighGrades(grades));

console.log("=========================");
}

showResults(grades);