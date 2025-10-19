import React from "react";
import "../styles/Login.css"
import { useState } from "react";
import { useEffect } from "react";
function Login() {
   
    const [inputName, setinputName] = useState("")

    const handleChangeName = (event) => {
        setinputName(event.target.value)
    } 

    const [inputPass, setinputPass] = useState("")
    const handleChangePass = (event) => {
        setinputPass(event.target.value)
    } 

    function inName(formData) {
        console.log(formData.target.name);
    }
    

    const  handleCLick = () => {
        alert('Поздравляю, вы вошли в систему!');
    } 

    return (
        <>
            <h1>Авторизация</h1>
                {/* <h1>Авторизация</h1>
                <form action={inName} className="inName">
                    <label>
                        Name: <input type="text" name="name" value={inputName} onChange={handleChangeName}/>
                    </label>
                    <label>
                        Password: <input type="password" name="password"/>
                    </label>
                    <button type="submit">Войти</button>
                </form>
                 <form action="inPass" className="inPass">
                    <label>
                        Pass:<ShowPass  onChange={handleChangePass}/>
                        { <input type="password" value={inputPass} onChange={handleChangePass} /> }
                        { <p>{ShowPass(inputPass)}</p> }
                        
                    </label>
                </form>
                <form class="butGO">
                    <button type = "button" onClick = {handleCLick} name="GO">Sign in</button>
                </form>
                <form action="http://localhost:5173/Reg" >
                    <button action="http://localhost:5173/Reg" type="submit" name="Reg">Sign up</button>
                </form> */}
            </>
    );
    
}

export default Login;