let tg = window.Telegram.WebApp
let btn = document.querySelector("#click")


btn.onClick = () =>{
    if (tg.MainButton.isVisible){
        tg.MainButton.hide()
    }else{
        tg.MainButton.setText("qwertyuio")
        tg.MainButton.show()
    }
}

tg.expand()