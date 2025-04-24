export default function WelcomePage() {
    return (
        <section className="transition-all duration-500 w-full h-calc([100vh - 80px]) flex items-center px-4 min-h-[100vh]">
            <div className="max-w-[1350px] w-full mx-auto flex justify-between items-center relative">
                <div className="flex w-full justify-center flex-col text-center mt-[-180px]">
                    <h1 className="text-4xl font-semibold">Welcome to the Mono QR</h1>
                    <p>Generate, scan, enjoy</p>
                </div>
            </div>
        </section>
    );
}
