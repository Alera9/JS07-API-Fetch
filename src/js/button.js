import { activateData } from "./fetch"

const defineButton = () => {
    const divBtn =document.createElement("div");
    const btnToShowData = document.createElement("button");
    divBtn.className = "d-grid"; 
    btnToShowData.className = "btn btn-primary btn-block";
    btnToShowData.type = "button";
    btnToShowData.id = "btnToShowData";
    btnToShowData.innerText = "Mostrar tabla de usuarios"
    divBtn.appendChild(btnToShowData );
    console.log(btnToShowData);
    return divBtn;
}

// `<div class="d-grid">
// <button id="btnToShowData" type="button" class="btn btn-primary btn-block" disabled>Mostrar tabla de usuarios</button>
// </div>`;
 const addBtnToShowData = ()=>{
    let btn  = document.querySelector("#btnToShowData");
    btn.onclick = activateData;
    console.log(btn);
} 
export const createBtn = (element) =>{
    element.appendChild( defineButton());
    addBtnToShowData();
} 

