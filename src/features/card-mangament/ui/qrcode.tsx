import QRCode from "react-qr-code";
export function QRCodeCard({ userId }: { userId: string }) {
  const url = process.env.NEXT_PUBLIC_BASE_URL!;
  return (
    <div className="bg-white p-2 flex justify-center items-center rounded-lg">
      <QRCode value={`${url}/user-card/${userId}`} size={100} level="H" />
    </div>
  );
}
