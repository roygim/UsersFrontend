import { Outlet, Link } from "react-router-dom";

const LayoutPage = () => {
    return (
        <>
            <nav>
                <ul style={{ display: "flex", paddingRight: "12px" }}>
                    <li style={{ marginLeft: "12px" }}>
                        <Link to="/">דף הבית</Link>
                    </li>
                    <li style={{ marginLeft: "12px" }}>
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