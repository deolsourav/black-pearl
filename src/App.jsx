import React from 'react';

const App = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/1200x/7d/1b/51/7d1b51ccf5b7c91b71dbbf609f254cb7.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10">
       
      </div>
         <h1 className='text-white text-5xl z-20 absolute top-[20%] right-100 hover:text-red-800 duration-150 cursor-pointer transition'>THE KING OF SEA</h1>
        <h1 className='text-white text-8xl z-20 absolute top-[25%] right-50 hover:text-zinc-500 duration-150 cursor-pointer transition'>BLACK PEARL</h1>
      {/* Navbar */}
      <nav className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-16 bg-zinc-900 bg-opacity-90 rounded-2xl z-10 text-white font-bold flex items-center justify-between">
        <img className='h-35 w-35' src="captain jack.png" alt="" />
        <div className="flex gap-8 px-9">
          <h4 className="hover:text-red-600 cursor-pointer transition">Home</h4>
          <h4 className="hover:text-red-600 cursor-pointer transition">About</h4>
          <h4 className="hover:text-red-600 cursor-pointer transition">Services</h4>
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
      <img className="absolute w-[30%] h-50%] left-8 bottom-[-5%] z-20" src="jack.png" alt="" />
        <div
        className='p-4 text-white absolute h-70 w-150 bg-zinc-800 opacity-60 rounded-2xl top-[40%] left-[48%] z-30 hover:bg-red-800'>
          <h1 className='hover:text-amber-500 font-bold text-3xl'>Captain Jack Sparrow 🦜</h1>
          <p className='text-xl py-3 w-110'>Captain of the Black Pearl and legendary pirate of the Seven Seas, Captain Jack Sparrow is the irreverent trickster of the Caribbean.</p>
          <img className='h-80 w-120 absolute bottom-0 left-83' src="Black_Pearl-removebg.png" alt="" />
          <button className='px-6 py-2 font-bold rounded-xl bg-amber-500 hover:bg-blue-900'>Book Now</button>
        </div>
    </div>
  );
};

export default App;
