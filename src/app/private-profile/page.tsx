// app/protected/page.tsx
import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
    const session = await auth();

    if (!session || !session.address) {
        redirect('/');
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Protected private public Page</h1>
            <p>Welcome, Ethereum address: <strong>{session.address}</strong></p>
        </div>
    );
}
