import Image from 'next/image';

function TeamMember({ name, position, src, ...aos }) {
    return (
        <div {...aos}>
            <div className="relative w-50 h-60 rounded-md shadow-md overflow-hidden">
                <Image
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    alt={`Team member: ${name}`}
                />
            </div>

            <h4 className="mt-2 font-bold">{name}</h4>

            <h6 className="text-sm text-l-text dark:text-d-text">{position}</h6>
        </div>
    );
}

export default function Team() {
    return (
        <section className="py-10">
            <div className="container">
                <div className="grid grid-cols-1 gap-10">
                    <div className="space-y-4">
                        <h6 className="font-bold text-primary">The Team</h6>

                        <h2 className="max-w-md">
                            Meet The Awesome and Creative members of Our Team
                        </h2>
                    </div>

                    {/* Team */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
                        <TeamMember
                            name="Jamila Smail"
                            position="CO-Founder"
                            src="/images/about-page-team/01.png"
                            data-aos="fade-in"
                            data-aos-delay="300"
                        />
                        <TeamMember
                            name="Farouk Dari"
                            position="Full Stack Developer"
                            src="/images/about-page-team/02.png"
                            data-aos="fade-in"
                            data-aos-delay="400"
                        />
                        <TeamMember
                            name="Aksel Juba"
                            position="Graphic Designer"
                            src="/images/about-page-team/03.png"
                            data-aos="fade-in"
                            data-aos-delay="500"
                        />
                        <TeamMember
                            name="Dihia Numida"
                            position="UI/UX Designer"
                            src="/images/about-page-team/04.png"
                            data-aos="fade-in"
                            data-aos-delay="600"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
