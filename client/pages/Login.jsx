import React from "react";
import "../styles/Login.css"
function Login() {
    return (
        <div className="Login">
            
            <div className="Auth">
                <form>
                    <label>
                        Name:
                        <input type="text" name="name">
                        </input>
                    </label>
                </form>
                <h1>Авторизация</h1>
                <p1>Логин</p1><br/>
                <form type="text" ></form><br/>
                <p2>Пароль</p2><br/>
                <input type="password"></input><br/>
            </div>
        </div>
    );
}

export default Login;