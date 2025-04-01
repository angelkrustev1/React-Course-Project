import { Navigate } from "react-router";
import Spiner from "../spiner/Spiner";
import useLogout from "./api/useLogout";

export default function Logout() {
    const { isLoggedOut } = useLogout()

    return isLoggedOut
        ? <Navigate to="/" />
        : <Spiner />;
}