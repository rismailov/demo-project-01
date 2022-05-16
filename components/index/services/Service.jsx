import { MdChevronRight } from 'react-icons/md';
import Button from '../../global/Button';

export default function Service({ title, desc }) {
    return (
        <div className="services-item">
            <h4 className="font-bold text-primary">{title}</h4>
            <p className="mt-3 mb-5">{desc}</p>
            <button
                type="button"
                className="flex items-center py-2 px-3 rounded-md border-2 border-primary text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors duration-100"
            >
                Learn More
                <MdChevronRight className="w-5 h-5 ml-2" />
            </button>
        </div>
    );
}
