'use client';
import { useState } from 'react';

export default function GetInTouch() {
    const [showToast, setShowToast] = useState(false);
    const email = 'office@softwaresuccess.com.au';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={handleCopy}
                className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-black text-white hover:bg-blue-800"
            >
                Get in touch
            </button>
            
            {/* Toast notification */}
            {showToast && (
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 bg-gray-800 text-white px-4 py-2 rounded-md text-sm">
                    office@softwaresuccess.com.au copied to clipboard!
                </div>
            )}
        </div>
    );
}