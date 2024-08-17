const ContactUs = () => {
    return (
        <div className="my-4 bg-secondary text-primary text-left rounded-lg p-6  w-2/3 mx-auto">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg mb-4">
                Have any questions or need support? We’re here to help! Reach out to us through any of the following methods:
            </p>
            <div className="text-start px-4 space-y-4">
                <div className="space-x-3">
                    <span className="text-xl my-3 font-semibold">Mail:</span>
                    <span className="hover:text-blue-600 text-lg  cursor-pointer">
                        <a href="mailto:jskunal.01@gmail.com">jskunal.01@gmail.com</a>
                    </span>
                </div>

                <div className="space-x-3">
                    <span className="text-xl my-3 font-semibold">Instagram:</span>
                    <span className="hover:text-blue-600 text-lg cursor-pointer">
                        <a href="https://www.instagram.com/_kunal_8334?igsh=MXQyNjFjOTdtOHRleQ==" target="_blank" rel="noopener noreferrer">
                            @_kunal_8334
                        </a>
                    </span>
                </div>

                <div className="space-x-3">
                    <span className="text-xl my-3 font-semibold">Call:</span>
                    <span className="hover:text-blue-600 text-lg cursor-pointer">
                        <a href="tel:+917219528334">+91 72195 28334</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;