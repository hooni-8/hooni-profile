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

    const journey = [
        {
            year: "2022",
            title: "개발 여정 시작",
            description: "웹 개발에 흥미를 느끼고 첫 코드를 작성했습니다."
        },
        {
            year: "2023",
            title: "첫 프로젝트 완성",
            description: "React로 첫 웹 애플리케이션을 만들어 배포했습니다."
        },
        {
            year: "2024",
            title: "팀 프로젝트 경험",
            description: "협업을 통해 더 큰 규모의 프로젝트를 성공적으로 완료했습니다."
        },
        {
            year: "2025",
            title: "지속적인 성장",
            description: "새로운 기술을 학습하며 더 나은 개발자가 되기 위해 노력하고 있습니다."
        }
    ];

    const interests = [
        { icon: "💻", title: "클린 코드", description: "읽기 쉽고 유지보수가 편한 코드 작성" },
        { icon: "🎨", title: "UI/UX 디자인", description: "사용자 경험을 고려한 인터페이스 설계" },
        { icon: "📚", title: "새로운 기술 학습", description: "끊임없는 학습을 통한 기술 역량 향상" },
        { icon: "🤝", title: "팀워크", description: "협업을 통해 더 나은 결과물 만들기" }
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
                                안녕하세요! 사용자 중심의 웹 개발을 추구하는 김개발입니다.
                                처음 코드를 작성했을 때의 그 짜릿한 순간을 지금도 기억하고 있어요.
                            </p>
                            <p>
                                단순히 기능이 작동하는 것을 넘어서, 사용자가 직관적으로 사용할 수 있고
                                개발자가 유지보수하기 편한 코드를 작성하는 것이 제 목표입니다.
                            </p>
                            <p>
                                새로운 기술을 배우는 것을 즐기며, 항상 더 나은 방법이 있을지 고민하는
                                개발자가 되고 싶습니다. 팀과의 협업을 통해 함께 성장하는 것을 중요하게 생각해요.
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

                    <div className="journey-timeline">
                        <h3>나의 개발 여정</h3>
                        <div className="timeline">
                            {journey.map((item, index) => (
                                <div key={index} className={`timeline-item ${isVisible ? 'animate' : ''}`}
                                     style={{animationDelay: `${index * 0.2}s`}}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-year">{item.year}</div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
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
                                <div className="fact">
                                    <span className="fact-emoji">🎮</span>
                                    <p>게임을 통해 논리적 사고력 키우기</p>
                                </div>
                                <div className="fact">
                                    <span className="fact-emoji">📖</span>
                                    <p>기술 블로그 읽기가 취미</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}