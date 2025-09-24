import React from "react";
import "../styles/Login.css"
import { useState } from "react";
// import {ShowPass} from "../src/components/Auth/ShowPass";
import ShowPass from "../src/components/Auth/ShowPass";
function Login() {
   
    const [inputName, setinputName] = useState("")
    const handleChangeName = (event) => {
        setinputName(event.target.value)
    } 
    const [inputPass, setinputPass] = useState("")
    const handleChangePass = (event) => {
        setinputPass(event.target.value)
    } 
    return (
        <div className="Login">
            <div className="Auth">
                <h1>Авторизация</h1>
                <form action="inName" className="inName">
                    <label>
                        Name:
                        <input type="text" value={inputName} onChange={handleChangeName}/>
                        
                    </label>
                </form>
                 <form action="inPass" className="inPass">
                    <label>
                        Pass:<ShowPass  onChange={handleChangePass}/>
                        {/* <input type="password" value={inputPass} onChange={handleChangePass} /> */}
                        {/* <p>{ShowPass(inputPass)}</p> */}
                        
                    </label>
                </form>
                <form class="butGO">
                    <button name="GO">Go</button>
                </form>
                {/* <p1>Логин</p1><br/>
                <form type="text" ></form><br/>
                <p2>Пароль</p2><br/>
                <input type="password"></input><br/> */}
            </div>
        </div>
    );
    
}

export default Login;