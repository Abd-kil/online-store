import { Link } from "react-router-dom";

function NoPage() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding:30
            }}
        >
            <h2>404 The page is not found</h2>
            <Link to='/'>
                <button className="red-button">Back To Home paeg</button>
            </Link>
        </div>
    )
}
export default NoPage;