// let flag = false

function changedColor() {
    let element = document.getElementById('el1');
    // if (flag) {
    //     // добавляем класс fire к элементу
    //     element.classList.add("fire");
    //     flag = false;
    // }
    // else {
    //     // удаляем класс fire у элемента
    //     element.classList.remove("fire");
    //     flag = true;
    // }
    // // Вывод в консоль
    // console.log(element);
    // добавление класса, если его нет, и наоборот, удаление, если есть
    element.classList.toggle("fire"); //classList.contains("fire")
    // меняем текст
    if (element.textContent == "Всем привет!")  element.textContent = "Пока!";
    else element.textContent = "Всем привет!";
    // тоже самое в одну строку
    // element.textContent = element.textContent == "Всем привет!" ? "Пока" : "Всем привет!"
}


// получаем элемент по id
let btn = document.getElementById("btn");
console.log(btn);
// Слушаем событие "нажатие" -> работает функция chsngedColor
btn.addEventListener("click", changedColor)