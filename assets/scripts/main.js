const $menu=document.getElementById("menu");
const $menuUl=document.querySelector("#menu nav");
const $menuImg=document.querySelector("#menu img");

let num=0;
function pushed(){
    console.log($menuImg);
    if(num===0){
        $menuUl.style.display="block";
        $menuImg.setAttribute("src","./assets/images/closs.svg");
        $menuImg.style.background= "rgba(0, 0, 0, 0)";
        num++;
    }else{
        $menuUl.style.display="none";
        $menuImg.setAttribute("src","./assets/images/menu.svg");
        $menuImg.style.background= "rgba(0, 0, 0, 0.5)";
        num--;
    }
    
}