import React from 'react';

interface RateCardTableProps {
    headers: string[];
    rows: (string | React.ReactNode)[][];
}

const RateCardTable = ({ headers, rows }: RateCardTableProps) => {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
            <div className="overflow-x-auto max-h-[600px]">
                <table className="w-full text-sm text-left align-middle border-collapse">
                    <thead className="bg-[#21293a] text-white sticky top-0 z-10 shadow-sm">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="px-6 py-4 font-semibold whitespace-nowrap border-b border-[#1a202d]">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200">
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-zinc-50/80 transition-colors group">
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className={`px-6 py-4 ${cellIndex === 0 ? 'font-medium text-zinc-900 bg-white group-hover:bg-zinc-50/80' : 'text-zinc-600'} whitespace-nowrap md:whitespace-normal leading-relaxed align-top`}>
                                        {typeof cell === 'string' && cell.includes('✔') ? (
                                            <div className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-[#b6975a] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                <span>{cell.replace('✔', '').trim()}</span>
                                            </div>
                                        ) : typeof cell === 'string' && cell.includes('\n') ? (
                                            cell.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    {i < cell.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))
                                        ) : (
                                            cell
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RateCardTable;
