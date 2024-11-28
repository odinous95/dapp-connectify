import Link from "next/link";
import QRCode from "react-qr-code";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-gray-100 to-blue-200 text-gray-900 dark:from-gray-800 dark:to-blue-900 dark:text-white">
      <div className="text-center space-y-6 max-w-3xl">
        {/* Welcome Header */}
        <h1 className="text-4xl font-bold md:text-5xl">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-400">Connectify!</span>
        </h1>

        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Scan the QR code to try it out!
          </h2>
          <div className="bg-white p-4 flex justify-center items-center rounded-lg shadow-lg dark:bg-gray-200">
            <QRCode
              value={`https://chat-app-websocket-rust.vercel.app/sign-up`}
              size={300}
              level="H"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <Link
            href={"/sign-up"}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md font-medium text-lg hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
