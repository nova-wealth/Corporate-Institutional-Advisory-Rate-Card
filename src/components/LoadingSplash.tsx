import { useState, useEffect } from 'react';
import logo from '@/assets/images/Logo for Nova Wealth - Wordmark Style.svg';

const LoadingSplash = ({ onComplete }: { onComplete: () => void }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Show the splash for 2 seconds, then start fade out
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2000);

        // After fade animation completes (0.6s), call onComplete
        const removeTimer = setTimeout(() => {
            onComplete();
        }, 2600);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#21293a] transition-opacity duration-[600ms] ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Logo with pulse animation */}
            <img
                src={logo}
                alt="Nova Wealth"
                className="h-44 md:h-60 w-auto object-contain animate-pulse"
            />

            {/* Loading bar */}
            <div className="mt-10 w-48 h-1 bg-zinc-700 rounded-full overflow-hidden">
                <div className="h-full bg-[#d4a843] rounded-full animate-loading-bar" />
            </div>

            <p className="mt-4 text-zinc-500 text-xs tracking-widest uppercase">Loading</p>
        </div>
    );
};

export default LoadingSplash;
