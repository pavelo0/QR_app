import { QRCodeSVG } from 'qrcode.react';
import { useRef, useState } from 'react';

export function QrCodeGenerator({ isVisible }) {
    const inputRef = useRef(null);
    const [value, setValue] = useState('Hello!');

    function generateClickHandler() {
        const inputRefValue = inputRef.current.value;
        setValue(inputRefValue);
    }

    return (
        <div className="{isVisible ? block : none} flex flex-col items-center mt-10">
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your link/message..."
                className="bg-white px-1.5 py-2 text-black rounded-2xl min-w-[300px] outline-none mb-2.5 pl-3.5"
            />
            <QRCodeSVG
                value={value}
                size={180}
                bgColor="#002e77"
                marginSize={1}
                fgColor="#fff"
            />
            <button
                onClick={generateClickHandler}
                className="cursor-pointer bg-w-400 bg-blue-900 py-2 w-[200px] rounded-2xl hover:bg-blue-950 transition-all duration-300 mt-4.5"
            >
                Generate
            </button>
        </div>
    );
}
