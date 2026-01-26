import React, { useState } from "react";

function word({ word, link }) {
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        console.log(`Navigate to ${link}`);
    };

    return (
        <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}
            style={{
                cursor: "pointer",
                padding: "0.5rem 1rem",
                borderBottom: hover ? "2px solid #6B0D0D" : "2px solid transparent",
                transition: "all 0.3s ease",
                backgroundColor: hover ? "#6B0D0D22" : "transparent",
                borderRadius: "4px",
            }}
        >
      {word}
    </span>
    );
}

export default word;
