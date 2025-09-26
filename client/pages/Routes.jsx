
import { Component } from "react"
import { CHAT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../src/utils.js/consts.js"
import Chat from "./Chat"
import Login from "./Login"
import Registration from "./Registation"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE, 
        Component : Login,
        //element : <Login/>
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component : Chat
        //element : <Chat/>
    }
]

export const regRoute = [
    {
        path: REGISTRATION_ROUTE,
        Component : Registration
    }
]
 
