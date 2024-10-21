import User from "./data.js";


const userZ = new User ();

function a() {
    
    return console.log(userZ);
    ;


}

const hoverElement = document.getElementById('hover');
hoverElement.addEventListener('click', a);
