
let taskbar = document.getElementsByClassName("icon")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

let rightpic = document.getElementsByClassName("right")[0]
let datemenu = document.getElementsByClassName("date")[0]

rightpic.addEventListener("click", ()=>{
    console.log("clicked");
    if(datemenu.style.right == "10px"){
        datemenu.style.right = "-350px"
    }
    else{
        datemenu.style.right = "10px"
    }
})
