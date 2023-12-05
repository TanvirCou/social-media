import axios from "axios";

export const loginCall = async(userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("http://localhost:3000/api/auth/login", userCredential);
      
        localStorage.setItem("data", JSON.stringify(res.data));
        console.log((JSON.parse(localStorage.getItem("data"))).name);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
    } catch(err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err});
    }
}