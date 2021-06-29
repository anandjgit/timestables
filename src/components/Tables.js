
const Tables = (props) => {
    const {tablename, table} = props;
    return (

        <div>
            <h1>Times Table - {tablename}</h1>
            <table id="timestable" align="center">
                {
                    table.map((tablecontent) => (
                        <tr>
                            <td>{props.tablename}</td>
                            <td>x</td>
                            <td>{tablecontent.num}</td>
                            <td>=</td>
                            <td>{tablecontent.mul}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Tables;