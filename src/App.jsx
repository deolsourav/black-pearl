import React from 'react';

const App = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/1200x/4e/13/95/4e13950fc82ac3be11b073a97c122249.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10">
        <h1 className='text-white text-5xl z-20 absolute top-[20%] right-50 hover:text-red-800 duration-150 cursor-pointer transition'>THE KING OF SEA</h1>
        <h1 className='text-white text-8xl z-29 absolute top-[25%] right-50 hover:text-zinc-500 duration-150 cursor-pointer transition'>BLACK PEARL</h1>
      </div>

      {/* Navbar */}
      <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] h-16 bg-zinc-900 bg-opacity-90 rounded-2xl z-20 text-white font-bold flex items-center justify-between px-6">
        <h4 className="text-xl">Black Pearl</h4>
        <div className="flex gap-8">
          <h4 className="hover:text-red-600 cursor-pointer transition">Home</h4>
          <h4 className="hover:text-red-600 cursor-pointer transition">About</h4>
          <h4 className="hover:text-red-600 cursor-pointer transition">Contact</h4>
        </div>
      </nav>
      
      

      {/* Bottom Wave Image */}
      
      {/* <img
        src="wave-3-removebg.png"
        alt="wave"
        className="absolute w-full h-70 bottom-22 z-20"
      />
      <img
        src="wave-1-removebg.png"
        alt="wave"
        className="absolute w-full h-70 bottom-0 z-20"
      /> */}
      <img className="absolute w-[70%] h-80%] left-0 bottom-3 z-20 " src="Black_Pearl-removebg.png" alt="" />
        
    </div>
  );
};

export default App;
