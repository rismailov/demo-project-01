import { HiMinus, HiPlus } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { faqData } from './../../data/index';

export default function Faq() {
    const [faqItems, setFaqItems] = useState(faqData);
    const [activeIndex, setActiveIndex] = useState(0);

    function setActive(id) {
        setFaqItems((prevItems) => {
            return prevItems.map((item) =>
                item.id === id ? { ...item, isActive: !item.isActive } : item,
            );
        });
    }

    return (
        <section className="py-20">
            <div className="container">
                <div className="flex justify-between">
                    <div className="max-w-md mx-auto">
                        <h5 className="text-primary font-bold text-center">F. A. Q.</h5>

                        <h2 className="my-3 text-center">
                            Here are some answers for the most frequently asked questions
                        </h2>

                        <div className="mx-auto mt-10 w-full space-y-2">
                            {faqItems.map((item, idx) => (
                                <FaqItem
                                    key={idx}
                                    {...item}
                                    setActive={() => setActive(idx)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FaqItem({ q, a, isActive, setActive }) {
    return (
        <div className={`faq-item ${isActive ? 'active' : ''}`}>
            <div className="faq-item__question" onClick={setActive} role="button">
                {q}

                {isActive ? (
                    <HiMinus className="ml-3 w-5 h-5 text-l-text dark:text-d-text" />
                ) : (
                    <HiPlus className="ml-3 w-5 h-5 text-l-text dark:text-d-text" />
                )}
            </div>

            <div className="faq-item__answer">
                <div className="faq-item__answer--inner">{a}</div>
            </div>
        </div>
    );
}
