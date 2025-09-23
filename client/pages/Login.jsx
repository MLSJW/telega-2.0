import React from "react";
import "../styles/Login.css"
import { useState } from "react";

function Login() {
    const [name, setname] = useState("Name");
    const [password, setpassword] = useState("");
    return (
        <div className="Login">
            <div className="Auth">
                <h1>Авторизация</h1>
                <form action="inName" className="inName">
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="name">
                        </input>
                    </label>
                </form>
                 <form action="inPass" className="inPass">
                    <label>
                        Pass:  
                        <input type="password" name="password" placeholder="password">
                        </input>
                    </label>
                </form>
                <form>
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