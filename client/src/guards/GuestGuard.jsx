import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/UserContext";

export default function GuestGuard() {
    const { accessToken } = useContext(UserContext)

    if (!!accessToken) {
        return <Navigate to='/' />
    }

   return <Outlet />
}