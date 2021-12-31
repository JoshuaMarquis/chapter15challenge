import Row from "./Row"
const Table = ({content}) => {
    return (
/*         <div className="table-container">
            <table>
                <tbody>
                    {content.map((item) => (
                        <Row key={item.id} item={item}></Row>
                    ))}
                </tbody>
            </table>
            
        </div> */
        <div className="table-container">
            <table>
                <tbody>
                    {content.map((item) =>(
                        <tr key={item.id}>
                            {Object.entries(item).map(([key,value])=>{
                                return(
                                    <td key={key}>{JSON.stringify(value)}</td>
                                )
                            })}
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
