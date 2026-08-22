import './App.css';
import React, { useState } from "react";



function App() {
    const [input, setInput] = useState("0"); // 現在の入力値
  const [result, setResult] = useState(0); // 計算結果

const handleNumberClick = (value) => {
    setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
  };

  return (
    <div className='bg-black w-120 text-[44px] mt-[20px] mx-auto mb-0 p-[30px] rounded-[20px]'>
      <div className='text-white text-right text-[94px] pr-4'>0</div>
      <div className='text-white grid grid-cols-4 gap-[30px] text-center [&>div]:py-2 [&>div]:bg-[oklch(0.38_0_0)] '>
        <div className='bg-gray-500 rounded-full '>7</div>
        <div className='bg-gray-500 rounded-full'>8</div>
        <div className='bg-gray-500 rounded-full'>9</div>
        <div className='bg-gray-500 rounded-full !bg-orange-400'>÷</div>
        <div className='bg-gray-500 rounded-full'>4</div>
        <div className='bg-gray-500 rounded-full'>5</div>
        <div className='bg-gray-500 rounded-full'>6</div>
        <div className='bg-gray-500 rounded-full !bg-orange-400'>×</div>
        <div className='bg-gray-500 rounded-full'>1</div>
        <div className='bg-gray-500 rounded-full'>2</div>
        <div className='bg-gray-500 rounded-full'>3</div>
        <div className='bg-gray-500 rounded-full !bg-orange-400'>－</div>
        <div className='bg-gray-500 rounded-full'>0</div>
        <div className='bg-gray-500 rounded-full'>AC</div>
        <div className='bg-gray-500 rounded-full'>=</div>
        <div className='bg-gray-500 rounded-full !bg-orange-400'>＋</div>
      </div>
    </div>
  );
}

export default App;
