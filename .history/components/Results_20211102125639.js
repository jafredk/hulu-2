function Results({ requests }) {
    return (
        <div>
            {requests.map(result => (
                <Thumbnai />
            ))}
        </div>
    );
}

export default Results;
