export function QrCodeGenerator({ value }) {
    return (
        <QRCodeSVG
            value={value}
            size={180}
            bgColor="#002e77"
            marginSize={1}
            fgColor="#fff"
        />
    );
}
