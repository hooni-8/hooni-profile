import React, {useEffect, useState} from 'react';

import '@styles/section/Section_4.scss'

export default function Section_4() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('technical');

    const technicalSkills = [
        {
            category: "Frontend",
            skills: [
                { name: "React", level: 85, icon: "⚛️" },
                { name: "JavaScript", level: 90, icon: "💛" },
                { name: "Vue.js", level: 60, icon: "💚" }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Java", level: 80, icon: "☕" },
                { name: "Spring Boot", level: 75, icon: "🚀" },
                { name: "Mybatis", level: 75, icon: "🔗" },
                { name: "MySQL", level: 70, icon: "🐬" },
                { name: "PostgreSQL", level: 80, icon: "🐘" },
            ]
        },
        {
            category: "Tools & Others",
            skills: [
                { name: "Git", level: 85, icon: "📋" },
                { name: "Kubernetes", level: 70, icon: "🐳" },
                { name: "Linux", level: 70, icon: "🐧" },
            ]
        }
    ];

    const softSkills = [
        { name: "문제 해결", level: 70, description: "복잡한 문제를 체계적으로 분석하고 해결" },
        { name: "팀 협업", level: 85, description: "다양한 팀원들과 효과적으로 소통하고 협력" },
        { name: "학습 능력", level: 80, description: "새로운 기술과 트렌드를 빠르게 습득" },
        { name: "커뮤니케이션", level: 80, description: "기술적 내용을 명확하게 전달" },
        { name: "시간 관리", level: 70, description: "우선순위를 정하고 효율적으로 업무 수행" },
        { name: "창의성", level: 70, description: "혁신적인 아이디어로 문제에 접근" }
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

        const section = document.getElementById('skills');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    const getSkillLevelColor = (level) => {
        if (level >= 80) return 'expert';
        if (level >= 60) return 'intermediate';
        return 'beginner';
    };

    return (
        <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
            <div className="skills-container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Experience</h2>
                    <p className="section-subtitle">제가 가진 기술과 경험을 소개합니다</p>
                </div>

                {/* Tab Navigation */}
                <div className="tab-navigation">
                    <button
                        className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
                        onClick={() => setActiveTab('technical')}
                    >
                        <span>💻</span>
                        기술 스택
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
                        onClick={() => setActiveTab('soft')}
                    >
                        <span>🧠</span>
                        소프트 스킬
                    </button>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    {/* Technical Skills */}
                    {activeTab === 'technical' && (
                        <div className="technical-skills">
                            {technicalSkills.map((category, categoryIndex) => (
                                <div key={categoryIndex} className={`skill-category ${isVisible ? 'animate' : ''}`} style={{animationDelay: `${categoryIndex * 0.2}s`}}>
                                    <h3 className="category-title">{category.category}</h3>
                                    <div className="skills-grid">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className="skill-item">
                                                <div className="skill-header">
                                                    <span className="skill-icon">{skill.icon}</span>
                                                    <span className="skill-name">{skill.name}</span>
                                                    <span className="skill-percentage">{skill.level}%</span>
                                                </div>
                                                <div className="skill-bar">
                                                    <div
                                                        className={`skill-progress ${getSkillLevelColor(skill.level)}`}
                                                        style={{
                                                            width: isVisible ? `${skill.level}%` : '0%',
                                                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Soft Skills */}
                    {activeTab === 'soft' && (
                        <div className="soft-skills">
                            <div className="soft-skills-grid">
                                {softSkills.map((skill, index) => (
                                    <div key={index} className={`soft-skill-card ${isVisible ? 'animate' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                                        <div className="skill-header">
                                            <h4 className="skill-name">{skill.name}</h4>
                                            <div className="skill-level">
                                                <div className="level-indicator">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`level-dot ${i < skill.level / 20 ? 'active' : ''}`}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="skill-description">{skill.description}</p>
                                        <div className="skill-progress-circle">
                                            <svg width="60" height="60" viewBox="0 0 60 60">
                                                <circle
                                                    cx="30"
                                                    cy="30"
                                                    r="25"
                                                    fill="none"
                                                    stroke="#e2e8f0"
                                                    strokeWidth="4"
                                                />
                                                <circle
                                                    cx="30"
                                                    cy="30"
                                                    r="25"
                                                    fill="none"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeDasharray={`${2 * Math.PI * 25}`}
                                                    strokeDashoffset={`${2 * Math.PI * 25 * (1 - skill.level / 100)}`}
                                                    transform="rotate(-90 30 30)"
                                                    style={{
                                                        transition: 'stroke-dashoffset 1s ease-in-out',
                                                        transitionDelay: `${index * 0.1}s`
                                                    }}
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#667eea" />
                                                        <stop offset="100%" stopColor="#764ba2" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <span className="progress-text">{skill.level}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stats-grid">
                        <div className={`stat-item ${isVisible ? 'animate' : ''}`} style={{animationDelay: '0.1s'}}>
                            <div className="stat-number">3+</div>
                            <div className="stat-label">개발 경력 (년)</div>
                        </div>
                        <div className={`stat-item ${isVisible ? 'animate' : ''}`} style={{animationDelay: '0.2s'}}>
                            <div className="stat-number">6</div>
                            <div className="stat-label">완료한 프로젝트</div>
                        </div>
                        <div className={`stat-item ${isVisible ? 'animate' : ''}`} style={{animationDelay: '0.3s'}}>
                            <div className="stat-number">9+</div>
                            <div className="stat-label">사용 가능한 기술</div>
                        </div>
                        <div className={`stat-item ${isVisible ? 'animate' : ''}`} style={{animationDelay: '0.4s'}}>
                            <div className="stat-number">100%</div>
                            <div className="stat-label">학습 의지</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};