const RateCardFooter = () => {
    return (
        <footer className="py-12 mt-24 bg-[#21293a]">
            <div className="max-w-[1100px] mx-auto px-6 text-center text-sm text-zinc-400">
                <p className="font-medium text-white mb-2 tracking-wide uppercase text-xs">Nova Wealth Advisory</p>
                <p>&copy; {new Date().getFullYear()} Nova Wealth LLP. All rights reserved.</p>
                <p className="mt-1">Office 47, Park Court Ojijo Road, Parklands, Nairobi, Kenya</p>
                <div className="mt-6 flex justify-center gap-6 hidden md:flex">
                    <span className="text-[#b6975a] hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="text-[#b6975a] hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default RateCardFooter;
