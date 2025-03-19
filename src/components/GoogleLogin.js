import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./authAPI";

const GoogleLogin = () => {
    const navigate = useNavigate();
    

    const googleResponse = async (authResult) => {
        try {
            if (authResult['code']) {
                const result = await googleAuth(authResult['code']);
                const { name, email, image } = result.data.user;
                const token = result.data.token;
                const localObj = { name, email, image, token }
                localStorage.setItem("user-info",JSON.stringify(localObj))
                navigate("/")
                window.location.reload();
            }


        } catch (error) {
            console.error("❌ Error while requesting the google code:", error);
        }
    };



    const handleGoogleLogin = useGoogleLogin({
        onSuccess: googleResponse,
        onError: googleResponse,
        flow: 'auth-code'
    })

    return (
        <div className="flex items-center justify-center min-h-screen bg-secondary">
            <div className="bg-tertiary p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                
                <button
                    onClick={handleGoogleLogin}
                    className="w-full py-2 px-4 mt-4 border rounded flex items-center justify-center space-x-2 hover:bg-blue-300 bg-primary text-secondary"
                >
                    <img
                        src="https://img.icons8.com/color/24/000000/google-logo.png"
                        alt="Google Logo"
                        className="h-6 w-6"
                    />
                    <span>Google Login</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;