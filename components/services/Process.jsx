import Arrow from '../sprites/Arrow';

function ProcessItem({ number, title, text }) {
    return (
        <div style={{ maxWidth: '15rem' }}>
            <h3 className="flex items-center">
                <div className="mr-2 font-bold text-primary">{number}</div> {title}
            </h3>

            <p className="mt-3">{text}</p>
        </div>
    );
}

export default function Process() {
    return (
        <section className="pt-10 pb-10 lg:pb-30">
            <div className="container">
                <div className="max-w-lg">
                    <h4 className="font-bold text-primary">Our Process</h4>

                    <h2 className="mt-3 mb-5">
                        Our Working Process help you to get the best from our team skill
                    </h2>

                    <p>
                        With Our team knowloadg of different process We Choose the perfect
                        process to suit the Development of your Product
                    </p>
                </div>

                <div className="mt-14 lg:mt-30 relative grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <ProcessItem
                        number="01"
                        title="User Research"
                        text="User research helps us find out exactly how our target customers feel when interacting with a product"
                    />

                    <ProcessItem
                        number="02"
                        title="Design"
                        text="Design helps us find out exactly how our target customers feel when interacting with a product "
                    />

                    <ProcessItem
                        number="03"
                        title="Test"
                        text="Test helps us find out exactly how our target customers feel when interacting with a product"
                    />

                    <ProcessItem
                        number="04"
                        title="Implementation"
                        text="Implementation helps us find out exactly how our target customers feel when interacting with a product"
                    />

                    <Arrow className="process-arrow process-arrow__one" />
                    <Arrow className="process-arrow process-arrow__two" />
                    <Arrow className="process-arrow process-arrow__three" />
                </div>
            </div>
        </section>
    );
}
