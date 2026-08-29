import React, { useEffect, useRef } from 'react';
import '@styles/layout/modal/Section_3_modal.scss'

export default function ProjectModal({ project, isOpen, onClose }) {
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return undefined;

        const previouslyFocusedElement = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
                return;
            }

            if (e.key !== 'Tab' || !modalRef.current) return;

            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
            previouslyFocusedElement?.focus();
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    // 배경 클릭 시 모달 닫기
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const titleId = `project-modal-title-${project.id}`;

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div
                ref={modalRef}
                className="modal-container"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
            >
                <div className="modal-header">
                    <div className="project-info">
                        <span className="modal-eyebrow">PROJECT DETAIL</span>
                        <h2 id={titleId} className="project-title">{project.title}</h2>
                        <div className="modal-meta">
                            <span>{project.duration}</span>
                            {project.role && <span>{project.role}</span>}
                            {project.teamSize && <span>{project.teamSize}명 참여</span>}
                        </div>
                    </div>
                    <button ref={closeButtonRef} className="close-btn" onClick={onClose} aria-label="모달 닫기">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>

                <div className="modal-body">
                    <div className="project-details">
                        <div className="detail-section">
                            <span className="detail-index">01</span>
                            <h3>프로젝트 소개</h3>
                            <p>{project.description}</p>
                        </div>

                        <div className="detail-section">
                            <span className="detail-index">02</span>
                            <h3>사용 기술</h3>
                            <div className="tech-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tech-tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="detail-section">
                            <span className="detail-index">03</span>
                            <h3>주요 업무 및 기여</h3>
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

                    </div>
                </div>

                <div className="modal-footer">
                    <button className="close-footer-btn" onClick={onClose}>
                        프로젝트 목록으로 돌아가기
                    </button>
                </div>
            </div>
        </div>
    );
};
