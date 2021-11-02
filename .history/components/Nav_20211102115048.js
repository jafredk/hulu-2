import requests from "../utils/requests";

function Nav() {
    return (
        <nav>
            <div className="flex flex-row space-x-5">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 key={key} className="cursor-pointer transition duration-100 transform hover:scale-125 " >{title}</h2>
                ))} 
                
                
                
                </div>
                
        </nav>
    );
}

export default Nav;
