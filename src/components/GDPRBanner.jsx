import React from 'react'
import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false); // Show consent banner
  const [accepted, setAccepted] = useState(null); // true/false/null
  const [showIcon, setShowIcon] = useState(false); // Show cookie icon

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true); // show cookie icon if previously chosen
    } else {
      setVisible(true); // no previous choice
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    // Reopen consent banner
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-6 text-center md:right-6 md:left-auto max-w-full md:max-w-xs p-4 rounded-lg 
                         text-[#1e1c1a] shadow-lg z-50 
                      bg-[#3b2921] dark:text-[#e8e1da] transition-colors">
          <p className="text-sm mb-2 text-center text-[#ffffff]">
            We use cookies to improve your experience.{" "}
          </p>
          <p className="mb-3">
            <a
              href="/privacy-policy"
              className="underline text-[#f5c77c] hover:text-[#ffffff] transition"
            >
              See our Privacy Policy
            </a>

          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="bg-[#9d9287] text-[#ffffff] px-4 py-2 rounded text-sm hover:bg-[#867f76] transition"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="bg-[#f7f4f1] text-[#1e1c1a] px-4 py-2 rounded text-sm 
                         hover:bg-[#e8e1da] transition 
                         "
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon in Red Circle (smaller size) */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9d9287] shadow-lg border border-[#ffffff] 
                       flex items-center justify-center hover:scale-105 transition cursor-pointer
                       "
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg" // Use your cookie icon
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
}
