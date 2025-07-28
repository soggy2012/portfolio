export default function HeroSection() {
    return (
        <section className="relative min-h-screen  items-center justify-center text-center overflow-hidden">
            <div className="relative slide-up z-10 flex flex-col gap-2 pt-16" style={{ animationDelay: "0.8s" }}>
                <p>Aspiring Developer.</p>
                <p>Currently looking for work.</p>
            </div>
            <div className="absolute inset-0 flex justify-center z-0">
                <img 
                    src="/assets/Statue-wallpaper.png" 
                    alt="Greek Statue" 
                    className="brightness-60 object-cover slide-up sm:w-3/4 md:w-1/2 lg:w-1/4" style={{ animationDelay: "0.8s" }}
                />
            </div>
            <div className="absolute bottom-0 h-48 w-full bg-gradient-to-b from-transparent to-zinc-950"></div>
        </section>
    )
}