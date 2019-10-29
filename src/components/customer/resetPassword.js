import React from 'react'
import {setPassword} from '../../store/actions/customerActions'
import Sidebar from './sidebar'
// import {CARD} from 'react-bootstrap'
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import MessageCard from './MessageCard'


const RecoverSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email.')
      .required('The email is required.'),
  });

const ResetPassword =({error,loading,sendEmail,cleanUp})=>{
  
        return(
            <div className='container'>
                <br/><br/><br/>
                      
                  <hr/>  
                  <h1 >
                        Recover your password
                     </h1>  
                     <hr/>  
                <Formik
                    initialValues={{
                        email: ''
                    }}
                    validationSchema={RecoverSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        // await sendEmail(values)
                        console.log(values)
                        setSubmitting(false)
                    }}  
                    >
                { ({ isSubmitting, isValid }) => (
                  
                  <div className='row'>
                       
                       <div className='col'>
                            <Sidebar/>
                       </div>
                       <div className='col'>
                       <form>
                        
                       
                     <h3 > Type in your e-mail to recover your password
                          </h3>
                        <input type='email' name='email' placeholder="Type your email..."  required></input>
                        <button className='btn'
                            disabled={!isValid || isSubmitting}
                            loading={loading ? 'Sending recover email...' : null}
                            type="submit"
                        >
                        Recover password
                        </button>
                            {/* <Field
                            type="email"
                            name="email"
                            placeholder="Type your email..."
                            component={Input}
                            /> */}
                             
                       
                        <MessageCard error show={error}>
                            {error}
                        </MessageCard>
                                                
                        <MessageCard success show={error === false}>
                            Recover email sent successfully!
                        </MessageCard>
                    </form>
                       </div>
                   </div>
                   
                )}
                </Formik> 
            </div>
        )
    
}
// const mapStateToProps = ({ auth }) => ({
//     loading: auth.recoverPassword.loading,
//     error: auth.recoverPassword.error,
//   });
  
//   const mapDispatchToProps =()=> {
//     sendEmail: actions.recoverPassword,
//     cleanUp: actions.clean,
//   };
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(ResetPassword);
export default ResetPassword;
