import type React from 'react';
import { st, classes } from './header.st.css';

export interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={st(classes.root, className)}>
            <h1>Hello Stylable!</h1>
        </header>
    );
};
