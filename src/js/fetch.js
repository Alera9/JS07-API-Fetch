import axios from "axios";
import { generateTable } from "./generateTable";
import { showSpinner } from "./loadSpin";
let url = "https://reqres.in/api/users?delay=3";
const setDataInStorage = (data) => localStorage.setItem("data", JSON.stringify( data ) );
const getData = () =>{
    axios
    .get(url)
    .then( response => {
        const data = (response.data.data);
        setDataInStorage(data);
        generateTable();
        console.log( `setDataInStorage ${new Date()}`);
    })
    .catch((error) => console.log(error))
}
export const activateData = () =>{
    showSpinner();
     setTimeout(getData,5000 )

}


