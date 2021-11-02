import Image from "next/dist/client/image";

function Thumbnail({ result } ) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div>
            <Image layout="responsive" src={`${BASE_URL}${result.backdrop_path}`} height={1080} width={1920} />
        </div>
    );
}

export default Thumbnail;
