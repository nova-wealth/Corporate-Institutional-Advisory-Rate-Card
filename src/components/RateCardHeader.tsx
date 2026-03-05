import logo from '@/assets/images/Logo for Nova Wealth - Wordmark Style.svg';

const RateCardHeader = () => {
    return (
        <header className="py-6 bg-[#21293a] text-white">
            <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row gap-4 justify-between items-center">
                <img src={logo} alt="Nova Wealth" className="h-[6rem] md:h-[8rem] w-auto object-contain" />
                <button
                    onClick={() => window.print()}
                    className="bg-[#b6975a] hover:bg-[#a6864a] text-zinc-900 text-sm font-semibold py-2.5 px-6 rounded transition-colors whitespace-nowrap shadow-sm"
                >
                    Download PDF
                </button>
            </div>
        </header>
    );
};

export default RateCardHeader;
