
const Tables = (props) => {
    return (

        <div>
            <h1>Times Table - {props.tablename}</h1>
            <table id="timestable" align="center">
                {
                    props.table.map((tablecontent) => (
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