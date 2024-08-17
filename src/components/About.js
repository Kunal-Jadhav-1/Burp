import UserContext from '../utils/userContext';

const About = () => {
    return (
        <div className="mx-auto text-center w-3/4 bg-secondary text-primary rounded-2xl m-2">
            <h1 className="text-center text-4xl font-semibold mb-4">This is Burp!</h1>
            <div className="m-4 p-6 bg-gray-150 rounded-lg text-left hover:shadow-gray-700 hover:shadow-2x">
                <h2 className="text-2xl font-semibold mb-3">About Burp!</h2>
                <p className="mb-4">
                    Welcome to Burp!, your go-to destination for a delightful food ordering experience. At Burp!, we believe that great food should be just a click away, whether you're craving a quick bite or planning a feast with friends and family. Our mission is to bring the finest flavors from your favorite local restaurants straight to your doorstep, hassle-free.
                </p>
                <h3 className="text-xl font-semibold mb-2">Why Choose Burp?</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li><span className='font-semibold'>Wide Variety:</span> Explore a diverse menu that caters to every palate. From comforting classics to exotic dishes, we've got something for everyone.</li>
                    <li><span className='font-semibold'>Easy Ordering:</span> Our user-friendly interface ensures that you can order your favorite meals in just a few taps.</li>
                    <li><span className='font-semibold'>Fast Delivery:</span> We partner with reliable delivery services to ensure that your food arrives hot and fresh.</li>
                    <li><span className='font-semibold'>Local Love:</span> We support local businesses by featuring dishes from the best restaurants in your area.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">Our Story</h3>
                <p className="mb-4">
                    Burp! was founded with a passion for food and a commitment to convenience. We understand that life can get busy, and finding time to enjoy a good meal shouldn't be a challenge. That's why we created Burp!—to make it easier for you to savor delicious food without any hassle.
                </p>
                <p className="mb-4">
                    Whether you're at home, at work, or on the go, Burp! is here to satisfy your cravings. We are dedicated to providing a seamless food ordering experience, with a focus on quality, speed, and customer satisfaction.
                </p>
                <h3 className="text-xl font-semibold mb-2">Join the Burp! Community</h3>
                <p className="mb-4">
                    We’re more than just a food delivery service—we’re a community of food lovers. Follow us on social media to stay updated on the latest offerings, exclusive deals, and culinary inspiration. We’re excited to be a part of your dining journey!
                </p>
            </div>
            <div className="h-4"></div>
        </div>
    );
};

export default About;
