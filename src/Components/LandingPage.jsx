
import RComponent from './RComponent.jsx'
import Lcomponent from './LComponent.jsx'

import LandingPageImg from '../Images/LandingPage.png'
import LandingBG  from '../Images/Landing_Backgroun_img.png'
import RectangleBG from '../Images/Landing_Page_FImage.png'
import ComponentR1Img from '../Images/ComponentR1.png'
import L1ComponentImg from '../Images/ComponentL1.png'
import L2ComponentImg from '../Images/ComponentL2.png'
import L3ComponentImg from '../Images/ComponentL3.png'

import { Button } from '@mui/material';
import { Link} from 'react-router-dom'


function LandingPage(props){

   
    return(
<>
<div>
        <table >
                <tr >
                    
                    <td style={{textAlign:'center', minWidth:'200px',padding:'10%'}}>
                    <h1>Introduce Your Product Quickly & Effectively</h1>
                        <p >
                         ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <Link to="/purchase"><Button variant='contained' style={{margin:'10px'}}>Purchase kit now</Button></Link>
                        <Button variant='outlined' style={{margin:'10px'}}>Learn More</Button>



                    </td> 
                                                                                        
                    <td  style={{backgroundImage:`url(${LandingBG})`, width:'900px'}} >
                        <img src={LandingPageImg}></img>
        
                    </td>
        
                </tr>
        </table>
</div>


        <RComponent image = {ComponentR1Img}></RComponent>
        <Lcomponent image = {L1ComponentImg}></Lcomponent>
        <Lcomponent image = {L2ComponentImg}></Lcomponent>
        <Lcomponent image = {L3ComponentImg}></Lcomponent>


      <div style={{width:'100%', backgroundImage:`url(${RectangleBG})`}}>

      <div style={{alignItems:'center', justifyContent:'center', marginLeft:'35%' }}>
            <h1  style={{textAlign:'center', width:'500px'}}>Price to Suit Everyone</h1>
            
             <p style={{textAlign:'center', width:'500px'}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. 
                        Cum sociis natoque penatibus et magnis dis
                         parturient montes, nascetur ridiculus 
            </p>

            <h1  style={{textAlign:'center', width:'500px'}}>$40</h1>

          <Link to='/Purchase'><Button variant='contained' style={{margin:'10px', left:'15%'}}>Purchase Now</Button></Link>
      </div>

      </div>
</>
    )
}

export default LandingPage;