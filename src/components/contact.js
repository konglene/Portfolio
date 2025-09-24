import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        emailjs.sendForm(
            'service_3h6upmn',      // Replace with your EmailJS service ID
            'template_r0hih9j',     // Replace with your EmailJS template ID
            form.current,
            'rnvL6RmKUJcw88OXZ'       // Replace with your EmailJS public key
        )
            .then(() => {
                setStatus('Message sent!');
                form.current.reset();
            }, () => {
                setStatus('Failed to send. Please try again.');
            });
    };

    return (
        <section className="contact-section" style={{ padding: '4rem 2rem', maxWidth: 500, margin: '0 auto' }}>
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="6" required />
                <button type="submit" className="hero-button">Send</button>
                {status && <p>{status}</p>}
            </form>
        </section>
    );
}

export default Contact;