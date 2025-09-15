import React, { useState, useEffect } from 'react';

import '@styles/section/Section_3.scss'

export default function Section_3() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState([]);

    const projects = [
        {
            id: 1,
            title: "E-commerce 플랫폼",
            description: "React와 Node.js를 활용한 풀스택 쇼핑몰 웹사이트입니다. 결제 시스템과 관리자 페이지를 포함한 완전한 전자상거래 솔루션입니다.",
            category: "fullstack",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "🛒",
            githubUrl: "#",
            liveUrl: "#",
            featured: true
        },
        {
            id: 2,
            title: "실시간 채팅 앱",
            description: "Socket.io를 이용한 실시간 채팅 애플리케이션입니다. 방 생성, 파일 전송, 이모지 반응 등의 기능을 포함합니다.",
            category: "fullstack",
            tags: ["React", "Socket.io", "Express", "Redis"],
            image: "💬",
            githubUrl: "#",
            liveUrl: "#",
            featured: false
        },
        {
            id: 3,
            title: "날씨 대시보드",
            description: "OpenWeather API를 활용한 반응형 날씨 앱입니다. 위치 기반 날씨 정보와 7일 예보를 제공합니다.",
            category: "frontend",
            tags: ["React", "API", "CSS Grid", "Chart.js"],
            image: "🌤️",
            githubUrl: "#",
            liveUrl: "#",
            featured: true
        },
        {
            id: 4,
            title: "Task Management API",
            description: "RESTful API 설계 원칙을 따른 할 일 관리 백엔드 시스템입니다. JWT 인증과 역할 기반 접근 제어를 구현했습니다.",
            category: "backend",
            tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
            image: "📋",
            githubUrl: "#",
            liveUrl: "#",
            featured: false
        },
        {
            id: 5,
            title: "포트폴리오 웹사이트",
            description: "현재 보고 계신 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용했습니다.",
            category: "frontend",
            tags: ["React", "SCSS", "Framer Motion", "Responsive"],
            image: "🎨",
            githubUrl: "#",
            liveUrl: "#",
            featured: true
        },
        {
            id: 6,
            title: "데이터 분석 도구",
            description: "Python과 Django를 활용한 데이터 시각화 웹 앱입니다. CSV 파일 업로드와 다양한 차트 생성이 가능합니다.",
            category: "fullstack",
            tags: ["Python", "Django", "D3.js", "Pandas"],
            image: "📊",
            githubUrl: "#",
            liveUrl: "#",
            featured: false
        }
    ];

    const categories = [
        { id: 'all', name: '전체', count: projects.length },
        { id: 'fullstack', name: '풀스택', count: projects.filter(p => p.category === 'fullstack').length },
        { id: 'frontend', name: '프론트엔드', count: projects.filter(p => p.category === 'frontend').length },
        { id: 'backend', name: '백엔드', count: projects.filter(p => p.category === 'backend').length }
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

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === activeFilter));
        }
    }, [activeFilter]);

    const handleFilterChange = (categoryId) => {
        setActiveFilter(categoryId);
    };

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section id="projects" className={`projects-section ${isVisible ? 'visible' : ''}`}>
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">제가 만든 프로젝트들을 소개합니다</p>
                </div>

                {/* Featured Projects */}
                <div className="featured-section">
                    <h3 className="featured-title">주요 프로젝트</h3>
                    <div className="featured-grid">
                        {featuredProjects.map((project, index) => (
                            <div key={project.id} className={`featured-card ${isVisible ? 'animate' : ''}`}
                                 style={{animationDelay: `${index * 0.2}s`}}>
                                <div className="project-image">
                                    <div className="image-placeholder">
                                        <span className="project-emoji">{project.image}</span>
                                    </div>
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a href={project.githubUrl} className="project-link" aria-label="GitHub">
                                                <span>📱</span>
                                            </a>
                                            <a href={project.liveUrl} className="project-link" aria-label="Live Demo">
                                                <span>🌐</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h4 className="project-title">{project.title}</h4>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Projects */}
                <div className="all-projects-section">
                    <h3 className="section-subtitle-large">모든 프로젝트</h3>

                    {/* Filter Buttons */}
                    <div className="filter-container">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                                onClick={() => handleFilterChange(category.id)}
                            >
                                {category.name}
                                <span className="filter-count">({category.count})</span>
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <div key={project.id} className={`project-card ${isVisible ? 'animate' : ''}`}
                                 style={{animationDelay: `${index * 0.1}s`}}>
                                <div className="card-header">
                                    <div className="project-emoji">{project.image}</div>
                                    <div className="project-category">{project.category}</div>
                                </div>
                                <div className="card-body">
                                    <h4 className="project-title">{project.title}</h4>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a href={project.githubUrl} className="project-btn secondary">
                                        <span>📱</span> Code
                                    </a>
                                    <a href={project.liveUrl} className="project-btn primary">
                                        <span>🌐</span> Demo
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
                        <a href="#" className="cta-btn">
                            <span>📱</span>
                            GitHub 방문하기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}