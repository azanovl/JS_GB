function numberToObject(number) {
    const obj = {}

    if (isNaN(number) || number < 0) {
        return 'Введите целое положительное число от 0 до 999'
    }
    else if (number >= 1000) {
        return obj;
    }
    else {
        if (100 >= number < 1000) {
            obj['единицы'] = number % 10;
            obj['десятки'] = parseInt(number /10) % 10;
            obj['сотни'] = parseInt(number / 100);
            return obj;
        }
    }
}

console.log(numberToObject(245));
