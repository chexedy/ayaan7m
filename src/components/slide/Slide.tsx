import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Slide.css";

const Slide: React.FC = (title: string, src: string, alt: string, description: string) => {
    const [flipped, setFlipped] = useState<boolean>(false);

    return (
        <div className="slide-wrapper">
            <div className={`flip-card ${flipped ? "flipped" : ""}`}>
                <div className="flip-inner">

                    <div className="flip-front">
                        <h2>{title}</h2>
                        <img src={src} alt={alt} />

                        <div className="slide-card-buttons">
                            <a href="https://transit.chexedy.com" target="_blank" rel="noopener noreferrer">
                                View project &nbsp; <FaArrowRight />
                            </a>

                            <button
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => setFlipped(true)}
                            >
                                Learn more
                            </button>
                        </div>
                    </div>

                    <div className="flip-back">
                        <h2>More Info</h2>
                        <p>{description}</p>

                        <button
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => setFlipped(false)}
                        >
                            Go back
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Slide;