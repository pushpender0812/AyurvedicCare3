// import {data} from "http://127.0.0.1:8082/registration.js"
const data = localStorage.getItem(disease)
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Follow the given "+data)
    newDiv.appendChild(newContent);
    const currentNode = document.getElementById("div1")
    document.body.insertBefore(newDiv,currentNode);

