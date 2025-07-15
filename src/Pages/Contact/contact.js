import React, { useState } from "react";
import './style.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: "📧",
            title: "Email",
            value: "agreement.hlungwane@example.com",
            link: "mailto:agreement.hlungwane@example.com"
        },
        {
            icon: "📱",
            title: "Phone",
            value: "+27 (0) 123 456 789",
            link: "tel:+27123456789"
        },
        {
            icon: "📍",
            title: "Location",
            value: "Johannesburg, South Africa",
            link: "#"
        },
        {
            icon: "💼",
            title: "LinkedIn",
            value: "linkedin.com/in/agreement-hlungwane",
            link: "https://linkedin.com/in/agreement-hlungwane"
        }
    ];

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1 className="contact-title">Get In Touch</h1>
                <p className="contact-subtitle">
                    Let's discuss your next project or collaboration opportunity
                </p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Let's Connect</h2>
                    <p>
                        I'm always interested in hearing about new opportunities and exciting projects. 
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-methods">
                        {contactInfo.map((item, index) => (
                            <a 
                                key={index} 
                                href={item.link} 
                                className="contact-method"
                                target={item.link.startsWith('http') ? '_blank' : '_self'}
                                rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            >
                                <div className="contact-icon">{item.icon}</div>
                                <div className="contact-details">
                                    <h4>{item.title}</h4>
                                    <p>{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="social-links">
                        <h3>Follow Me</h3>
                        <div className="social-icons">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <span>GitHub</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <span>Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                placeholder="Tell me about your project or just say hello..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="success-message">
                                ✅ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;