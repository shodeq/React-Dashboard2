import InputField from "../../elements/dashboard/InputField";
import SubmitButton from "../../elements/dashboard/SubmitButton";


const ContactForm = () => (
    <div className="leading-loose">
        <form className="p-10 bg-white rounded shadow-xl">
            <InputField
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                ariaLabel="Name"
                className="mb-2"
            />
            <InputField
                id="email"
                name="email"
                type="text"
                placeholder="Your Email"
                ariaLabel="Email"
                className="mt-2"
            />
            <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="message">Message</label>
                <textarea
                    className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Your inquiry.."
                    aria-label="Message"
                ></textarea>
            </div>
            <div className="mt-6">
                <SubmitButton text="Submit" />
            </div>
        </form>
    </div>
);

export default ContactForm;
