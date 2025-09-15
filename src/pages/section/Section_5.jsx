import React, {useEffect, useState} from 'react';

import '@styles/Home.scss'
import '@styles/section/Section_5.scss'

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
            value: 'kimdev@example.com',
            description: '언제든지 이메일로 연락주세요',
            link: 'mailto:kimdev@example.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+82 10-1234-5678',
            description: '업무시간 내 통화 가능합니다',
            link: 'tel:+821012345678'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Seoul, South Korea',
            description: '서울 기반으로 활동하고 있습니다',
            link: '#'
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            value: '@kimdev',
            description: '전문적인 네트워킹을 환영합니다',
            link: 'https://linkedin.com/in/kimdev'
        }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: '📱', url: '#', color: '#333333' },
        { name: 'LinkedIn', icon: '💼', url: '#', color: '#0077b5' },
        { name: 'Twitter', icon: '🐦', url: '#', color: '#1da1f2' },
        { name: 'Instagram', icon: '📷', url: '#', color: '#e4405f' },
        { name: 'Blog', icon: '📝', url: '#', color: '#ff6b35' }
    ];

    const faqs = [
        {
            question: '프로젝트 문의는 어떻게 하나요?',
            answer: '이메일이나 아래 문의 양식을 통해 프로젝트 상세 내용을 보내주시면, 24시간 내에 답변드리겠습니다.'
        },
        {
            question: '협업 가능한 지역이 있나요?',
            answer: '서울 및 수도권 지역에서 오프라인 미팅이 가능하며, 원격 협업도 얼마든지 환영합니다.'
        },
        {
            question: '프로젝트 기간은 어떻게 되나요?',
            answer: '프로젝트 규모에 따라 1주일부터 몇 개월까지 다양합니다. 상담 시 구체적인 일정을 논의해드립니다.'
        },
        {
            question: '비용은 어떻게 책정되나요?',
            answer: '프로젝트 복잡도, 기간, 요구사항에 따라 합리적인 비용을 제안드립니다. 무료 상담부터 시작해보세요.'
        }
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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <div className="contact-form-section">
                        <h3 className="subsection-title">메시지 보내기</h3>
                        <div className={`contact-form ${isVisible ? 'animate' : ''}`}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">이름 *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="성함을 입력해주세요"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">이메일 *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="연락받을 이메일을 입력해주세요"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">제목 *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="문의 제목을 입력해주세요"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">메시지 *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="6"
                                    placeholder="프로젝트 상세 내용이나 문의사항을 자세히 적어주세요"
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="loading-spinner"></span>
                                        전송 중...
                                    </>
                                ) : (
                                    <>
                                        <span>📤</span>
                                        메시지 보내기
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="submit-success">
                                    <span>✅</span>
                                    메시지가 성공적으로 전송되었습니다!
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="submit-error">
                                    <span>❌</span>
                                    모든 필수 항목을 입력해주세요.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="faq-section">
                        <h3 className="subsection-title">자주 묻는 질문</h3>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div key={index} className={`faq-item ${isVisible ? 'animate' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                                    <h4 className="faq-question">
                                        <span className="faq-icon">❓</span>
                                        {faq.question}
                                    </h4>
                                    <p className="faq-answer">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="social-section">
                        <h3 className="subsection-title">소셜 미디어</h3>
                        <p className="social-description">다양한 플랫폼에서 저와 연결해보세요</p>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`social-link ${isVisible ? 'animate' : ''}`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        '--hover-color': social.color
                                    }}
                                    title={social.name}
                                >
                                    <span className="social-icon">{social.icon}</span>
                                    <span className="social-name">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="contact-footer">
                    <div className="footer-content">
                        <div className="footer-info">
                            <h4>김개발</h4>
                            <p>창의적인 웹 개발자</p>
                            <p>© 2025 All rights reserved.</p>
                        </div>
                        <button onClick={scrollToTop} className="scroll-top-btn">
                            <span>⬆️</span>
                            맨 위로
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
