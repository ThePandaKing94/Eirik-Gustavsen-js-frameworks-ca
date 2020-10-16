import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import Form from "react-bootstrap/Form";

function Contact() {
    
    const schema = yup.object().shape({
        firstName: yup.string().min(2, "First name must be more than 2 character").required(),
        lastName: yup.string().min(2, "First name must be more than 2 character").required(),
        email: yup.string().email("Please enter a valid email").required("Email is required"),
        sendMessage:yup.string().min(10, "Message must be more than 10 character").required()
    });
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = data => {
        console.log("data", data);        
    };    

    return (
        <form id="Contact" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>Name </div>
                    <input type="text" name="firstName" placeholder="Enter your first name" ref={register}/>
                    {errors.firstName && <p>{errors.firstName.message}Please write First name</p>}
                    <input type="text" name="lastName" placeholder="Enter your last name" ref={register}/>
                    {errors.lastName && <p>{errors.lastName.message}Please write Last name</p>}            
            </div>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <p>{errors.email.message}</p>}
            </Form.Group>

            <div>
                <div>Message</div>
                <input type="text" name="sendMessage" placeholder="Enter message. At least 10 characters" ref={register}/>
                {errors.sendMessage && <p>{errors.sendMessage.message}Please write name</p>}
           </div>

        <button type="submit">Submit</button>
        </form>
    );
}

export default Contact;