import React, {useEffect, useState} from 'react';

import '@styles/pages/section/Section_4.scss';
import { formatCareerDuration } from '../../utils/career';

export default function SkillsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const careerDuration = formatCareerDuration();

    const skillGroups = [
        {
            category: 'Core Backend',
            icon: '⚙️',
            description: '공공기관·정산·AI 서비스의 API와 핵심 업무 로직을 개발했습니다.',
            skills: [
                { name: 'Java', proficiency: 'core', label: '주력' },
                { name: 'Spring', proficiency: 'core', label: '주력' },
                { name: 'Spring Boot', proficiency: 'core', label: '주력' },
                { name: 'MyBatis', proficiency: 'core', label: '주력' },
                { name: 'JPA', proficiency: 'experienced', label: '실무 활용' },
            ],
        },
        {
            category: 'Frontend',
            icon: '🖥️',
            description: '사용자 화면과 관리자용 Back-Office를 프론트부터 백엔드까지 연결해 개발했습니다.',
            skills: [
                { name: 'JavaScript', proficiency: 'core', label: '주력' },
                { name: 'Vue.js', proficiency: 'experienced', label: '실무 활용' },
                { name: 'React', proficiency: 'experienced', label: '실무 활용' },
                { name: 'JSP', proficiency: 'experienced', label: '실무 활용' },
                { name: 'jQuery', proficiency: 'experienced', label: '실무 활용' },
            ],
        },
        {
            category: 'Database',
            icon: '🗄️',
            description: '업무 데이터 구조를 분석하고 SQL과 데이터 처리 로직을 개선했습니다.',
            skills: [
                { name: 'PostgreSQL', proficiency: 'experienced', label: '실무 활용' },
                { name: 'MySQL', proficiency: 'experienced', label: '실무 활용' },
                { name: 'MariaDB', proficiency: 'experienced', label: '실무 활용' },
                { name: 'Oracle', proficiency: 'experienced', label: '실무 활용' },
                { name: 'Tibero', proficiency: 'experienced', label: '실무 활용' },
            ],
        },
        {
            category: 'DevOps & Infrastructure',
            icon: '🚀',
            description: '개발·운영 환경을 분리하고 Kubernetes 기반 CI/CD 파이프라인을 구축했습니다.',
            skills: [
                { name: 'Git', proficiency: 'experienced', label: '실무 활용' },
                { name: 'Linux', proficiency: 'experienced', label: '실무 활용' },
                { name: 'Kubernetes', proficiency: 'built', label: '구축 경험' },
                { name: 'GitLab', proficiency: 'built', label: '구축 경험' },
                { name: 'Jenkins', proficiency: 'built', label: '구축 경험' },
                { name: 'Nexus', proficiency: 'built', label: '구축 경험' },
                { name: 'ArgoCD', proficiency: 'built', label: '구축 경험' },
            ],
        },
        {
            category: 'API & Integration',
            icon: '🔌',
            description: '외부 시스템과 AI API를 연동해 실제 업무에 사용하는 서비스를 구현했습니다.',
            skills: [
                { name: 'REST API', proficiency: 'core', label: '주력' },
                { name: 'OpenAI API', proficiency: 'built', label: '구축 경험' },
                { name: 'External API', proficiency: 'experienced', label: '실무 활용' },
            ],
        },
    ];

    const workStyles = [
        {
            icon: '🔍',
            title: '문제 해결',
            description: '운영 오류의 원인을 화면·서버·데이터 영역에서 함께 추적하고 해결합니다.',
        },
        {
            icon: '🤝',
            title: '요구사항 구체화',
            description: '현업과 고객사의 요청을 실제 개발 가능한 기능과 작업 단위로 정리합니다.',
        },
        {
            icon: '🛡️',
            title: '운영 안정성',
            description: '장애 분석부터 수정·배포·재발 방지를 고려해 안정적인 운영을 지향합니다.',
        },
        {
            icon: '📚',
            title: '학습과 적용',
            description: '새로운 기술을 학습하는 데 그치지 않고 서비스와 배포 환경에 적용합니다.',
        },
    ];

    useEffect(() => {
        const section = document.getElementById('skills');
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.08 }
        );

        if (section) observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
            <div className="skills-container">
                <div className="section-header">
                    <span className="section-eyebrow">TECHNOLOGY</span>
                    <h2 className="section-title">Skills</h2>
                    <p className="section-subtitle">실무에서 사용하고 직접 구축한 기술을 경험 기준으로 정리했습니다</p>
                </div>

                <div className="proficiency-legend" aria-label="기술 경험 수준 안내">
                    <span className="legend-item core"><i></i>주력</span>
                    <span className="legend-item experienced"><i></i>실무 활용</span>
                    <span className="legend-item built"><i></i>구축 경험</span>
                </div>

                <div className="skill-group-grid">
                    {skillGroups.map((group, groupIndex) => (
                        <article
                            key={group.category}
                            className={`skill-group-card ${isVisible ? 'animate' : ''}`}
                            style={{animationDelay: `${groupIndex * 0.08}s`}}
                        >
                            <div className="skill-group-header">
                                <span className="group-index" aria-hidden="true">{String(groupIndex + 1).padStart(2, '0')}</span>
                                <h3>{group.category}</h3>
                            </div>
                            <p className="group-description">{group.description}</p>
                            <div className="skill-badges">
                                {group.skills.map((skill) => (
                                    <span key={skill.name} className={`skill-badge ${skill.proficiency}`}>
                                        <strong>{skill.name}</strong>
                                        <small>{skill.label}</small>
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="work-style-section">
                    <div className="subsection-header">
                        <span className="eyebrow">HOW I WORK</span>
                        <h3>업무 방식</h3>
                        <p>점수 대신 실제 프로젝트에서 반복해온 행동으로 표현했습니다.</p>
                    </div>
                    <div className="work-style-grid">
                        {workStyles.map((style, index) => (
                            <article
                                key={style.title}
                                className={`work-style-card ${isVisible ? 'animate' : ''}`}
                                style={{animationDelay: `${0.35 + index * 0.08}s`}}
                            >
                                <span className="work-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                                <div className="work-copy">
                                    <h4>{style.title}</h4>
                                    <p>{style.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="stats-section">
                    <div className="stats-grid">
                        <div className={`stat-item ${isVisible ? 'animate' : ''}`}>
                            <div className="stat-number">{careerDuration}</div>
                            <div className="stat-label">개발 실무 경력</div>
                        </div>
                        <div className={`stat-item ${isVisible ? 'animate' : ''}`}>
                            <div className="stat-number">7건</div>
                            <div className="stat-label">참여 프로젝트 · 진행 중 1건</div>
                        </div>
                        <div className={`stat-item ${isVisible ? 'animate' : ''}`}>
                            <div className="stat-number">3종</div>
                            <div className="stat-label">AI 서비스 개발 및 배포</div>
                        </div>
                        <div className={`stat-item ${isVisible ? 'animate' : ''}`}>
                            <div className="stat-number">Full Stack</div>
                            <div className="stat-label">Frontend부터 Backend까지</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
