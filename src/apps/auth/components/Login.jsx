import {useContext} from "react";
//CONTEXT
import FirebaseContext from "../../../context/FirebaseContext";

const Login = () => {
    return (
       <>
        <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
        </form>
       </>
    )
}

export default Login