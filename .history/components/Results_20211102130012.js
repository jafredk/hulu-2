import Thumbnail from "./Thumbnail";

function Results({ resaults }) {
    return (
        <div>
            {requests.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    );
}

export default Results;
