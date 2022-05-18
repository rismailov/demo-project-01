import { MdArrowForward } from 'react-icons/md';
import notifyAboutDemo from '../global/notify-about-demo';

export default function ContactForm() {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert('This is still a demo project 🤷🏼‍♂️');
            }}
            className="mt-8 max-w-106 w-full p-5 lg:p-8 rounded-md bg-white dark:bg-[#31363f] shadow-2xl border border-light-800 dark:border-dark-50"
            data-aos="a-fade"
            data-aos-delay="250"
        >
            <div className="space-y-5">
                <FormGroup
                    type="text"
                    field="name"
                    label="Your Name"
                    placeholder="Full Name"
                />
                <FormGroup
                    type="email"
                    field="email"
                    label="Your Email"
                    placeholder="Your Email"
                />
                <FormGroup
                    type="tel"
                    field="tel"
                    label="Your Phone Number"
                    placeholder="Your Phone Number"
                />
                <FormGroup
                    type="textarea"
                    field="message"
                    label="Message"
                    placeholder="Your Message"
                />
            </div>

            <button
                type="submit"
                className="mt-7 mx-auto btn btn-primary btn-sm py-2 px-5 lg:py-3 lg:px-7 flex items-center justify-center group"
            >
                Send The Message
                <MdArrowForward className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform duration-150" />
            </button>
        </form>
    );
}

const FormGroup = ({ type, field, label, placeholder }) => {
    return (
        <div className="w-full flex flex-col space-y-1">
            <label
                htmlFor={field}
                style={{ fontSize: '0.8rem' }}
                className="font-medium text-l-title dark:text-d-title"
            >
                {label}
            </label>

            {type && type === 'textarea' ? (
                <textarea
                    name={field}
                    id={field}
                    cols="30"
                    rows="3"
                    placeholder={placeholder}
                    style={{ fontSize: '0.9rem' }}
                    className="outline-none dark:bg-d-bg dark:text-gray-50 rounded-md border-gray-300 dark:border-dark-50 placeholder-l-text dark:placeholder-d-text/75 | px-3 py-2"
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={field}
                    placeholder={placeholder}
                    style={{ fontSize: '0.9rem' }}
                    className="outline-none dark:bg-d-bg dark:text-gray-50 rounded-md border-gray-300 dark:border-dark-50 placeholder-l-text dark:placeholder-d-text/75"
                />
            )}
        </div>
    );
};
