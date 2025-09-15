import React, {useEffect, useState} from 'react';

import '@styles/section/Section_4.scss'

export default function Section_4() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('technical');

    const technicalSkills = [
        {
            category: "Frontend",
            skills: [
                { name: "JavaScript", level: 90, icon: "💛" },
                { name: "React", level: 85, icon: "⚛️" },
                { name: "TypeScript", level: 75, icon: "🔷" },
                { name: "HTML/CSS", level: 95, icon: "🎨" },
                { name: "SCSS/Sass", level: 80, icon: "💅" },
                { name: "Vue.js", level: 60, icon: "💚" }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", level: 80, icon: "🟢" },
                { name: "Express", level: 75, icon: "🚀" },
                { name: "Python", level: 70, icon: "🐍" },
                { name: "MongoDB", level: 75, icon: "🍃" },
                { name: "PostgreSQL", level: 65, icon: "🐘" },
                { name: "Redis", level: 60, icon: "🔴" }
            ]
        },
        {
            category: "Tools & Others",
            skills: [
                { name: "Git", level: 85, icon: "📱" },
                { name: "Docker", level: 70, icon: "🐳" },
                { name: "AWS", level: 65, icon: "☁️" },
                { name: "Figma", level: 75, icon: "🎨" },
                { name: "Jest", level: 70, icon: "🧪" },
                { name: "Webpack", level: 60, icon: "📦" }
            ]
        }
    ];

    const softSkills = [
        { name: "문제 해결", level: 90, description: "복잡한 문제를 체계적으로 분석하고 해결" },
        { name: "팀 협업", level: 85, description: "다양한 팀원들과 효과적으로 소통하고 협력" },
        { name: "학습 능력", level: 95, description: "새로운 기술과 트렌드를 빠르게 습득" },
        { name: "커뮤니케이션", level: 80, description: "기술적 내용을 명확하게 전달" },
        { name: "시간 관리", level: 85, description: "우선순위를 정하고 효율적으로 업무 수행" },
        { name: "창의성", level: 75, description: "혁신적인 아이디어로 문제에 접근" }
    ];

    const experiences = [
        {
            company: "테크 스타트업",
            position: "프론트엔드 개발자",
            period: "2023.03 - 현재",
            type: "정규직",
            description: "React 기반 웹 애플리케이션 개발 및 성능 최적화를 담당했습니다.",
            achievements: [
                "페이지 로딩 속도 40% 개선",
                "사용자 인터페이스 리뉴얼 프로젝트 리드",
                "테스팅 자동화 도입으로 버그 발생률 50% 감소"
            ],
            skills: ["React", "TypeScript", "SCSS", "Jest"]
        },
        {
            company: "웹 에이전시",
            position: "주니어 개발자",
            period: "2022.06 - 2023.02",
            type: "정규직",
            description: "다양한 클라이언트 프로젝트에 참여하여 웹사이트 개발 및 유지보수를 담당했습니다.",
            achievements: [
                "월 평균 3개 프로젝트 성공적 완료",
                "반응형 웹 디자인 구현 전문성 개발",
                "클라이언트 만족도 95% 달성"
            ],
            skills: ["JavaScript", "PHP", "WordPress", "MySQL"]
        },
        {
            company: "프리랜서",
            position: "웹 개발자",
            period: "2021.09 - 2022.05",
            type: "프리랜서",
            description: "개인 클라이언트 및 소상공인을 대상으로 웹사이트 제작 서비스를 제공했습니다.",
            achievements: [
                "총 15개 웹사이트 제작 완료",
                "고객 리텐션율 80% 달성",
                "평균 프로젝트 완료 시간 30% 단축"
            ],
            skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
        }
    ];

    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2024.01",
            icon: "☁️"
        },
        {
            name: "Google Analytics Certified",
            issuer: "Google",
            date: "2023.08",
            icon: "📊"
        },
        {
            name: "React Developer Certification",
            issuer: "Meta",
            date: "2023.05",
            icon: "⚛️"
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
                    <button
                        className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        <span>💼</span>
                        경험
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

                    {/* Experience */}
                    {activeTab === 'experience' && (
                        <div className="experience-content">
                            <div className="experience-timeline">
                                {experiences.map((exp, index) => (
                                    <div key={index} className={`experience-item ${isVisible ? 'animate' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
                                        <div className="timeline-dot"></div>
                                        <div className="experience-card">
                                            <div className="experience-header">
                                                <div className="company-info">
                                                    <h4 className="position">{exp.position}</h4>
                                                    <h5 className="company">{exp.company}</h5>
                                                </div>
                                                <div className="period-info">
                                                    <span className="period">{exp.period}</span>
                                                    <span className={`type ${exp.type}`}>{exp.type}</span>
                                                </div>
                                            </div>
                                            <p className="experience-description">{exp.description}</p>
                                            <div className="achievements">
                                                <h6>주요 성과:</h6>
                                                <ul>
                                                    {exp.achievements.map((achievement, achIndex) => (
                                                        <li key={achIndex}>{achievement}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="experience-skills">
                                                {exp.skills.map((skill, skillIndex) => (
                                                    <span key={skillIndex} className="experience-skill">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <div className="certifications-section">
                                <h3 className="certifications-title">자격증 & 인증</h3>
                                <div className="certifications-grid">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className={`certification-card ${isVisible ? 'animate' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                                            <div className="cert-icon">{cert.icon}</div>
                                            <div className="cert-info">
                                                <h5 className="cert-name">{cert.name}</h5>
                                                <p className="cert-issuer">{cert.issuer}</p>
                                                <span className="cert-date">{cert.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
                            <div className="stat-number">50+</div>
                            <div className="stat-label">완료한 프로젝트</div>
                        </div>
                        <div className={`stat-item ${isVisible ? 'animate' : ''}`} style={{animationDelay: '0.3s'}}>
                            <div className="stat-number">15+</div>
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