import React, { useState, useRef } from 'react';

const DemoSection = () => {
    const [isRecording, setIsRecording] = useState(false);
    const audioRef = useRef(null);

    const handleAudioClick = () => {
        if (!audioRef.current) {
            // Create audio element if it doesn't exist
            audioRef.current = new Audio('/RE00c3d20c5b5ba47abfef842f4a539e95.mp3');

            // Add event listener for when audio ends
            audioRef.current.addEventListener('ended', () => {
                setIsRecording(false);
            });
        }

        if (isRecording) {
            // Stop the audio
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsRecording(false);
        } else {
            // Play the audio
            audioRef.current.play();
            setIsRecording(true);
        }
    };

    return (
        <section id="demo" className="demo-section">
            <div className="container demo-content">
                <div className="demo-text">
                    <h2 className="section-title">
                        Hear <span className="gradient-text">Flowrep</span> in Action
                    </h2>
                    <p className="demo-description">
                        Experience the future of customer service. Call our demo number to chat with our AI receptionist right now.
                    </p>
                    <div className="demo-call-box glass-panel">
                        <div className="phone-icon">📞</div>
                        <div className="phone-number">(517) 628-4976</div>
                        <p className="call-cta">Call now for a live demo</p>
                    </div>
                    <div className="or-divider">or</div>
                    <button className="btn-primary play-audio-btn" onClick={handleAudioClick}>
                        {isRecording ? '⏺ Recording' : '▶ Play Demo Audio'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
