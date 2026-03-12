import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <h3>{error.status} : {error.statusText} : {error.message}</h3>``
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default Error;