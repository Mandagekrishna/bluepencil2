
function Lcomponent(props){


    return(
<>
        <table>
            <tr>
                <td>
                    <img src={props.image}></img>
                </td>

                <td style={{textAlign:'center', minWidth:'200px',padding:'10%'}}>
                    <h1>Light, Fast and Powerful</h1>
                    <p >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                </td>
                
            </tr>
        </table>
</>
    )
}

export default Lcomponent;