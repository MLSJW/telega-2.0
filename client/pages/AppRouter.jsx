
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes, regRoute } from "./Routes";
import { CHAT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../src/utils.js/consts";
// function AppRouter()  {
//     return(
//         <div>
//             egegege
//         </div>
//     )
//};
function AppRouter()  {
    const user = false;
    return user ?
        (
        <Routes>
            {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
        </Routes>
    )
    :
    (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />}/>
            {regRoute.map(({ path, Component}) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" />
        </Routes>

    )
};

export default AppRouter;