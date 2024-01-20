import { Outlet, Link } from "react-router-dom";

const LayoutPage = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">דף הבית</Link>
                    </li>
                    <li>
                        <Link to="/login">התחבר</Link>
                    </li>
                    <li>
                        <Link to="/register">הרשמה</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default LayoutPage;