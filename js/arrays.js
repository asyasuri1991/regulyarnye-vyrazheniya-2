function task1()
{
    function isURL(str)
    {
    let url = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
    let adress=url.test(str);
    return adress;
    }
    let str=prompt("Введите URL адрес");
    if (isURL(str))
        alert("Правильно");
    else
        alert("Некорректный ввод");
}
