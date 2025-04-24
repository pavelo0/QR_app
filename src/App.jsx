import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { NavMenu } from './components/NavMenu';
import { QrCodeGeneratorPage } from './pages/QrCodeGeneratorPage';
import { QrCodeScannerPage } from './pages/QrCodeScannerPage';
import { QrGenerateHistoryPage } from './pages/QrGenerateHistory';
import { QrScanHistory } from './pages/QrScanHistory';
import WelcomePage from './pages/WelcomePage';

export default function App() {
    return (
        <>
            <header className="w-full h-20 border flex items-center px-4 transition-all duration-500">
                <div className="max-w-[1350px] w-full mx-auto flex justify-between items-center relative">
                    <div className="absolute left-0">
                        <Link to="/Mono_QR/Welcome" className="text-4xl font-bold">
                            <span className="bg-black px-2 py-1 text-white rounded-2xl font-semibold">
                                Mono
                            </span>{' '}
                            QR
                        </Link>
                    </div>
                    <NavMenu />
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Navigate to="/Mono_QR/Welcome" />} />
                <Route path="/Mono_QR/Welcome" element={<WelcomePage />} />
                <Route path="/Mono_QR/Generate_QR" element={<QrCodeGeneratorPage />} />
                <Route path="/Mono_QR/Scan_QR" element={<QrCodeScannerPage />} />
                <Route
                    path="/Mono_QR/Generate_History"
                    element={<QrGenerateHistoryPage />}
                />
                <Route path="/Mono_QR/Scan_History" element={<QrScanHistory />} />
            </Routes>
        </>
    );
}
