import React, { useEffect } from 'react';
import '@styles/layout/modal/Section_3_modal.scss'

export default function Section_3_modal({ project, isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // ESC 키로 모달 닫기
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    // 배경 클릭 시 모달 닫기
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-container">
                {/* 모달 헤더 */}
                <div className="modal-header">
                    <div className="project-icon">{project.image}</div>
                    <div className="project-info">
                        <h2 className="project-title">{project.title}</h2>
                    </div>
                    <button className="close-btn" onClick={onClose} aria-label="모달 닫기">
                        ✕
                    </button>
                </div>

                {/* 모달 바디 */}
                <div className="modal-body">

                    {/* 프로젝트 상세 정보 */}
                    <div className="project-details">
                        <div className="detail-section">
                            <h3>📝 프로젝트 소개</h3>
                            <p>{project.description}</p>
                        </div>

                        {project.role &&
                            <div className="detail-section">
                                <h3>👤 역할</h3>
                                <p>{project.role}</p>
                            </div>
                        }

                        <div className="detail-section">
                            <h3>🔧 사용 기술</h3>
                            <div className="tech-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tech-tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="detail-section">
                            <h3>💼 주요 업무</h3>
                            <ul className="feature-list">
                                {project.tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                            {project.subProjects &&
                                <div className="sub-projects">
                                    {project.subProjects.map((subProject, index) => (
                                        <div key={index} className="sub-project">
                                            <h4 className="sub-project-title">
                                                {index + 1}. {subProject.name}
                                            </h4>
                                            {subProject.tasks && (
                                                <ul className="sub-project-tasks">
                                                    {subProject.tasks.map((task, taskIndex) => (
                                                        <li key={taskIndex}>{task}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>

                        <div className="detail-section">
                            <h3>📅 개발 기간</h3>
                            <div className="period-info">
                                <div className="period-item">
                                    <span className="period-label">개발 기간:</span>
                                    <span
                                        className="period-value">{project.duration}</span>
                                </div>
                                {project.teamSize && (
                                    <div className="period-item">
                                        <span className="period-label">팀 구성:</span>
                                        <span className="period-value">{project.teamSize}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 모달 푸터 */}
                <div className="modal-footer">
                    <button className="close-footer-btn" onClick={onClose}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};