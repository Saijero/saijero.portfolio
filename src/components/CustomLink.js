import React from "react";
import { Link as RouterLink } from "react-router-dom";

export function CustomLink({ onClick, to, children, className, onKeyDown, target, href }) {

    const handleMouseEnter = () => {
        const htmlElement = document.querySelector('.wp-child-wrap');
        if (htmlElement) {
            htmlElement.classList.replace('default-cursor', 'new-cursor');
        }
    };

    const handleMouseLeave = () => {
        const htmlElement = document.querySelector('.wp-child-wrap');
        if (htmlElement) {
            htmlElement.classList.replace('new-cursor', 'default-cursor');
        }
    };


    return (
        <React.Fragment>
            <RouterLink
                className={className}
                onClick={onClick}
                to={to}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onKeyDown={onKeyDown}
                target={target}
                href={href}
            >
                {children}
            </RouterLink>
        </React.Fragment>
    );
}
