import requests from "../utils/requests";

function Nav() {
    return (
        <nav>
            <div className="flex px-10 flex-row space-x-10 sm:space-x-20 overflow-scroll sm:px-20 text-2xl whitespace-nowrap scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 key={key} className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 " >{title}</h2>
                ))} 
                
                
                
                </div>
                
        </nav>
    );
}

export default Nav;
