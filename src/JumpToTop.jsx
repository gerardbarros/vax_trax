import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
        onClick={scrollToTop}
        className="back-to-top"
        >
        Back to top
        </button>
        );
    };