import {useRef} from "react";
import * as emailjs from "@emailjs/browser";


export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_u3bv9wa', 'template_ml1v5vs', form.current, {
                publicKey: '0J-FBe1B07umTXTZI',
            })
            .then(
                () => {
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <>
            <div className="conainer lg:py-16 mx-auto px-4">
                <h2 className="mb-4 text-2xl font-semibold pb-3">Contact
                    Me</h2>
                <form className="space-y-8" ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                               >Your email</label>
                        <input type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                               text-sm rounded-2xl focus:ring-primary-500 focus:border-primary-500 block
                               w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                               dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="name@email.com"
                               required
                               name="user_email"/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50
                               rounded-2xl border border-gray-300 shadow-sm focus:ring-primary-500
                               focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                               dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="Let me know how i can help you"
                               required
                               name="subject"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                            message</label>
                        <textarea id="message" rows="6"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
                                  rounded-2xl shadow-sm border border-gray-300 focus:ring-primary-500
                                  focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Leave a message..."
                                  required
                                  name="message"
                        ></textarea>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center
                            text-white rounded-2xl bg-gradient-to-r from-purple-500
                            to-blue-500 hover:from-blue-700 hover:to-cyan-700 sm:w-fit
                            focus:ring-4 focus:outline-none focus:ring-primary-300
                            dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Send message
                    </button>
                </form>
            </div>
        </>
    );
}