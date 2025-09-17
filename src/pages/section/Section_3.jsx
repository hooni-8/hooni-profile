import React, { useState, useEffect } from 'react';

import '@styles/section/Section_3.scss'
import githubLogo from '@assets/imgs/github.png';

export default function Section_3() {
    const [isVisible, setIsVisible] = useState(false);

    const projects = [
        {
            id: 1,
            title: "한국문화예술위원회 유지보수",
            tags: ["Java", "Spring", "Mybatis", "MariaDB", "JSP", "jQuery", "JavaScript"],
            image: "📋",
        },
        {
            id: 2,
            title: "자사 AI 연동 서비스",
            tags: ["Java", "Spring Boot", "React", "Mybatis", "PostgreSQL", "React", "Chat-GPT"],
            image: "💬",
        },
        {
            id: 3,
            title: "사내 운영/개발 서버 & CI/CD 구축",
            tags: ["CentOS", "Kubernetes", "GitLab", "Jenkins", "Nexus", "ArgoCD"],
            image: "🌤️",
        },
        {
            id: 4,
            title: "마켓컬리 1P/3P 정산 결제 시스템 운영 및 유지보수",
            tags: ["Java", "Spring Boot", "Mybatis", "JPA", "MySQL"],
            image: "🛒",
        },
        {
            id: 5,
            title: "블랙스톤 벨포레 SER App 구축",
            tags: ["Java", "Spring", "ibatis", "Oracle", "JSP", "JavaScript" ,"jQuery"],
            image: "🎨",
        },
        {
            id: 6,
            title: "시흥시 온라인 평생학습 플랫폼 구축",
            tags: ["Java", "Spring", "ibatis", "MySQL", "JSP", "JavaScript", "jQuery"],
            image: "📊",
        }
    ];

    useEffect(() => {
        setIsVisible(true);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('projects');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className={`projects-section ${isVisible ? 'visible' : ''}`}>
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">진행했던 프로젝트</p>
                </div>

                {/* All Projects */}
                <div className="all-projects-section">
                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={project.id} className={`project-card ${isVisible ? 'animate' : ''}`}
                                 style={{animationDelay: `${index * 0.1}s`}}>
                                <div className="card-header">
                                    <div className="project-emoji">{project.image}</div>
                                </div>
                                <div className="card-body">
                                    <h4 className="project-title">{project.title}</h4>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="project-btn primary">
                                        자세히 보기
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="cta-section">
                    <div className="cta-content">
                        <h3>더 많은 프로젝트가 궁금하신가요?</h3>
                        <p>GitHub에서 더 많은 프로젝트와 코드를 확인하실 수 있습니다.</p>
                        <a href="https://github.com/hooni-8" target="_blank" className="cta-btn">
                            <span><img src={githubLogo} alt="Github Logo"/></span>
                            GitHub 방문하기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}