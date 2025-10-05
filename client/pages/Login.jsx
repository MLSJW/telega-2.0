
import "../styles/Login.css"
import { useState } from "react";
// import {ShowPass} from "../src/components/Auth/ShowPass";
import ShowPass from "../src/components/Auth/ShowPass";
// import { useEffect } from "react";
// import TRUEFALSE from "../src/utils.js/TRUEFALSECONTROLLER";
// import handleChangeState from "../src/utils.js/TRUEFALSECONTROLLER";
function Login() {
    
    const [inputName, setinputName] = useState("")
    const handleChangeName = (event) => {
        setinputName(event.target.value)
    } 
    const [inputPass, setinputPass] = useState("")
    const handleChangePass = (event) => {
        setinputPass(event.target.value)
    } 
    // const [firstState, setfirstSate] = useState("false")
    
    // function controller(){
    //     if (TRUEFALSE==false){
    //         setfirstSate = true;
    //         console.log("fsdsfsdf")
    //     }
    // }
    
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
                {/* <form>
                    <button onClick={handleChangeState()}>заход</button>
                </form> */}
                <form class="butGO">
                    <button name="GO">Go</button>
                    <button  type="submit" name="Reg">Reg</button>
                </form>
                <form action="http://localhost:5173/Reg" >
                    <button  type="submit">Перейти</button>
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