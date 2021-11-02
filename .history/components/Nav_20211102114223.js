import requests from "../utils/requests";

function Nav() {
    return (
        <nav>
            <div>
                {Object.entries(requests).map(([key, { title, url }]) => )} </div>
                <h2>{title}</h2>
        </nav>
    );
}

export default Nav;
