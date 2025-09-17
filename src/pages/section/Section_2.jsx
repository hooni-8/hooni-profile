import React, {useEffect, useState} from 'react';

import '@styles/section/Section_2.scss'

export default function Section_2() {
    const [isVisible, setIsVisible] = useState(false);

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

        const section = document.getElementById('about');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    const interests = [
        { icon: "💻", title: "클린 코드", description: "읽기 쉽고 유지보수가 편한 코드 작성" },
        { icon: "📚", title: "새로운 기술 학습", description: "끊임없는 학습을 통한 기술 역량 향상" },
        { icon: "🤝", title: "팀워크", description: "협업을 통해 더 나은 결과물 만들기" }
    ];

    const experiences = [
        {
            position: "DEV",
            company: "데이터쿡",
            period: "2025.06 - 2025.08",
            type: "정규직",
            description: "공공기관 유지보수 프로젝트를 담당했습니다.",
            achievements: [
                "한국문화예술위원회 유지보수",
            ],
            skills: ["Java", "Spring", "Mybatis", "MariaDB", "JSP", "jQuery", "JavaScript"]
        },
        {
            position: "DEV",
            company: "컴즈 주식회사",
            period: "2023.09 - 2025.06",
            type: "정규직",
            description: "사내 AI 서비스 개발 및 마켓컬리 정산 시스템 운영 유지보수를 진행하였습니다.",
            achievements: [
                "자사 AI 연동 서비스 개발",
                "사내 운영/개발 서버 & CI/CD 구축",
                "마켓컬리 1P/3P 정산 결제 시스템 운영 및 유지보수",
                "사내 인사관리 시스템 운영 및 유지보수"
            ],
            skills: ["Java", "Spring Boot", "Mybatis", "JPA", "PostgreSQL", "MySQL", "React", "Vue", "JSP", "JavaScript"]
        },
        {
            position: "DEV",
            company: "주식회사 크림솔루션",
            period: "2021.12 - 2023.08",
            type: "정규직",
            description: "시흥시 쏙(SSOC) 및 리조트 운영을 위한 Back-Office 시스템 개발을 진행하였습니다.",
            achievements: [
                "블랙스톤 벨포레 SER App 구축",
                "시흥시 온라인 평생학습 플랫폼 구축"
            ],
            skills: ["Java", "Spring", "Mybatis", "ibatis", "Oracle", "MySQL", "JSP", "JavaScript","jQuery"]
        }
    ];

    return (
        <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
            <div className="about-container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">저에 대해 조금 더 알아보세요</p>
                </div>

                <div className="about-content">
                    <div className="about-story">
                        <div className="story-text">
                            <h3>개발자로서의 여정</h3>
                            <p>
                                안녕하세요! 사용자 중심의 개발을 추구하는 이상훈입니다.
                                처음 기능을 완성했을 때의 그 짜릿한 순간을 지금도 기억하고 있습니다.
                            </p>
                            <p>
                                단순히 기능이 작동하는 것을 넘어서, 사용자가 직관적으로 사용할 수 있고
                                개발자가 유지보수하기 편한 코드를 작성하는 것이 제 목표입니다.
                            </p>
                            <p>
                                새로운 기술을 배우는 것을 즐기며, 항상 더 나은 방법이 있을지 고민하는
                                개발자가 되고 싶습니다. 팀과의 협업을 통해 함께 성장하는 것을 중요하게 생각하고 있습니다.
                            </p>
                        </div>

                        <div className="story-image">
                            <div className="image-container">
                                <div className="coding-animation">
                                    <div className="screen">
                                        <div className="code-line"></div>
                                        <div className="code-line short"></div>
                                        <div className="code-line"></div>
                                        <div className="code-line medium"></div>
                                    </div>
                                    <div className="keyboard"></div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                            <h6>진행한 프로젝트:</h6>
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
                    </div>
                    <div className="interests-grid">
                        <h3>관심사 & 가치관</h3>
                        <div className="interests">
                            {interests.map((interest, index) => (
                                <div key={index} className={`interest-card ${isVisible ? 'animate' : ''}`}
                                     style={{animationDelay: `${index * 0.1}s`}}>
                                    <div className="interest-icon">{interest.icon}</div>
                                    <h4>{interest.title}</h4>
                                    <p>{interest.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="personal-touch">
                        <div className="fun-facts">
                            <h3>재미있는 사실들 ✨</h3>
                            <div className="facts-grid">
                                <div className="fact">
                                    <span className="fact-emoji">☕</span>
                                    <p>하루에 커피 3잔은 기본</p>
                                </div>
                                <div className="fact">
                                    <span className="fact-emoji">🌙</span>
                                    <p>밤에 더 집중이 잘 되는 올빼미형</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}