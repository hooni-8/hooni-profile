import React from 'react';
import { ArrowDown } from 'lucide-react';

import '@styles/pages/section/Section_1.scss'
import { formatCareerDuration, getCareerSummary } from '../../utils/career';

export default function HeroSection() {

    const techStack = ['Java', 'Spring Boot', 'MyBatis', 'JPA', 'MySQL', 'Oracle', 'PostgreSQL', 'React', 'JSP', 'jQuery', 'Kubernetes'];
    const { yearNumber } = getCareerSummary();
    const careerLabel = formatCareerDuration();

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="top" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-greeting"><span></span>FULL STACK DEVELOPER</div>
                    <h1 className="hero-title">
                        <span>문제를 이해하고,</span>
                        <strong>끝까지 해결합니다.</strong>
                    </h1>
                    <p className="hero-description">
                        안녕하세요, {yearNumber}년 차 개발자 이상훈입니다.<br/>
                        사용자 화면부터 서버와 데이터까지 연결해 안정적인 서비스를 만듭니다.
                    </p>

                    <div className="tech-stack">
                        {techStack.map((tech, index) => (
                            <span key={index} className="tech-item">{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-profile-card">
                        <div className="profile-monogram">LSH</div>
                        <div className="profile-copy">
                            <span className="profile-label">PROFILE</span>
                            <h2>이상훈</h2>
                            <p>Full Stack Developer</p>
                        </div>
                        <div className="profile-capabilities" aria-label="주요 개발 영역">
                            <div><span>01</span><strong>Frontend</strong><small>사용자 화면 · Back-Office</small></div>
                            <div><span>02</span><strong>Backend</strong><small>Java · Spring 기반 업무 로직</small></div>
                            <div><span>03</span><strong>Operations</strong><small>운영 개선 · CI/CD</small></div>
                        </div>
                        <dl className="profile-meta">
                            <div>
                                <dt>Experience</dt>
                                <dd>{careerLabel}</dd>
                            </div>
                            <div>
                                <dt>Focus</dt>
                                <dd>Web Service</dd>
                            </div>
                            <div>
                                <dt>Based in</dt>
                                <dd>South Korea</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button
                        className="btn-primary"
                        onClick={() => handleScrollToSection('projects')}
                    >
                        프로젝트 보기 <span aria-hidden="true">↗</span>
                    </button>
                    <button
                        className="btn-secondary"
                        onClick={() => handleScrollToSection('contact')}
                    >
                        연락하기 <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="arrow-down">
                    <ArrowDown size={30} strokeWidth={5}/>
                </div>
                <small>SCROLL</small>
            </div>
        </section>
    );
}
