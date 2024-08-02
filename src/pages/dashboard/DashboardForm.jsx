import { FaList } from "react-icons/fa";
import Footer from "../../components/fragments/dashboard/Footer";
import ContactForm from "../../components/fragments/dashboard/ContactForm";
import CheckoutForm from "../../components/fragments/dashboard/CheckoutForms";

export default function DashboardForm() {
    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="w-full text-3xl text-black pb-6">Forms</h1>

                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                        <p className="text-xl pb-6 flex items-center">
                            <FaList className="fas fa-list mr-3"/> Contact Form
                        </p>
                         <ContactForm />
                    </div>

                    <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                        <p className="text-xl pb-6 flex items-center">
                            <FaList className="fas fa-list mr-3"/> Checkout Form
                        </p>
                        <CheckoutForm />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}