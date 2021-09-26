let btnSart = document.querySelector(".btnSart")


btnSart.onclick = function () {

    let str = ' ';
    while (true) {
        let array = []

        let list = prompt("Введите текст для пункта списка");
        array.push(list)
        console.log(array)

        if (list == '') {
            break;
        }

        for (let i = 0; i < array.length; i++) {
            str += '<li>' + array[i]

        }

    }
    btnSart.innerHTML = str

}
