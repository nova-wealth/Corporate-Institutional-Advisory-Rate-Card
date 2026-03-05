import { useState } from 'react';
import logo from '@/assets/images/Logo for Nova Wealth - Wordmark Style.svg';

const RateCardHeader = () => {
    const [isPreparing, setIsPreparing] = useState(false);

    const handleDownloadPDF = () => {
        setIsPreparing(true);

        // Show the branded loading screen briefly, then open print
        setTimeout(() => {
            setIsPreparing(false);
            window.print();
        }, 2000);
    };

    return (
        <>
            {/* PDF Preparation Overlay */}
            {isPreparing && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#21293a]">
                    <img
                        src={logo}
                        alt="Nova Wealth"
                        className="h-44 md:h-60 w-auto object-contain animate-pulse"
                    />
                    <div className="mt-10 w-48 h-1 bg-zinc-700 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4a843] rounded-full animate-loading-bar" />
                    </div>
                    <p className="mt-4 text-zinc-500 text-xs tracking-widest uppercase">
                        Preparing your PDF...
                    </p>
                </div>
            )}

            <header className="py-6 bg-[#21293a] text-white">
                <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <img src={logo} alt="Nova Wealth" className="h-[6rem] md:h-[8rem] w-auto object-contain" />
                    <button
                        onClick={handleDownloadPDF}
                        className="bg-[#d4a843] hover:bg-[#c49a35] text-zinc-900 text-sm font-semibold py-2.5 px-6 rounded transition-colors whitespace-nowrap shadow-md"
                    >
                        Download PDF
                    </button>
                </div>
            </header>
        </>
    );
};

export default RateCardHeader;
