const AnimateHero = () => {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
            <div className="relative h-full w-full">
                {/* Esfera 1 */}
                <div className="animate-ripple bg-brand-gradient-animate size-75 rounded-full blur-sm" />

                {/* Esfera 2 */}
                <div className="animate-ripple bg-brand-gradient-animate size-125 rounded-full blur-md [animation-delay:2s]" />

                {/* Esfera 3 */}
                <div className="animate-ripple bg-brand-gradient-animate size-175 rounded-full blur-lg [animation-delay:4s]" />
            </div>
        </div>
    );
};

export default AnimateHero;
