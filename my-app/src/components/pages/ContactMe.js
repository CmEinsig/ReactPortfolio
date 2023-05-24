import React from 'react';

export default function Contact() {
    return (
        <div>
            <h2>Contact Me</h2>
            <p>
                <h1>Get in touch!</h1>
                <form className="form">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                            name="message"
                            className="form-control message"
                        >{Insert your message}</textarea>
                    </div>
                    <div className="submitButton">
                        <button type="button" className="btn btn-outline-dark">Submit</button>
                    </div>
                </form>

            </p>
        </div>
    );
}