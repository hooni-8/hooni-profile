import React, {useEffect, useState} from 'react';

import '@styles/pages/section/Section_5.scss'

export default function Section_5() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(''), 3000);
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus(''), 3000);
        }, 2000);
    };

    return (
        <section id="contact" className={`contact-section ${isVisible ? 'visible' : ''}`}>
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">프로젝트 문의나 협업 제안을 기다리고 있습니다</p>
                </div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info-section">
                        <h3 className="subsection-title">연락처 정보</h3>
                        <div className="contact-info-grid">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className={`contact-card ${isVisible ? 'animate' : ''}`}
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    <div className="contact-icon">{info.icon}</div>
                                    <div className="contact-details">
                                        <h4 className="contact-title">{info.title}</h4>
                                        <p className="contact-value">{info.value}</p>
                                        <span className="contact-description">{info.description}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    {/*<div className="contact-form-section">*/}
                    {/*    <h3 className="subsection-title">메시지 보내기</h3>*/}
                    {/*    <div className={`contact-form ${isVisible ? 'animate' : ''}`}>*/}
                    {/*        <div className="form-row">*/}
                    {/*            <div className="form-group">*/}
                    {/*                <label htmlFor="name">이름 *</label>*/}
                    {/*                <input*/}
                    {/*                    type="text"*/}
                    {/*                    id="name"*/}
                    {/*                    name="name"*/}
                    {/*                    value={formData.name}*/}
                    {/*                    onChange={handleInputChange}*/}
                    {/*                    placeholder="성함을 입력해주세요"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div className="form-group">*/}
                    {/*                <label htmlFor="email">이메일 *</label>*/}
                    {/*                <input*/}
                    {/*                    type="email"*/}
                    {/*                    id="email"*/}
                    {/*                    name="email"*/}
                    {/*                    value={formData.email}*/}
                    {/*                    onChange={handleInputChange}*/}
                    {/*                    placeholder="연락받을 이메일을 입력해주세요"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="form-group">*/}
                    {/*            <label htmlFor="subject">제목 *</label>*/}
                    {/*            <input*/}
                    {/*                type="text"*/}
                    {/*                id="subject"*/}
                    {/*                name="subject"*/}
                    {/*                value={formData.subject}*/}
                    {/*                onChange={handleInputChange}*/}
                    {/*                placeholder="문의 제목을 입력해주세요"*/}
                    {/*            />*/}
                    {/*        </div>*/}

                    {/*        <div className="form-group">*/}
                    {/*            <label htmlFor="message">메시지 *</label>*/}
                    {/*            <textarea*/}
                    {/*                id="message"*/}
                    {/*                name="message"*/}
                    {/*                value={formData.message}*/}
                    {/*                onChange={handleInputChange}*/}
                    {/*                rows="6"*/}
                    {/*                placeholder="프로젝트 상세 내용이나 문의사항을 자세히 적어주세요"*/}
                    {/*            ></textarea>*/}
                    {/*        </div>*/}

                    {/*        <button*/}
                    {/*            onClick={handleSubmit}*/}
                    {/*            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}*/}
                    {/*            disabled={isSubmitting}*/}
                    {/*        >*/}
                    {/*            {isSubmitting ? (*/}
                    {/*                <>*/}
                    {/*                    <span className="loading-spinner"></span>*/}
                    {/*                    전송 중...*/}
                    {/*                </>*/}
                    {/*            ) : (*/}
                    {/*                <>*/}
                    {/*                    <span>📤</span>*/}
                    {/*                    메시지 보내기*/}
                    {/*                </>*/}
                    {/*            )}*/}
                    {/*        </button>*/}

                    {/*        {submitStatus === 'success' && (*/}
                    {/*            <div className="submit-success">*/}
                    {/*                <span>✅</span>*/}
                    {/*                메시지가 성공적으로 전송되었습니다!*/}
                    {/*            </div>*/}
                    {/*        )}*/}

                    {/*        {submitStatus === 'error' && (*/}
                    {/*            <div className="submit-error">*/}
                    {/*                <span>❌</span>*/}
                    {/*                모든 필수 항목을 입력해주세요.*/}
                    {/*            </div>*/}
                    {/*        )}*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>

                {/* Footer */}
                <div className="contact-footer">
                    <div className="footer-content">
                        <div className="footer-info">
                            <h4>이상훈</h4>
                            <p>노력하는 개발자</p>
                            <p>© 2025 All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
