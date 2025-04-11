import { useRef, useState } from 'react';
import { QrCodeGenerator } from './components/QrCodeGenerator';
import { QrCodeScanner } from './components/QrCodeScanner';

export default function App() {
    const qrValueRef = useRef(null);
    const [qrValue, setQrValue] = useState(null);
    const [isActive, setIsActive] = useState(false);

    const activeHandleClick = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <>
            <div className="flex flex-col items-center min-w-[550px] min-h-[500px] bg-blue-600 text-white font-semibold p-8 rounded-3xl">
                <h1 className="text-4xl mb-8">QR Code Generator & Scanner</h1>

                <div className="flex w-full gap-7 ">
                    <button
                        onClick={activeHandleClick}
                        className="cursor-pointer bg-w-400 bg-blue-900 py-3 w-full flex-1/2 rounded-2xl hover:bg-blue-950 transition-all duration-300"
                    >
                        <h2>Scan QR</h2>
                    </button>

                    <button
                        onClick={activeHandleClick}
                        className="cursor-pointer bg-blue-900 py-3 w-full flex-1/2 rounded-2xl hover:bg-blue-950 transition-all duration-300"
                    >
                        <h2>Generate QR</h2>
                    </button>
                </div>

                {isActive ? <QrCodeGenerator /> : <QrCodeScanner />}
            </div>
        </>
    );
}
