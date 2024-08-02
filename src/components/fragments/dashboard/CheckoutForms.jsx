import InputField from "../../elements/dashboard/InputField";
import SubmitButton from "../../elements/dashboard/SubmitButton";


const CheckoutForm = () => (
    <div className="leading-loose">
        <form className="p-10 bg-white rounded shadow-xl">
            <p className="text-lg text-gray-800 font-medium pb-4">Customer information</p>
            <InputField
                id="cus_name"
                name="cus_name"
                type="text"
                placeholder="Your Name"
                ariaLabel="Name"
                className="mb-2"
            />
            <InputField
                id="cus_email"
                name="cus_email"
                type="text"
                placeholder="Your Email"
                ariaLabel="Email"
                className="mt-2"
            />
            <InputField
                id="cus_address"
                name="cus_address"
                type="text"
                placeholder="Street"
                ariaLabel="Address"
                className="mt-2"
            />
            <InputField
                id="cus_city"
                name="cus_city"
                type="text"
                placeholder="City"
                ariaLabel="City"
                className="mt-2"
            />
            <InputField
                id="cus_country"
                name="cus_country"
                type="text"
                placeholder="Country"
                ariaLabel="Country"
                className="inline-block mt-2 w-1/2 pr-1"
            />
            <InputField
                id="cus_zip"
                name="cus_zip"
                type="text"
                placeholder="Zip"
                ariaLabel="Zip"
                className="inline-block mt-2 -mx-1 pl-1 w-1/2"
            />
            <p className="text-lg text-gray-800 font-medium py-4">Payment information</p>
            <InputField
                id="cus_card"
                name="cus_card"
                type="text"
                placeholder="Card Number MM/YY CVC"
                ariaLabel="Card"
                className="mt-2"
            />
            <div className="mt-6">
                <SubmitButton text="$3.00"/>
            </div>
        </form>
    </div>
);

export default CheckoutForm;
