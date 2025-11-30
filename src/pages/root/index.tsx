import { useContext, useEffect } from "react";

import { AuthenticatorContext } from "../../contexts/Authenticator";
import { trackPageView } from "../../config/analytics";

import Private from "../private";
import Public from "../public";


const Root = () => {
    const { isAuthenticated, loading} = useContext(AuthenticatorContext);

    useEffect(() => {
        // Trackear cambio de vista basado en autenticación
        if (!loading) {
            const page = isAuthenticated ? "/private" : "/public";
            trackPageView(page);
        }
    }, [isAuthenticated, loading]);

    if (loading) {
    return <div>Loading...</div>;
    }

    return (
        <>
            {isAuthenticated ? <Private /> : <Public />}
        </>
    )
}

export default Root;