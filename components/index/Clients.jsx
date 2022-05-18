import ClientLogos from '../sprites/index/ClientLogos';

export default function Clients() {
    return (
        <section className="py-10 bg-gradient-to-b from-transparent to-gray-100 dark:to-[#31363f]">
            <div className="container">
                <div className="flex flex-col">
                    <h3>Clients We Helped</h3>

                    <div className="mt-10 grid grid-cols-1 place-items-center gap-8 xs:grid-cols-2 sm:flex sm:items-center sm:justify-between">
                        {ClientLogos.map((Logo, i) => (
                            <div key={i} className="flex items-center justify-center">
                                <div
                                    data-aos="fade"
                                    data-aos-duration="750"
                                    data-aos-delay={i * 100}
                                >
                                    <Logo />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
