import Service from './services/Service';

export default function Services() {
    return (
        <section className="py-20">
            <div className="container">
                <h3 className="mb-10 text-l-text dark:text-d-text font-medium">
                    Services We Offer
                </h3>

                <div className="services">
                    <h2 className="services-title">
                        We offer a variety of services to help you to grow and build your
                        brand and help you with developing your Products
                    </h2>
                    <Service
                        title="UI/UX Design, Web Design"
                        desc="Makeing your product clean and easy to use it the important thing for us"
                    />
                    <Service
                        title="Web/App Development"
                        desc="Our Team will use the top  technologies to develope your product"
                    />
                    <Service
                        title="Marketing Digital, Social Media"
                        desc="Grow your communty with our inbound marketing and social media merketing"
                    />
                    <Service
                        title="Brand Strategy &#38; Art Direction"
                        desc="We will help you to create an unique brand that customer will remember for a long time"
                    />
                    <Service
                        title="Visual Identity Logo Brand"
                        desc="A logo can make a big difference and our team will gladly help you creating it"
                    />
                    <Service
                        title="Video/Ads Production"
                        desc="What better way to reach user then with a good video to win their trust"
                    />
                </div>
            </div>
        </section>
    );
}
