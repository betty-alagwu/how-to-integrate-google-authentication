import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";


export default function Login({ setUser }) {
 const navigate = useNavigate();

 const handleSuccess = (credentialResponse) => {
   const decodedResponse = jwtDecode(credentialResponse.credential);
   setUser(decodedResponse);
   navigate('/home');
 };

 return (
   <div className="relative w-full h-full">
     <video
       src={shareVideo}
       type="video/mp4"
       loop
       muted
       controls={false}
       autoPlay
       className="w-full h-full object-cover"
     />
     <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
       <div className="p-5">
         <img src={logo} width="130px" alt="logo" />
       </div>
       <div className="shadow-2xl">
         <GoogleLogin
           onSuccess={handleSuccess}
           onError={() => {
             console.log('Login Failed');
           }}
         />
       </div>
     </div>
   </div>
 );
}
