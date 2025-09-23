import React, { useState, useEffect } from 'react';

import '@styles/pages/section/Section_3.scss'
import githubLogo from '@assets/imgs/github.png';

import Section3_modal from '@layout/modal/Section_3_modal';

export default function Section_3() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "한국문화예술위원회 유지보수",
            tags: ["Java", "Spring", "Mybatis", "MariaDB", "JSP", "jQuery", "JavaScript"],
            image: "📋",
            description: "JSP, Thymeleaf, jQuery 기반의 웹 화면을 유지보수하고, Spring, eGovFrame, MyBatis를 이용하여 운영 및 유지보수를 진행하였습니다.",
            duration: "2025.07 ~ 2025.08",
            teamSize: "1명",
            tasks: ["인문360, 인문네트워크 운영 및 유지보수 담당", "오류사항 분석 및 수정으로 서비스 안정성 향상", "기존 잘못된 설계 구조를 개선하여 성능 및 유지보수성 향상"],
            role: "FrontEnd, BackEnd",
        },
        {
            id: 2,
            title: "자사 AI 연동 서비스",
            tags: ["Java", "Spring Boot", "React", "Mybatis", "PostgreSQL", "React", "Chat-GPT"],
            image: "💬",
            description: "ChatGPT API를 활용하여 AI MindMap, 업무 지원 서비스, TestCase Generator 등 AI 기반 기능을 구현하였고, 대한민국 소프트웨어 대전 2024 전시 부스 운영 및 시연 참여 하였습니다.",
            duration: "2024.04 ~ 2025.04",
            teamSize: "5명",
            role: "FrontEnd, BackEnd",
            tasks: ["대한민국 소프트웨어 대전 2024 참가 (2024.12.03 ~ 2024.12.05)", "AI 기반 서비스 3종 개발 및 배포"],
            subProjects: [
                {
                    name: "COMES MINDMAP",
                    tasks: ["주제 기반 마인드맵을 자동으로 생성하는 AI 서비스 구현", "사용자 입력에 따라 OpenAI API를 활용한 마인드맵 트리 구조 자동 생성 로직 구현", "마인드맵 노드 드래그 및 편집 기능 지원"]
                },
                {
                    name: "COMES TCHUB (TestCase Generator)",
                    tasks: ["임베딩된 학습 데이터를 Vector DB에 저장 및 검색하여, AI를 통한 테스트케이스 자동 생성 기능 개발", "생성된 테스트케이스 저장 및 관리 기능 개발"]
                },
                {
                    name: "COMES SUPPORT",
                    tasks: ["AI 챗봇 및 2차 번역 기능을 통합한 업무지원 서비스 구현"]
                }
            ]
        },
        {
            id: 3,
            title: "사내 운영/개발 서버 & CI/CD 구축",
            tags: ["CentOS", "Kubernetes", "GitLab", "Jenkins", "Nexus", "ArgoCD"],
            image: "🌤️",
            description: "CentOS 및 Kubernetes 기반의 환경에서 GitLab, Jenkins, Nexus, ArgoCD를 활용한 CI/CD 파이프라인을 설계 및 구축하여 개발 및 운영 환경의 자동화를 달성하였습니다.",
            duration: "2024.02 ~ 2024.03",
            teamSize: "4명",
            tasks: ["GitLab, Jenkins, Nexus, ArgoCD를 활용한 CI/CD 파이프라인 설계 및 구축", "개발 및 운영 환경을 분리하여 자동화된 배포 시스템 구성", "GitLab Webhook 연동 및 Jenkins Pipeline Script 작성", "Nexus를 이용한 아티팩트 저장소 설정 및 버전 관리 적용", "ArgoCD를 통한 Kubernetes 기반 자동 배포 환경 구현"],
        },
        {
            id: 4,
            title: "마켓컬리 1P/3P 정산 결제 시스템 운영 및 유지보수",
            tags: ["Java", "Spring Boot", "Mybatis", "JPA", "MySQL"],
            image: "🛒",
            description: "마켓컬리 1P/3P 정산 시스템의 유지보수 및 고도화 작업을 수행하였으며, 파트너사 금액 지급 지시 시스템 개선 및 스케줄러 리팩토링을 통해 정산 처리 안정성을 높였습니다.",
            duration: "2023.09 ~ 2024.02",
            teamSize: "8명",
            tasks: ["마켓컬리 정산 시스템의 운영 및 유지보수 담당", "파트너사 대상 지급 지시 프로세스를 고도화하여 지급 정확도 및 효율성 향상", "정산 스케줄러 시스템의 성능 개선 및 장애 대응 로직 강화", "대규모 데이터 처리 로직 리팩토링 및 로그 추적 기능 개선을 통해 운영 편의성 증대"],
            role: "BackEnd",
        },
        {
            id: 5,
            title: "블랙스톤 벨포레 SER App 구축",
            tags: ["Java", "Spring", "ibatis", "Oracle", "JSP", "JavaScript" ,"jQuery"],
            image: "🎨",
            description: "리조트 운영을 위한 Back-Office 시스템을 신규 개발하고, 기존 기능을 고도화하였습니다.",
            duration: "2022.08 ~ 2023.03",
            teamSize: "5명",
            tasks: ["Back-Office 신규 개발 및 기능 고도화", "웹 화면 개발 및 유지보수", "사용자 요청에 맞춘 신규 기능 개발 및 성능 향상"],
            role: "FrontEnd, BackEnd",
        },
        {
            id: 6,
            title: "시흥시 온라인 평생학습 플랫폼 구축",
            tags: ["Java", "Spring", "ibatis", "MySQL", "JSP", "JavaScript", "jQuery"],
            image: "📊",
            description: "시흥교육캠퍼스 쏙(SSOC) 플랫폼을 개발하였으며, 기존 경기도 평생학습포털(GSEEK) 소스를 활용하여 신규 기능을 추가하고 사용자 맞춤형 Back-Office 기능을 고도화하였습니다.",
            duration: "2022.01 ~ 2022.08",
            teamSize: "3명",
            tasks: ["시흥교육캠퍼스 쏙(SSOC) 플랫폼 개발", "기존 경기도 평생학습포털(GSEEK) 소스 코드 활용하여 신규 기능 개발 및 고도화", "사용자 화면 및 Back-Office 개발"],
            role: "FrontEnd, BackEnds",
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

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    }

    return (
        <>
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
                                        <div onClick={() => handleProjectClick(project)} className="project-btn primary">
                                            자세히 보기
                                        </div>
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

            <Section3_modal
                project={selectedProject}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}