import { useCallback, useEffect, useRef, useState } from 'react';

import { TextTitle } from '../../../../shared/assets/components/ui';

interface SliderDataProps {
    image: string;
    label: string;
    title: string;
}

interface SliderProps {
    images: SliderDataProps[];
}

const AUTO_PLAY_INTERVAL = 3500;

const Slider = ({ images }: SliderProps) => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const goTo = (idx: number) => setCurrent(idx);
    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(next, AUTO_PLAY_INTERVAL);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current, next]);

    return (
        <div className="relative flex h-185 w-full items-center justify-center overflow-hidden">
            {images.map((slide, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
                >
                    <img
                        src={slide.image}
                        alt={slide.label}
                        className="h-full w-full object-cover"
                        draggable={false}
                    />
                    {/* Overlay escurecendo toda a imagem */}
                    <div className="absolute inset-0 bg-black/40" />
                    {/* Texto central */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                        <span className="bg-brand-blue mb-3 inline-block rounded px-3 py-1 text-xs font-semibold tracking-widest text-white uppercase shadow-lg">
                            {slide.label}
                        </span>
                        <TextTitle
                            size="h4"
                            color="secondary"
                            className="font-normal"
                        >
                            {slide.title}
                        </TextTitle>
                    </div>
                    {/* Máscara escura no rodapé */}
                    <div className="from-brand-black/10 to-brand-black pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-b" />
                </div>
            ))}
            {/* Paginação em traços */}
            <div className="absolute bottom-6 left-0 z-20 flex w-full justify-center gap-3">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`h-1.5 rounded transition-all duration-300 ${current === idx ? 'bg-brand-white/90 w-8' : 'w-4 bg-white/40'}`}
                        aria-label={`Ir para slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
