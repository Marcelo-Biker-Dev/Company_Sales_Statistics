const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sales Person</th>
                        <th>Visits</th>
                        <th>Deals</th>
                        <th>Gross sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Zé das Couves</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>28/04/2021</td>
                        <td>Tião Galinha</td>
                        <td>2</td>
                        <td>2</td>
                        <td>23000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;