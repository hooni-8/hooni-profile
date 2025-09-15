import React from 'react';

import '@styles/Home.scss'
import '@styles/section/Section_1.scss'

export default function Section_1() {

    const techStack = ['Java', 'Spring Boot', 'MyBatis', 'JPA', 'MySql', 'Oracle', 'PostgreSql', 'React', 'JSP', 'Jquery', 'Kubernetes'];

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section">
            <div className="floating-elements">
                <div className="floating-element"></div>
                <div className="floating-element"></div>
                <div className="floating-element"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-greeting">안녕하세요! 👋</div>
                    <h1 className="hero-title">
                        노력하는 개발자<br/>이상훈입니다.
                    </h1>
                    <p className="hero-subtitle">사용자 중심의 혁신적인 웹 경험을 만듭니다</p>
                    <p className="hero-description">
                        빠르게 배우고 적용하며 문제 해결에 집중하는 4년 차 개발자입니다. <br />
                        클린 코드와 협업을 중요하게 생각합니다.
                    </p>

                    <div className="tech-stack">
                        {techStack.map((tech, index) => (
                            <span key={index} className="tech-item">{tech}</span>
                        ))}
                    </div>

                    <div className="hero-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => handleScrollToSection('projects')}
                        >
                            프로젝트 보기
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => handleScrollToSection('contact')}
                        >
                            연락하기
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="profile-container">
                        <div className="profile-ring"></div>
                        <div className="profile-image"></div>
                    </div>
                </div>
            </div>

            {/*<div className="social-links">*/}
            {/*    <a href="#" className="social-link" title="GitHub" aria-label="GitHub">*/}
            {/*        📱*/}
            {/*    </a>*/}
            {/*    <a href="#" className="social-link" title="LinkedIn" aria-label="LinkedIn">*/}
            {/*        💼*/}
            {/*    </a>*/}
            {/*    <a href="#" className="social-link" title="Email" aria-label="Email">*/}
            {/*        ✉️*/}
            {/*    </a>*/}
            {/*    <a href="#" className="social-link" title="Blog" aria-label="Blog">*/}
            {/*        📝*/}
            {/*    </a>*/}
            {/*</div>*/}

            <div className="scroll-indicator">
                <small>아래로 스크롤</small>
            </div>
        </section>
    );
}