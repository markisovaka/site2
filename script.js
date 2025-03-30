let tg = window.Telegram.WebApp
let btn = document.querySelector("#click")


btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Москва-Нижний Новгород!")
        item = "Москва-Нижний Новгород"
        tg.MainButton.show()
    }
}


tg.expand()
