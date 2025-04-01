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

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.get(logoutUrl, null, options)
            .finally(userLogoutHandler);

    }, [accessToken, userLogoutHandler]);

    return { isLoggedOut: !accessToken };
};