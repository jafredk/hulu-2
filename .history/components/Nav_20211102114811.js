import requests from "../utils/requests";

function Nav() {
    return (
        <nav>
            <div className="flex flex-row space-x-5 space-y-3">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2>{title}</h2>
                ))} 
                
                
                
                </div>
                
        </nav>
    );
}

export default Nav;
