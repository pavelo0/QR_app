import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../constants';

export function QrGenerateHistoryPage() {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className="flex flex-col justify-center max-w-[1350px] w-full mx-auto transition-all duration-500 px-4 pb-10">
            <h1 className="text-4xl font-semibold my-6">Your Generates:</h1>
            <ul className="w-full flex flex-col gap-4">
                {data.map((text, index) => {
                    const key = `${text}-${index}`;
                    const isEmpty = text.trim() === '';

                    return (
                        <div
                            key={key}
                            className="flex w-full justify-between px-10 py-5 border-2 rounded-2xl items-center text-2xl"
                        >
                            <li className="list-none">
                                {isEmpty ? (
                                    <span className="text-gray-400 italic">
                                        *You entered an empty
                                    </span>
                                ) : text.includes('http') ? (
                                    <a
                                        href={text}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-all duration-300 text-blue-500 underline text-2xl hover:text-blue-700"
                                    >
                                        {text}
                                    </a>
                                ) : (
                                    text
                                )}
                            </li>
                            <QRCodeSVG size={150} value={text} />
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}
