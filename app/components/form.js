'use client';
import { Form, Formik, Field } from 'formik';
import { useState } from 'react';

export default function Formit() {
    const [message, setmessage] = useState();
    const [userInfo] = useState({ name: "", company: "", email: "", message: "" });
    const handelsubmit = async (values, e) => {
        try {
            console.log(values)
            // e.resetForm();
        } catch (error) {
            if (error.response.data.message) {
                const swalmesa = error.response.data.message
                mesaerror(swalmesa)
            }
        }
    }


    return (
        <Formik
            initialValues={userInfo}
            enableReinitialize={true}
            onSubmit={handelsubmit}
        >
            <div className='contact__content'>
                <Form className='form' id="form">
                    <div className="form-floating mt-3">
                        <Field className='form-control' id="name" name="name" placeholder="Name" autoComplete="off" />
                        <label htmlFor="name" className='form-label'>Name</label>
                    </div>
                    <div className="form-floating mt-3">
                        <Field className='form-control' id="company" name="company" placeholder="Company" autoComplete="off" />
                        <label htmlFor="company" className='form-label'>Office</label>
                    </div>
                    <div className="form-floating mt-3">
                        <Field className='form-control' id="email" name="email" placeholder="Email" autoComplete="off" />
                        <label htmlFor="email" className='form-label'>Email</label>
                    </div>
                    <div className="form-floating mt-3">
                        {/* <textarea className='form-control' id="message" name="message" placeholder="Message" autoComplete="off" onChange={((e) => setmessage(e.target.value))}></textarea> */}
                        <label htmlFor="message" className='form-label'>Message</label>
                        <Field rows="100" cols="" className='form-control' id="message" name="message" placeholder="Message" autoComplete="off" />
                    </div>
                    <div id="alertLogin" className="text-center"></div>
                    <div className="form-group btn-container contact__btn">
                        <button type="submit" className="btn btn-primary btn-block"><i className="fas fa-sign-in-alt"></i>Submit</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}

