
import { Link } from 'react-router-dom';
import About_image from '../Images/About_image.png'
import { Button } from '@mui/material';

function About(){

 
        return(
            <div>


                    <img src={About_image} style={{float:'left'}}></img>

                    <section style={{float:'right', width:'60%', marginTop:'200PX'}}>

                            <h1 style={{textAlign:'center'}}>Light, Fast & Powerful </h1>

                            <p style={{textAlign:'center',width:'800PX', margin:'auto'}}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                Aenean commodo ligula eget dolor. Aenean massa. 
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </p>
                            
                            
                        
                            <Link to={'/contact'}><Button variant="contained"style={{margin:'auto',position:'center', display:'block',marginTop:'40px'}} >Contact</Button></Link>
                    </section>
                        
                
            </div>
        )
}

export default About;