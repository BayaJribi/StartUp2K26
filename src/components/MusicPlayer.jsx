import React, { useState, useRef, useEffect } from "react";
import "../assets/css/MusicPlayer.css";
// Importing the audio file tells Vite to bundle it and give us the correct URL
import pirateMusic from "../assets/audio/pirate-theme.mp3";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const audioRef = useRef(null);
    const musicPath = pirateMusic; // Use the imported path

    // Let's use a dynamic import or assume the user will fix the path. 
    // Best practice for Vite assets: 
    // If it's in public, use "/audio/...". If in src/assets, import it.
    // I'll stick to a hardcoded import path line that the user can uncomment or fix.

    useEffect(() => {
        // Check if user already made a choice this session (optional)
        // For now, we always ask or show button. 
        // Actually, if we want to be less annoying, we could check localStorage.
        const consent = localStorage.getItem("musicConsent");
        if (consent === "true") {
            // We can't auto-play without interaction usually, so we might still need to show the button active
            // or just show the floating button and let them click.
            // But to ensure "Entry" feeling, the modal is nice.
            setShowModal(true);
        }
    }, []);

    const handlePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.play().then(() => {
                setIsPlaying(true);
                setShowModal(false);
                localStorage.setItem("musicConsent", "true");
            }).catch(error => {
                console.log("Playback failed:", error);
            });
        }
    };

    const handlePause = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const handleSkip = () => {
        setShowModal(false);
        localStorage.setItem("musicConsent", "false");
    };

    const togglePlay = () => {
        if (isPlaying) {
            handlePause();
        } else {
            const audio = audioRef.current;
            if (audio) {
                audio.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <>
            {/* Hidden Audio Element */}
            {/* Using a relative path that likely points to public folder for easiest setup */}
            <audio ref={audioRef} src={musicPath} loop />

            {/* Permission Modal */}
            {showModal && (
                <div className="music-modal-overlay">
                    <div className="music-modal">
                        <h3 className="music-modal__title">Welcome Aboard!</h3>
                        <p className="music-modal__text">Shall we hoist the sails with some sea shanties?</p>
                        <div className="music-modal__buttons">
                            <button onClick={handlePlay} className="music-btn music-btn--primary">
                                Aye! (Enable Sound)
                            </button>
                            <button onClick={handleSkip} className="music-btn music-btn--secondary">
                                Nay (Silence)
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Control Button */}
            {!showModal && (
                <div className="music-control" onClick={togglePlay}>
                    <div className={`music-icon ${isPlaying ? "playing" : ""}`}>
                        {isPlaying ? (
                            <i className="ri-volume-up-line"></i>
                        ) : (
                            <i className="ri-volume-mute-line"></i>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default MusicPlayer;
