import { useEffect, useState } from "react";
import { Progress, ProgressBar } from "styles/profile/profile.styled";

const ProgressBarComponent = ({ progress }: { progress: number; }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const newStyle = {
            opacity: 1,
            width: `${progress}%`,
        };

        if (progress < 25) {
            Object.assign(newStyle, {
                background: `red`
            });
        } else if (progress >= 25 && progress <= 60) {
            Object.assign(newStyle, {
                background: `linear-gradient(to right, red,  yellow)`
            });
        } else {
            Object.assign(newStyle, {
                background: `linear-gradient(to right, red, yellow, green)`
            });

        }
        setStyle(newStyle);
    }, [progress]);

    return (
        <ProgressBar>
            <Progress style={style} />
        </ProgressBar>
    );
};

export default ProgressBarComponent;