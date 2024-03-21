import { NavLink } from "@remix-run/react";

const second = () => {
    return <div>second Page
        
        <a href="/">Go to first page using anchor tag</a>
        <br /><br />
        <br /><br />
        <NavLink to="/">Go to first page using NavLink</NavLink>

    </div>;
};

export default second;
