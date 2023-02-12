export default function TableHeader({headers}) {
    return (
        <thead className="TableHeader">
            <tr>
                {headers.map(item => (<th>{item}</th>))}
            </tr>
        </thead>
    );
}