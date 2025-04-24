import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { SCAN_DATA } from '../constants';

export function QrCodeScannerPage() {
    const [value, setValue] = useState(null);

    const settings = {
        finder: false,
    };
    const onScanHandler = (results) => {
        console.log(results);
        if (results && results.length > 0) {
            const resValue = results[0].rawValue;
            setValue(resValue);

            const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
            localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, resValue]));
        }
    };

    return (
        <div className="flex flex-col-reverse justify-center items-center w-full h-calc([100vh - 80px]) transition-all duration-500 ">
            <h2 className="text-center text-4xl font-semibold mt-10">
                Output:{' '}
                {value ? (
                    value.includes('http') ? (
                        <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-900 underline hover:text-black transition-all text-xl wrap-break-word max-w-5"
                        >
                            {value}
                        </a>
                    ) : (
                        <span className="text-xl">{value}</span>
                    )
                ) : (
                    <span className="text-gray-800 text-sm">no data yet</span>
                )}
            </h2>
            <div className="w-[300px] transform scale-y-100 -scale-x-100 rounded-3xl overflow-hidden mt-10">
                <Scanner onScan={onScanHandler} components={settings} />
            </div>
        </div>
    );
}
