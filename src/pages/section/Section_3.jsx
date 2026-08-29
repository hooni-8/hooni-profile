import React, { useState, useEffect } from 'react';

import '@styles/pages/section/Section_3.scss'
import githubLogo from '@assets/imgs/github.png';

import ProjectModal from '@layout/modal/Section_3_modal';

export default function ProjectsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 7,
            title: "건설근로자공제회 차세대 시스템 운영·유지보수",
            tags: ["Java", "Spring", "MyBatis", "Tibero", "Vue.js", "iDesigner", "JavaScript"],
            description: "건설근로자공제회 차세대 시스템의 구축 완료 이후 운영·유지보수와 기능 개선을 담당하고 있습니다.",
            duration: "2025.11 ~ 현재 (2027.02 종료 예정)",
            teamSize: "19",
            role: "Full Stack",
            tasks: [
                "Vue 기반 사용자 화면과 Java·Spring 기반 업무 기능의 오류 분석 및 개선",
                "MyBatis와 Tibero 기반 데이터 조회·처리 로직 점검 및 운영 이슈 대응",
                "기존 업무 흐름을 분석하고 사용자 요청사항을 반영하여 시스템 사용성과 안정성 향상",
            ],
        },
        {
            id: 6,
            title: "한국문화예술위원회 유지보수",
            tags: ["Java", "Spring", "MyBatis", "MariaDB", "JSP", "jQuery", "JavaScript"],
            description: "JSP, Thymeleaf, jQuery 기반의 웹 화면을 유지보수하고, Spring, eGovFrame, MyBatis를 이용하여 운영 및 유지보수를 진행하였습니다.",
            duration: "2025.07 ~ 2025.08",
            teamSize: "1",
            role: "Full Stack",
            tasks: ["인문360, 인문네트워크 운영 및 유지보수 담당", "오류사항 분석 및 수정으로 서비스 안정성 향상", "기존 잘못된 설계 구조를 개선하여 성능 및 유지보수성 향상"],
        },
        {
            id: 5,
            title: "자사 AI 연동 서비스",
            tags: ["Java", "Spring Boot", "React", "MyBatis", "PostgreSQL", "OpenAI API"],
            description: "ChatGPT API를 활용하여 AI MindMap, 업무 지원 서비스, TestCase Generator 등 AI 기반 기능을 구현하였고, 대한민국 소프트웨어 대전 2024 전시 부스 운영 및 시연 참여 하였습니다.",
            duration: "2024.04 ~ 2025.04",
            teamSize: "5",
            role: "Full Stack",
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
            id: 4,
            title: "사내 운영/개발 서버 & CI/CD 구축",
            tags: ["CentOS", "Kubernetes", "GitLab", "Jenkins", "Nexus", "ArgoCD"],
            description: "CentOS 및 Kubernetes 기반의 환경에서 GitLab, Jenkins, Nexus, ArgoCD를 활용한 CI/CD 파이프라인을 설계 및 구축하여 개발 및 운영 환경의 자동화를 달성하였습니다.",
            duration: "2024.02 ~ 2024.03",
            teamSize: "4",
            tasks: ["GitLab, Jenkins, Nexus, ArgoCD를 활용한 CI/CD 파이프라인 설계 및 구축", "개발 및 운영 환경을 분리하여 자동화된 배포 시스템 구성", "GitLab Webhook 연동 및 Jenkins Pipeline Script 작성", "Nexus를 이용한 아티팩트 저장소 설정 및 버전 관리 적용", "ArgoCD를 통한 Kubernetes 기반 자동 배포 환경 구현"],
        },
        {
            id: 3,
            title: "마켓컬리 1P/3P 정산 결제 시스템 운영 및 유지보수",
            tags: ["Java", "Spring Boot", "MyBatis", "JPA", "MySQL"],
            description: "마켓컬리 1P/3P 정산 시스템의 유지보수 및 고도화 작업을 수행하였으며, 파트너사 금액 지급 지시 시스템 개선 및 스케줄러 리팩토링을 통해 정산 처리 안정성을 높였습니다.",
            duration: "2023.09 ~ 2024.02",
            teamSize: "8",
            role: "Full Stack",
            tasks: ["마켓컬리 정산 시스템의 운영 및 유지보수 담당", "파트너사 대상 지급 지시 프로세스를 고도화하여 지급 정확도 및 효율성 향상", "정산 스케줄러 시스템의 성능 개선 및 장애 대응 로직 강화", "대규모 데이터 처리 로직 리팩토링 및 로그 추적 기능 개선을 통해 운영 편의성 증대"],
        },
        {
            id: 2,
            title: "블랙스톤 벨포레 SER App 구축",
            tags: ["Java", "Spring", "iBatis", "Oracle", "JSP", "JavaScript", "jQuery"],
            description: "리조트 운영을 위한 Back-Office 시스템을 신규 개발하고, 기존 기능을 고도화하였습니다.",
            duration: "2022.08 ~ 2023.03",
            teamSize: "5",
            role: "Full Stack",
            tasks: ["Back-Office 신규 개발 및 기능 고도화", "웹 화면 개발 및 유지보수", "사용자 요청에 맞춘 신규 기능 개발 및 성능 향상"],
        },
        {
            id: 1,
            title: "시흥시 온라인 평생학습 플랫폼 구축",
            tags: ["Java", "Spring", "iBatis", "MySQL", "JSP", "JavaScript", "jQuery"],
            description: "시흥교육캠퍼스 쏙(SSOC) 플랫폼을 개발하였으며, 기존 경기도 평생학습포털(GSEEK) 소스를 활용하여 신규 기능을 추가하고 사용자 맞춤형 Back-Office 기능을 고도화하였습니다.",
            duration: "2022.01 ~ 2022.08",
            teamSize: "3",
            role: "Full Stack",
            tasks: ["시흥교육캠퍼스 쏙(SSOC) 플랫폼 개발", "기존 경기도 평생학습포털(GSEEK) 소스 코드 활용하여 신규 기능 개발 및 고도화", "사용자 화면 및 Back-Office 개발"],
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
                        <span className="section-eyebrow">SELECTED WORK</span>
                        <h2 className="section-title">Projects</h2>
                        <p className="section-subtitle">서비스 구축부터 운영 개선까지, 실무에서 해결한 작업을 정리했습니다.</p>
                    </div>

                    <div className="all-projects-section">
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <article key={project.id} className={`project-card ${isVisible ? 'animate' : ''}`}
                                     style={{animationDelay: `${index * 0.1}s`}}>
                                    <div className="card-header">
                                        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="project-period">{project.duration}</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="project-heading">
                                            <h3 className="project-title">{project.title}</h3>
                                            {project.role && <span className="project-role">{project.role}</span>}
                                        </div>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="project-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            type="button"
                                            onClick={() => handleProjectClick(project)}
                                            className="project-btn primary"
                                            aria-label={`${project.title} 자세히 보기`}
                                        >
                                            <span>프로젝트 자세히 보기</span>
                                            <span className="button-arrow" aria-hidden="true">↗</span>
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="cta-section">
                        <div className="cta-content">
                            <div className="cta-copy">
                                <span className="cta-label">MORE WORK</span>
                                <h3>더 많은 작업이 궁금하신가요?</h3>
                                <p>개인 프로젝트와 코드는 GitHub에서 확인하실 수 있습니다.</p>
                            </div>
                            <a href="https://github.com/hooni-8" target="_blank" rel="noreferrer" className="cta-btn">
                                <img src={githubLogo} alt=""/>
                                <span>GitHub 방문하기</span>
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <ProjectModal
                project={selectedProject}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
