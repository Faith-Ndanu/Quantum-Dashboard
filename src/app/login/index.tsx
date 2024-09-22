"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    // For now, we'll just navigate to a new page
    router.push('/dashboard'); // Replace '/dashboard' with your desired route after successful login
  };

  return (
    <div className="flex h-screen bg-primary-color">
      <div className="w-1/2 flex flex-col justify-center items-center p-12">
        <div className="mb-8">
          <Image src="/images/rutubalogo.png" alt="Rutuba Logo" width={180} height={180} />
        </div>
        <h1 className="text-6xl font-bold text-green-800 mb-8">Welcome Back</h1>
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold mb-12 text-green-800">Login</h2>
        <div className="w-4/5">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-6 border border-gray-300 rounded-lg text-2xl"
              />
            </div>
            <div className="mb-10">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-6 border border-gray-300 rounded-lg text-2xl"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary-color text-white py-5 rounded-lg text-2xl font-semibold hover:bg-amber-500 transition duration-300"
            >
              Log In
            </button>
          </form>
          <Link href="/register" className='block mt-4 text-center text-green-700 font-semibold'>Register</Link>
          <div className="mt-8 text-center">
            <span className="text-gray-500 text-xl">or </span>
          </div>
          <button className="w-full mt-8 bg-white border border-gray-300 text-gray-700 py-5 rounded-lg flex items-center justify-center hover:bg-gray-50 transition duration-300 text-2xl">
            <Image src="/images/google.png" alt="Google Logo" width={28} height={28} className="mr-4" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

















// "use client";
// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="flex h-screen bg-primary-color">
//       <div className="w-1/2 flex flex-col justify-center items-center p-12">
//         <div className="mb-8">
//           <img src="/images/rutubalogo.png" alt="" width={180} height={180} />
//         </div>
//         <h1 className="text-6xl font-bold text-green-800 mb-8">Welcome Back</h1>
//       </div>

//       <div className="w-1/2 bg-white flex flex-col justify-center items-center">
//         <h2 className="text-4xl font-semibold mb-12 text-green-800">Login</h2>

//         <div className="w-4/5">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-8">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-6 border border-gray-300 rounded-lg text-2xl"
//               />
//             </div>

//             <div className="mb-10">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-6 border border-gray-300 rounded-lg text-2xl"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-secondary-color text-white py-5 rounded-lg text-2xl font-semibold hover:bg-amber-500 transition duration-300"
//             > Log In </button>
//             <Link href="/registration" className='text-green-700 font-semibold'>Register</Link>
//           </form>

//           <div className="mt-8 text-center">
//             <span className="text-gray-500 text-xl">or </span>
//           </div>
//           <button className="w-full mt-8 bg-white border border-gray-300 text-gray-700 py-5 rounded-lg flex items-center justify-center hover:bg-gray-50 transition duration-300 text-2xl">
//             <img src="/images/google.png" alt="Google Logo" width={28} height={28} className="mr-4" />
//             Continue with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
