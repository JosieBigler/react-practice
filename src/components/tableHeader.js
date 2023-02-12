export default function TableHeader({headers}) {
    return (
        <thead className="TableHeader">
            <tr>
                {headers.map((item, index) => (<th key={index}>{item}</th>))}
            </tr>
        </thead>
    );
}