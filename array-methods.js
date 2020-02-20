// 1. some()
// Метод перебирает массив при помощи определенной функции, и если хоть один раз возвращался true,
// то some возвращает true
var someTest = () => {
    const myAwesomeArray = ["a", "b", "c", "d", "e"]
    var result = myAwesomeArray.some(test => test === "d")

    console.log(result);
}

// 2. reduce()
// Данная функция принимает следующие аргументы : Накопитель и элемент массива. После каждой операции переменная накопитель 
// приравнивается к полученному результату предыдущей иттерации. Получается прогрессия.
var reduceTest = () => {
    const myAwesomeArray = [1, 2, 3, 4, 5]
    var result = myAwesomeArray.reduce((total, value) => total + value)
    console.log(result);
}
// 3. every()

// Данная функция работает как some. Перебирает массив с помощью определенной функции. 
// Но возвращает true только при совпадении всех элементов массива.
var everyTest = () => {
    const myAwesomeArray2 = ["a", "a", "a", "a", "a"]
    var result = myAwesomeArray2.every(test => test === "a")
    console.log(result);
}

// 4. map()
// Возвращает массив элементов, которые преобразованы входящей функцией
var mapTest = () => {
    const myAwesomeArray = [5, 4, 3, 2, 1]
    var result = myAwesomeArray.map(x => x * 10)
    console.log(result);
}

// 5. flat()
// Метод создает новый массив и объединяет в нем все подмассивы родителя. Это работает только с одним уровнем вложенности.
// Данный метод поддерживается пока не всеми браузерами. Chrome v69, Firefox Nightly и Opera 56

var flatTest = () => {
    const myAwesomeArray = [[1, 2], [3, 4], 5]
    var result = myAwesomeArray.flat()
    console.log(result)
}

// 6. filter()
// Метод принимает функцию поиска (фильтра) как параметр и выдает массив с элементами, которые совпадают с данным фильтром.
var filterTest = () => {
    const myAwesomeArray = [
        { id: 1, name: "john" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Mass11" },
        { id: 4, name: "Mass" },
      ]
      
      var result = myAwesomeArray.filter(element => element.name === "Mass")
      console.log(JSON.stringify(result));
}

// 7. forEach()
// Перечисляет элементы в массиве
var foreachTest = () => {
    const myAwesomeArray = [
        { id: 1, name: "john" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Mass" },
    ]
      
     myAwesomeArray.forEach(element => console.log(element.name, element.id))
}


// 8. findIndex()
// Ищет индекс нахождения объекта в массиве согласно входящей фильтрующей функции.
// Если элемент не найден - возвращает -1
// Ищет только первый элемент

var findindexTest = () => {
    const myAwesomeArray = [
        { id: 1, name: "Ali" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Mass" },
    ]

    var result = myAwesomeArray.findIndex(element => element.name === "Ali")
    console.log(result);
}

// 9. find()
// Похоже на FindIndex, только возвращает объект целиком
// Если объект не найден - возвращает undefined

var findTest = () => {
    const myAwesomeArray = [
        { id: 1, name: "john" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Mass" },
    ]
      
    var result = myAwesomeArray.find(element => element.id === 2)
    console.log(result)
}

// 10. sort()
// Сортирует массив и возвращает его

var sortTest = () => {
    const myAwesomeArray = [5, 40, 31, 292, 1]
    // Сортировка от меньшего к большему
    var result = myAwesomeArray.sort((a, b) => a - b)
    console.log(result);

    // Сортировка от большего к меньшему
    result = myAwesomeArray.sort((a, b) => b - a)
    console.log(result);
}

// 11. concat()
// Объединяет массивы в один. Может быть 2, 3 и т.д. Количество массивов значения не имеет

var concatTest = () => {
    const myAwesomeArray = [1, 2, 3, 4, 5]
    const myAwesomeArray2 = ['10', 20, 30, 40, 'aaa']
    var result = myAwesomeArray.concat(myAwesomeArray2)

    console.log(result);
}


// 12. fill()
// Заполняет массив одинаковыми элементами.
// Параметры: 1 - значение, 2 - индекс старта, 3 - индекс окончания
var fillTest = () => {
    const myAwesomeArray = [1, 2, 3, 4, 5]
    var result = myAwesomeArray.fill(99, 1, 67)
    console.log(result);
}

// 13. includes()
// Функция возвращает true если найден определенный элемент и false, если не найден
var includesTest = () => {
    const myAwesomeArray = [1, 2, 35, 4, 5]
    var result = myAwesomeArray.includes(3)
    console.log(result)
}

// 14. reverse(
// Переворачивает массив. Перечисление от последнего элемента к первому.
var reverseTest = () => {
    const myAwesomeArray = ["e", "d", "c", "b", "a"]
    var result = myAwesomeArray.reverse()
    console.log(result)
}

