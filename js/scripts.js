document.write('--- 1 задание --- \n');

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + '\n');
}


document.write('\n --- 2 задание --- \n');

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > -10 && arr2[i] < -3) {
        document.write(arr2[i] + '\n');
    }
}


document.write('\n --- 3 задание --- \n');

document.write('for \n');

let arr3 = [],
    result = 0;

for (let i = 23; i <= 57; i++) {
    result += i;
    arr3.push(i);
}

document.write(arr3);

document.write('\n Сумма элементов массива ' + result);

document.write('\n\n while \n');

let i = 23,
    arr31 = [];

while (i <= 57) {
    arr31.push(i);
    i++;
}
document.write(arr31);


document.write('\n\n --- 4 задание --- \n');

let arr4 = ['10', '20', '30', '50', '235', '3000'];

for (i = 0; i < arr4.length; i++) {
    if (arr4[i][0] == '1' || arr4[i][0] == '2' || arr4[i][0] == '5') {
        document.write(arr4[i] + ' ');
    }
}


document.write('\n\n --- 5 задание ---');

let arr5 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (i = 0; i < arr5.length; i++) {
    if (arr5[i] == 'Суббота' || arr5[i] == 'Воскресенье') {
        document.write('\n' + arr5[i].bold());
    } else {
        document.write('\n' + arr5[i]);
    }
}


document.write('\n\n --- 6 задание ---\n');

let arr6 = [2, 5, 7, 8, 12, 14, 22, 31];
document.write('Массив ' + arr6 + '\n');

arr6[arr6.length] = 45;
document.write('Массив ' + arr6 + '\n');

document.write('Последний элемент массива ' + arr6[arr6.length - 1]);


// --- 7 задание --- 

let arr7 = [];

for(i = 0; ; i++) {
    arr7[i] = prompt('7 задание. Введите числа:'); 
    if (isNaN(arr7[i])) {
        alert('Ошибка. Введите число.');
        break;
    } else if (arr7[i] == '') { 
        arr7.splice(arr7.length - 1, 1);
        alert('Массив ' + arr7);
        alert('Сортировка чисел массива ' + arr7.sort((a, b) => a - b));
        break;
    }
}


document.write('\n\n --- 8 задание ---\n');

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];

document.write('Массив ' + arr8 + '\n');

i = arr8.length - 1;

document.write('Цикл while ');

while (i < arr8.length && i >= 0) {
    document.write(arr8[i] + ' ');
    i--;
}

document.write('\n Метод reverse ' + arr8.reverse());


document.write('\n\n --- 9 задание ---\n');

let arr9 = [5, 9, 21, , , 9, 78, , , , 6],
    empty = 0;

for (i = 0; i < arr9.length; i++) {
    if (arr9[i] == null) {
        empty += 1;
    }
}

document.write('Массив ' + arr9 + '\n');

document.write('Количество пустых элементов ' + empty);


document.write('\n\n --- 10 задание ---\n');

let m = prompt('10 задание. Введите значения массива (через пробел):'),
    arr10 = m.split(' '),
    sum = 0;

document.write('Массив ' + arr10 + '\n');

let marr10 = arr10.slice(arr10.indexOf('0') + 1, arr10.lastIndexOf('0')); 

for (i = 0; i < marr10.length; i++) {
    if (arr10.indexOf('0') == -1 || arr10.lastIndexOf('0') == -1) {
        break;
    } else {
        sum += Number(marr10[i]);
    }
}

document.write('Массив между двумя нулями ' + marr10 + '\n');

document.write('Сумма элементов массива между двумя нулями ' + sum);
