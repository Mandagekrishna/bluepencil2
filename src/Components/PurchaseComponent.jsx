import React from "react";
import { Formik } from "formik";
import { blue } from "@mui/material/colors";
import { Button } from '@mui/material';
import '../CSS/Form.css'

function PurchaseComponent()
{
    return(
        <div style={{margin:"auto", backgroundColor:"aqua", width:"800px"}}>
        <Formik
                initialValues={{Firstname:'Firstname',
                                Lastname:'Lastname',
                                email:'abcd@gmail.com',
                                }}
                                onSubmit={(values, actions) => {
                                    setTimeout(() => {
                                      alert(JSON.stringify(values, null, 2));
                                      actions.setSubmitting(false);
                                    });}}

        >{
            props => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                    <label className="LabelField" backgroundColor="red"  htmlFor="Firstname">First Name</label>
                    </div>
                    <div >
                    <input className="InputField" type="text" onChange={props.handleChange} value={props.values.Firstname} name="Firstname"/>
                    </div>

                    <div>
                    <label className="LabelField" backgroundColor="red" htmlFor="Lastname">Last Name</label>
                    </div>
                    <div >
                    <input  className="InputField" type="text" onChange={props.handleChange} value={props.values.Lastname} name="Lastname"/>
                    </div>
                    
                    <div>
                    <label className="LabelField" htmlFor="Email">Email</label>
                    </div>
                    <div >
                    <input  className="InputField" type="text" onChange={props.handleChange} value={props.values.email} name="email"/>
                    </div>
                    <Button  type="submit" variant="contained" style={{margin:'auto',position:'center', display:'block',marginTop:'40px'}}  onSubmit={props.onSubmit}>submit</Button>
                    {console.log(props)}
                </form>
               
                
            )
          
           
            
        }


        </Formik>
             </div>

    );
}

export default PurchaseComponent;