import { useRouter } from "next/dist/client/router";
import requests from "../utils/requests";

function Nav() {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-7 flex-row space-x-5 sm:space-x-10 overflow-scroll sm:px-10 text-xl whitespace-nowrap scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 
                    key={key}
                    onClick={() => }

                     className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 " >{title}</h2>
                ))} 
                
                
                
                </div>
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
                
        </nav>
    );
}

export default Nav;
