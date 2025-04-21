import { useEffect, useState } from 'react';

export function useThemeSound(volume = 0.2) {
    const [audio] = useState(() => new Audio('/public/sound/light-switch-flip-272436.mp3'));

    useEffect(() => {
        audio.volume = volume;

        return () => {
            audio.pause();
        };
    }, [audio, volume]);

    const play = () => {
        audio.currentTime = 0;
        audio.play();
    };

    return play;
}