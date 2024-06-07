const AddBinfo = ({customer}) => {
    return (
        <>
            {
                customer.map((curUser) => {
                    const {id,vno,rcbook,bikehr} = curUser;
                   

                    return (
                        <tr key={id}>
                            <td>{vno}</td>
                            <td>{rcbook}</td>
                            <td>{bikehr}</td>
                        
                        </tr>
                    )
                })

            }
        </>
    )
}
export default AddBinfo;