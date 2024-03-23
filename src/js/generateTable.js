import { hideSpinner } from "./loadSpin";
import { testLocalStorage } from "./testLocalStorage";

 export function createTable() {
  return `
  <div class="container pt-0">
    <table class="table table-dark table-striped ">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Avatar</th>
    </tr>
  </thead>
  <tbody id="tbody">
  </tbody>
</table></div>`
;
}

function createBodyTable() {
  let data = JSON.parse(localStorage.getItem("data"));
    let tableBody ="";
  data.map(({ id, first_name, last_name, email, avatar }) => {
    console.log(id, first_name, last_name, email, avatar);
    tableBody += `<tr>
                <th scope="row">${id}</th>
                <td>${first_name}</td>
                <td>${last_name}</td>
                <td>${ email}</td>
                <td><img src=${avatar} class="rounded-circle" alt="${first_name}'s photo"></td>
            </tr>`;
  });
  return tableBody;
}
export function  generateTable (){
  console.log( `generateTable ${new Date()}`);
  if(testLocalStorage() ){
    hideSpinner();
    console.log(new Date());
     document.querySelector("#app").innerHTML += createTable();
    document.querySelector("#tbody").innerHTML += createBodyTable();
  }
}

