"use client"

import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

type BeforeInstallPromptEvent = Event & {
    prompt: () => void;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

const PwaInstallPrompt = () => {
    const [isSupported, setIsSupported] = useState(false);
    const [isInstallable, setIsInstallable] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && 'serviceWorker' in navigator) {
            setIsSupported(true);

            const installEventListener = (event: Event) => {
                event.preventDefault();
                setDeferredPrompt(event as BeforeInstallPromptEvent);
                setIsInstallable(true);
            };

            window.addEventListener('beforeinstallprompt', installEventListener);

            return () => {
                window.removeEventListener('beforeinstallprompt', installEventListener);
            };
        }
    }, []);

    const handleInstall = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    Cookies.set('pwaInstalled', 'true', { expires: 365 });
                }
            });
        }
    };

    const hasAlreadyInstalled = typeof window !== "undefined" && Cookies.get('pwaInstalled') === 'true';

    return (
        <>
            {isSupported && !hasAlreadyInstalled && isInstallable && (
                <div className="fixed bottom-10 left-0 right-0 bg-white p-5 text-center shadow-md z-50">
                    <p className="text-gray-800 mb-3">Install our app for a better experience!</p>
                    <button
                        onClick={handleInstall}
                        className="px-5 py-2 bg-green-600 text-white border-none cursor-pointer text-lg rounded-md hover:bg-green-700 transition">
                        Install PWA
                    </button>
                </div>

            )}
        </>
    );
};

export default PwaInstallPrompt;
