import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import request from "../../../utils/request";

const logoutUrl = 'http://localhost:3030/users/logout'
// const logoutUrl = 'http://localhost:3030/users' // the server doesn't return 304 on this on

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