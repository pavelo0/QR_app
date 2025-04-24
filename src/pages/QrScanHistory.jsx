import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../constants';

export function QrScanHistory() {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    console.log(data);
    return (
        <div className="flex flex-col justify-center max-w-[1350px] w-full mx-auto transition-all duration-500 px-4 pb-10">
            <h1 className="text-4xl font-semibold my-6">Your Scans:</h1>
            <ul className="w-full flex flex-col gap-4">
                {data.map((text) => {
                    return text.includes('http') ? (
                        <div className="flex w-full justify-between px-10 py-5 border-2 rounded-2xl items-center text-2xl ">
                            <li key={text}>
                                <a
                                    href="text"
                                    target="_blank"
                                    className="transition-all duration-300 text-blue-500 underline text-2xl hover:text-blue-700"
                                >
                                    {text}
                                </a>
                            </li>
                            <QRCodeSVG size={150} value={text} />
                        </div>
                    ) : (
                        <div
                            className="flex w-full justify-between px-10 py-5 border-2 rounded-2xl items-center text-2xl {text.trim().length < 1
                                        ? text-gray-500'
                                        : text-black}"
                        >
                            <li key={text}>
                                {text.trim().length === 0
                                    ? console.log(text.length)
                                    : console.log(text.length)}
                            </li>
                            <QRCodeSVG size={150} value={text} />
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}
