

function clickToggle() {
    var header = document.getElementById('header');
    console.log(header);
    var check_header = header.classList.contains("open");

    if ( check_header == true ) {
        header.classList.remove("open");
    } else {
        header.classList.add("open");
    }
}

function clickMask() {
    header.classList.remove("open");
}

function clickA() {
    header.classList.remove("open");
}


function openMenu(){
    var toggle = document.getElementsByClassName("toggle_btn");
    var hide1 = document.getElementsByClassName("menu-content-hide");
    var hide2 = document.getElementsByClassName("menu-content");
    toggle[0].classList.add("active","top");
    console.log("toggle[0]")
    hide1[0].classList.toggle("active");
    hide2[0].classList.toggle("active");

    var open = document.getElementsByClassName("hide");
    console.log("open")
    open[0].classList.add("open");
    open[0].classList.remove("hide");
    console.log("open[0]")
    open[0].classList.add("open");
    open[0].classList.remove("hide");
}
    

function clickMenu() {
    var hide = document.getElementsByClassName("open");
    hide[0].classList.add("hide");
    hide[0].classList.remove("open");
    hide[0].classList.add("hide");
    hide[0].classList.remove("open");

}