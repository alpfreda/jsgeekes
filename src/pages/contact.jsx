import React, { useEffect } from 'react';
import { useDispatch, } from "react-redux";
import { setActiveMenu } from "../redux/actions/navbar-action";

const Contact = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActiveMenu('contact'))
    }, [])

    return <section className="contact-page">
        <div className="container">
            <div className="contact-page-inner">
                <h1 className="page-title ">
                    Contact Me
                    </h1>
                <p className="hear-info">I am so glad to hear from you  🙂</p>
                <form netlify>
                    <div className='form-input'>
                        <input type='text' name='name' className='input' required />
                        <span className="inputBar"></span>
                        <label>Name</label>
                    </div>
                    <div className='form-input'>
                        <textarea className='input' name='note' cols="30" rows="10" required></textarea>
                        <span className="inputBar"></span>
                        <label>Note</label>
                    </div>
                    <div className='text-right'>
                        <button type="submit" className='btn-submit'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
}

export default Contact