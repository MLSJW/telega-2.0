import React from "react";
import { useState } from "react";
import ShowPass from "../src/components/Auth/ShowPass";
function Registration() {
   
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
                <h1>Регистрация</h1>
                <form action="inName" className="inName">
                    <label>
                        Name:
                        <input type="text" value={inputName} onChange={handleChangeName}/>
                    </label>
                </form>
                 <form action="inPass" className="inPass">
                    <label>
                        NewPass:<ShowPass  onChange={handleChangePass}/>
                    </label>
                </form>
                <form class="butGO">
                    <button name="GO">Go</button>
                </form>
            </div>
        </div>
    );
    
}

export default Registration;