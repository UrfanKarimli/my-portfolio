"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";

type BeforeInstallPromptEvent = Event & {
    prompt: () => void;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const PwaInstallPrompt = () => {
    const [isSupported, setIsSupported] = useState(false);
    const [isInstallable, setIsInstallable] = useState(false);
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null);
    const [showPopup, setShowPopup] = useState(true); // Popup-ın göstərilib göstərilmədiyini idarə edir
    const t = useTranslations("header");

    useEffect(() => {
        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
            setIsSupported(true);
            const installEventListener = (event: Event) => {
                event.preventDefault();
                setDeferredPrompt(event as BeforeInstallPromptEvent);
                setIsInstallable(true);
            };
            window.addEventListener("beforeinstallprompt", installEventListener);
            return () => {
                window.removeEventListener("beforeinstallprompt", installEventListener);
            };
        }
    }, []);

    const handleInstall = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    Cookies.set("pwaInstalled", "true", { expires: 365 });
                }
            });
            setShowPopup(false); // Quraşdırma düyməsinə basıldıqda popup bağlanır
        }
    };

    const handleCancel = () => {
        setShowPopup(false); // Cancel düyməsinə basıldıqda popup gizlənir
    };

    const hasAlreadyInstalled =
        typeof window !== "undefined" && Cookies.get("pwaInstalled") === "true";

    return (
        <>

            {isSupported && !hasAlreadyInstalled && isInstallable && showPopup && (
                <div className="fixed no-shadow top-16 right-5 ur:right-9  bg-white py-2 px-5 text-center shadow-md z-50 rounded-md">
                    <p className="text-myBlack mb-2 text-xs ur:text-base w-full">
                        {t("popupparagraph")}
                    </p>
                    <div className="flex items-center justify-between w-full ">
                        <button
                            onClick={handleCancel}
                        >
                            <FaPlus className={"text-sm ur:text-xl  text-red-600  rotate-[-45deg]"} />
                        </button>
                        <button
                            onClick={handleInstall}
                            className="text-xs ur:text-base border border-myBlack bg-myBlack hover:bg-white hover:text-myBlack py-[2px] px-2 text-white font-medium rounded-md"
                        >
                            {t("popupbutton")}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PwaInstallPrompt;
