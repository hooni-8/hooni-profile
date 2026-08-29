import React, {useEffect, useState} from 'react';

import '@styles/pages/section/Section_2.scss'
import { formatCareerDuration } from '../../utils/career';

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);
    const careerDuration = formatCareerDuration();

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
            position: "Freelance Full Stack Developer",
            company: "프리랜서",
            period: "2025.11 - 현재 (2027.02 종료 예정)",
            type: "프리랜서",
            description: "건설근로자공제회 차세대 시스템의 구축 완료 이후 운영·유지보수와 기능 개선을 담당하고 있습니다.",
            achievements: [
                "Vue 기반 사용자 화면과 Java·Spring 기반 업무 기능의 오류를 분석하고 개선",
                "MyBatis와 Tibero 기반 데이터 조회·처리 로직을 점검하여 운영 이슈에 대응",
                "기존 업무 흐름을 파악하고 사용자 요청사항을 반영하여 시스템 사용성과 안정성 향상",
            ],
            skills: ["Java", "Spring", "MyBatis", "Tibero", "Vue", "iDesigner", "JavaScript"]
        },
        {
            position: "Full Stack Developer",
            company: "데이터쿡",
            period: "2025.06 - 2025.08",
            type: "정규직",
            description: "한국문화예술위원회의 인문360 및 인문네트워크 서비스를 운영·유지보수했습니다.",
            achievements: [
                "인문360 및 인문네트워크의 사용자·관리자 화면과 백엔드 기능 유지보수",
                "운영 중 발생한 오류의 원인을 분석하고 수정하여 서비스 안정성 향상",
                "기존 설계 구조와 데이터 처리 로직을 개선하여 코드 유지보수성과 처리 효율 향상",
            ],
            skills: ["Java", "Spring", "MyBatis", "MariaDB", "JSP", "jQuery", "JavaScript"]
        },
        {
            position: "Full Stack Developer",
            company: "컴즈 주식회사",
            period: "2023.09 - 2025.06",
            type: "정규직",
            description: "사내 AI 서비스 개발부터 배포 환경 구축, 대규모 정산 시스템 운영까지 다양한 프로젝트를 수행했습니다.",
            achievements: [
                "OpenAI API를 활용한 마인드맵·테스트케이스 생성·업무지원 서비스 3종 개발 및 배포",
                "대한민국 소프트웨어 대전 2024에서 AI 서비스 전시 부스 운영과 제품 시연 참여",
                "GitLab·Jenkins·Nexus·ArgoCD를 연동한 Kubernetes 기반 CI/CD 파이프라인 구축",
                "마켓컬리 정산 스케줄러와 지급 지시 프로세스를 개선하여 정산 처리 안정성 향상"
            ],
            skills: ["Java", "Spring Boot", "MyBatis", "JPA", "PostgreSQL", "MySQL", "React", "Vue", "JSP", "JavaScript"]
        },
        {
            position: "Full Stack Developer",
            company: "주식회사 크림솔루션",
            period: "2021.12.31 - 2023.08",
            type: "정규직",
            description: "공공 교육 플랫폼과 리조트 운영 시스템의 사용자 화면 및 Back-Office를 개발했습니다.",
            achievements: [
                "시흥교육캠퍼스 쏙(SSOC)의 사용자 화면과 Back-Office 신규 기능 개발 및 고도화",
                "기존 경기도 평생학습포털 소스를 분석하고 시흥시 요구사항에 맞는 기능으로 확장",
                "블랙스톤 벨포레 리조트 운영을 위한 Back-Office 신규 화면과 업무 기능 개발",
                "운영 사용자 요청을 반영한 기능 개선과 유지보수를 통해 업무 처리 편의성 향상"
            ],
            skills: ["Java", "Spring", "MyBatis", "iBatis", "Oracle", "MySQL", "JSP", "JavaScript", "jQuery"]
        }
    ];

    return (
        <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
            <div className="about-container">
                <div className="section-header">
                    <span className="section-eyebrow">ABOUT & EXPERIENCE</span>
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">개발자로서 중요하게 생각하는 기준과 실무 경험입니다.</p>
                </div>

                <div className="about-content">
                    <div className="about-story">
                        <div className="story-text">
                            <span className="story-label">MY APPROACH</span>
                            <h3>기능 구현을 넘어,<br/>운영까지 생각합니다.</h3>
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
                            <div className="profile-summary-card">
                                <span className="summary-label">AT A GLANCE</span>
                                <div className="summary-item"><strong>{careerDuration}</strong><span>개발 실무 경력</span></div>
                                <div className="summary-item"><strong>7</strong><span>참여 프로젝트</span></div>
                                <div className="summary-item"><strong>Full Stack</strong><span>Frontend · Backend</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="experience-content">
                        <div className="subsection-header">
                            <span>CAREER</span>
                            <h3>경력</h3>
                        </div>
                        <div className="experience-timeline">
                            {experiences.map((exp, index) => (
                                <div key={index} className={`experience-item ${isVisible ? 'animate' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
                                    <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
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
                                            <h6>주요 기여 및 성과</h6>
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
                        <div className="subsection-header">
                            <span>VALUES</span>
                            <h3>개발할 때 중요하게 생각하는 것</h3>
                        </div>
                        <div className="interests">
                            {interests.map((interest, index) => (
                                <div key={index} className={`interest-card ${isVisible ? 'animate' : ''}`}
                                     style={{animationDelay: `${index * 0.1}s`}}>
                                    <span className="interest-index">0{index + 1}</span>
                                    <h4>{interest.title}</h4>
                                    <p>{interest.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
