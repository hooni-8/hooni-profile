import React, {useEffect, useState} from 'react';

import '@styles/pages/section/Section_5.scss'

export default function ContactSection() {
    const [isVisible, setIsVisible] = useState(false);

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'dltkdgns0726@naver.com',
            description: '언제든지 이메일로 연락주세요',
            link: 'mailto:dltkdgns0726@naver.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '010-9483-0268',
            description: '언제든지 통화 가능합니다.',
            link: 'tel:+821094830268'
        },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="contact" className={`contact-section ${isVisible ? 'visible' : ''}`}>
            <div className="contact-container">
                <div className="section-header">
                    <span className="section-eyebrow">CONTACT</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">새로운 프로젝트와 좋은 협업에 언제나 열려 있습니다.</p>
                </div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info-section">
                        <div className="contact-intro">
                            <span>LET'S WORK TOGETHER</span>
                            <h3 className="subsection-title">
                                <span>함께 해결할 문제가 있다면</span>
                                <span>편하게 연락해 주세요.</span>
                            </h3>
                        </div>
                        <div className="contact-info-grid">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className={`contact-card ${isVisible ? 'animate' : ''}`}
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    <span className="contact-index">0{index + 1}</span>
                                    <div className="contact-details">
                                        <h4 className="contact-title">{info.title}</h4>
                                        <p className="contact-value">{info.value}</p>
                                        <span className="contact-description">{info.description}</span>
                                    </div>
                                    <span className="contact-arrow" aria-hidden="true">↗</span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="contact-footer">
                    <div className="footer-content">
                        <div className="footer-info">
                            <h4>이상훈</h4>
                            <p>노력하는 개발자</p>
                            <p>© {new Date().getFullYear()} All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
