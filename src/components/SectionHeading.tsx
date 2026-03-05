interface SectionHeadingProps {
    label: string;
    title: string;
}

const SectionHeading = ({ label, title }: SectionHeadingProps) => {
    return (
        <div className="mb-10 flex flex-col items-start gap-2">
            <span className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600 uppercase tracking-widest ring-1 ring-inset ring-zinc-500/10">
                {label}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
        </div>
    );
};

export default SectionHeading;
