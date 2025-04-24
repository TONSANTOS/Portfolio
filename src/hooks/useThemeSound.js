import { useEffect, useState } from 'react';

import soundFile from '../assets/sound/light-switch-flip-272436.mp3'; 

export function useThemeSound(volume = 0.2) {
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        const audioObj = new Audio(soundFile);

        audioObj.volume = volume;
        
        setAudio(audioObj);

        return () => {
            if (audioObj) {
                audioObj.pause();
            }
        };
    }, [volume]);

    const play = () => {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.error("Erro ao reproduzir som:", e));
        }
    };

    return play;
}