let root;
let oldColor;
let picker;

window.onload=()=>{
 root = document.querySelector(':root')
oldColor = getComputedStyle(root).getPropertyValue('--b1') 
picker=document.getElementById("picker");                                    
console.log(oldColor)
picker.value=oldColor;
}
function valt(){
root.style.setProperty("--b1", picker.value)
console.log(picker.value)     
}