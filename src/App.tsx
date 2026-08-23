import './App.css';
import React, { useState } from "react";



function App() {


const [number,setnumber] = useState('0');

  return (
    <div className='bg-black w-120 text-[44px] mt-[20px] mx-auto mb-0 p-[30px] rounded-[20px]'>
      <div className='text-white text-right text-[94px] pr-4'>{number}</div>
      <div className='text-white grid grid-cols-4 gap-[30px] text-center [&>div]:py-2 [&>div]:bg-[oklch(0.38_0_0)] '>
        <button onClick={()=> setnumber('7')} className='bg-gray-500 rounded-full '>7</button>
        <button onClick={()=> setnumber('8')} className='bg-gray-500 rounded-full'>8</button>
        <button onClick={()=> setnumber('9')} className='bg-gray-500 rounded-full'>9</button>
        <button onClick={()=> setnumber('')} className='bg-gray-500 rounded-full !bg-orange-400'>÷</button>
        <button onClick={()=> setnumber('4')} className='bg-gray-500 rounded-full'>4</button>
        <button onClick={()=> setnumber('5')} className='bg-gray-500 rounded-full'>5</button>
        <button onClick={()=> setnumber('6')} className='bg-gray-500 rounded-full'>6</button>
        <button onClick={()=> setnumber('')} className='bg-gray-500 rounded-full !bg-orange-400'>×</button>
        <button onClick={()=> setnumber('1')} className='bg-gray-500 rounded-full'>1</button>
        <button onClick={()=> setnumber('2')} className='bg-gray-500 rounded-full'>2</button>
        <button onClick={()=> setnumber('3')} className='bg-gray-500 rounded-full'>3</button>
        <button onClick={()=> setnumber('')} className='bg-gray-500 rounded-full !bg-orange-400'>－</button>
        <button onClick={()=> setnumber('0')} className='bg-gray-500 rounded-full'>0</button>
        <button onClick={()=> setnumber('')} className='bg-gray-500 rounded-full'>AC</button>
        <button onClick={()=> setnumber('')} className='bg-gray-500 rounded-full'>=</button>
        <button onClick={()=> setnumber('')} className='bg-gray-500 rounded-full !bg-orange-400'>＋</button>
      </div>
    </div>
    // <div className='bg-black w-120 text-[44px] mt-[20px] mx-auto mb-0 p-[30px] rounded-[20px]'>
    //   <div className='text-white text-right text-[94px] pr-4'>0</div>
    //   <div className='text-white grid grid-cols-4 gap-[30px] text-center [&>div]:py-2 [&>div]:bg-[oklch(0.38_0_0)] '>
    //     <button onClick={} className='bg-gray-500 rounded-full '>7</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>8</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>9</button>
    //     <button onClick={} className='bg-gray-500 rounded-full !bg-orange-400'>÷</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>4</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>5</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>6</button>
    //     <button onClick={} className='bg-gray-500 rounded-full !bg-orange-400'>×</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>1</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>2</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>3</button>
    //     <button onClick={} className='bg-gray-500 rounded-full !bg-orange-400'>－</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>0</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>AC</button>
    //     <button onClick={} className='bg-gray-500 rounded-full'>=</button>
    //     <button onClick={} className='bg-gray-500 rounded-full !bg-orange-400'>＋</button>
    //   </div>
    // </div>

  );
}

export default App;
