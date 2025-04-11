import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

export function QrCodeScanner() {
    const [value, setValue] = useState(null);

    const settings = {
        finder: false,
    };
    const onScanHandler = (results) => {
        if (results && results.length > 0) {
            const resValue = results[0].rawValue;
            setValue(resValue);
            console.log('Scan results:', results);
            console.log('First result:', results[0]);
        }
    };

    return (
        <div className="flex flex-col items-center w-[250px]">
            <h2 className="text-center text-2xl my-2">
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
            <Scanner onScan={onScanHandler} components={settings} />
        </div>
    );
}
