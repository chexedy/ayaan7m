import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Slide.css";

type SlideProps = {
    title: string;
    src: string;
    alt: string;
    description: string;
    link: string;
    frameworks: Array<String>;
};

const Slide: React.FC<SlideProps> = ({ title, src, alt, description, link, frameworks }) => {
    const [flipped, setFlipped] = useState<boolean>(false);

    return (
        <div className="slide-wrapper">
            <div className={`flip-card ${flipped ? "flipped" : ""}`}>
                <div className="flip-inner">

                    <div className="flip-front">
                        <h2>{title}</h2>
                        <img src={src} alt={alt} />

                        <div className="slide-card-buttons">
                            <a href={link} target="_blank">
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

                        <ul className="frameworks-used">
                            {frameworks.map((item, index) => (
                                <li key={index} className="framework-item">{item}</li>
                            ))}
                        </ul>

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