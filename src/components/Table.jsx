export default function Table({ headers, children }) {
    return (
        <table className="invoices__table">
            <thead>
                <tr>
                    {
                        headers.map((header, index) => {
                            return <th key={`${header}${index}`}>{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}