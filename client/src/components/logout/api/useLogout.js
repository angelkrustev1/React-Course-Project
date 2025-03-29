import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import request from "../../../utils/request";

const logoutUrl = 'http://localhost:3030/users/logout'

export default function useLogout() {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const logout = async () => {
            const options = {
                headers: {
                    'X-Authorization': accessToken,
                },
            };

            try {
                await request.get(logoutUrl, null, options);
                userLogoutHandler();
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Logout failed:", error);
                }
            }
        };

        logout();
    }, [accessToken, userLogoutHandler]);

    return { isLoggedOut: !accessToken };
};