function task1()
{
    function isURL(str)
    {
    let url = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
    let adress=url.test(str);
    return adress;
    }
    let str=prompt("Введите URL");
    if (isURL(str))
        alert("Правильно");
    else
        alert("Некорректный ввод");
}

function task2()
{
    function isName(str)
    {
    let re = /^[a-zA-Z$_]{1}[\w$]*/;
    let flag=re.test(str);
    return flag;
    }
    let str=prompt("Введите имя переменной");
    if (isName(str))
        alert("Имя переменной введено правильно");
    else
        alert("Имя переменной введено неправильно");
}

function task3()
{
    function isStr(str)
    {
    let log= /^[a-zA-Z0-9]+$/;
    let login=log.test(str);
    return login;
    }
    let str=prompt("Введите строку, состоящую только из букв и цифр");
    if (isStr(str))
        alert("Корректно");
    else
        alert("Некорректный ввод");
}

function task4()
{
    function isStr(str)
    {
    let pass = /^[a-zA-Zа-яА-Я]{10,}$/;
    let password=pass.test(str);
    return password;
    }
    let str=prompt("Введите строку, которая  не содержит спецсимволов и цифр, и ее длина не менее 10 символов");
    if (isStr(str))
        alert("Все правильно");
    else
        alert("Некорректный ввод");
}

function task5()
{
    let str=prompt("Введите строку");
    function getDigits()
    {
        let digits = str.match(/\d/g).length
        return (digits);
    }
    function getNameLat()
    {
        let nameLat = str.match(/[a-z]/gi).length
        return(nameLat);
    }
    function getNameKir()
    {
        let namekir = str.match(/[а-я]/gi).length
        return(nameKir);
    }
    alert (`Количество цифр ${getDigits()}`);
    alert (`Количество латинских букв ${getNameLat()}`);
    alert (`Количество кириллических букв ${getNameKir()}`);
}