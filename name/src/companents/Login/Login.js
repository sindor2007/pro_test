import "./Login.css";
import { useState } from "react";
function Login (){
let [phone, setPhone] = useState("")
let [ism, setIsm] = useState("")
console.log(phone);
console.log(ism);
function sendData(e){
    e.preventDefault();
    alert(`Ism ${ism} Telefon ${phone}`);
    setPhone ("");
    setIsm("");     
}
return(
    <>
    <div className="Login">
        <form>
            <h3>Ruyxatdan o'tish</h3>
            <label htmlFor="">Phone</label>
            <br/>
            <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
        <br/>
        <label htmlFor="">Ism</label>
        <br/>
        <input type="text"  value={ism} onChange={(e)=> setIsm (e.target.value)}/>
        <button onClick={sendData}>Send</button>
        </form>
    </div>
    </>
 )
}
export default Login