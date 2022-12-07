import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
    
    return (
        <div id="error-page">
            <h1>Ops</h1>
            <p>Sorry, an unexpected error just ocurred.</p>
            <p>
                <i>{ error.statusText || error.message }</i>
            </p>
        </div>
    )
}

export default ErrorPage