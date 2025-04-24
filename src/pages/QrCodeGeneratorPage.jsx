import { QRCodeSVG } from 'qrcode.react';
import { useRef, useState } from 'react';
import { GENERATE_DATA } from '../constants';

export function QrCodeGeneratorPage() {
    const inputRef = useRef(null);
    const [value, setValue] = useState('Hello!');

    function generateClickHandler() {
        const inputRefValue = inputRef.current.value;
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, inputRefValue]));
        setValue(inputRefValue);
    }

    return (
        <div className="{isVisible ? block : none} w-full h-calc([100vh - 80px]) flex flex-col items-center justify-center mt-10">
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your link/message..."
                className="bg-white px-1.5 py-2 text-black rounded-2xl min-w-[300px] outline-none mb-2.5 pl-3.5"
            />
            <QRCodeSVG
                value={value}
                size={250}
                bgColor="#000"
                marginSize={1}
                fgColor="#fff"
            />
            <button
                onClick={generateClickHandler}
                className="cursor-pointer bg-w-400 bg-black font-semibold text-white py-2 w-[200px] rounded-2xl hover:bg-white hover:text-black transition-all duration-300 mt-7"
            >
                Generate
            </button>
        </div>
    );
}
