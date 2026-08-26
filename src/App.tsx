import './App.css';
import { useState } from "react";










function App() {

  const [number,setnumber] = useState('')

  const handleclick = (e:any)=> {
    // 定数で対象要素の中身を指定できるようにする
    const value_inner = e.target.innerText
    
    // 定数内に 条件分岐でAC内の処理と ＝の処理 エラーの処理(tryとcatchはセットで使う)　もしくはそれ以外は現在値の対象を表示させる設定をする  const content = ()=> 
    
    if (value_inner === 'AC') {
      setnumber('')
    } else if(value_inner === '=') {
      setnumber(eval(number.replaceAll('×','*').replaceAll('÷','/')).toString())
    } else {
      setnumber(value_inner + number)
    }

    }
    

    


    return (
  
      <div className='bg-black w-120 text-[44px] mt-[20px] mx-auto mb-0 p-[30px] rounded-[20px]'>
        <input placeholder='0' type='text' value={number}  className='placeholder:text-white text-white text-right text-[94px] pr-4 w-full'></input>
        <div className='text-white grid grid-cols-4 gap-[30px] text-center [&>div]:py-2 [&>div]:bg-[oklch(0.38_0_0)] '>
          <button onClick={handleclick} className='bg-gray-500 rounded-full '>7</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>8</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>9</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full !bg-orange-400'>÷</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>4</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>5</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>6</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full !bg-orange-400'>×</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>1</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>2</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>3</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full !bg-orange-400'>-</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>0</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>AC</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full'>=</button>
          <button onClick={handleclick} className='bg-gray-500 rounded-full !bg-orange-400'>+</button>
        </div>
      </div>
    )
  

  


}




  







// --------------------------------------------------------------------------------------------------------------------------------------------------

// function App() {


// const [number,setnumber] = useState('');

// const handleclick = (e)=> {

//   // 定数で対象要素の中身を指定できるようにする
//   const value = e.target.innerText;

//   // 定数内に 条件分岐でAC内の処理と ＝の処理 エラーの処理(tryとcatchはセットで使う)　もしくはそれ以外は現在値の対象を表示させる設定をする  const content = ()=> 
//   if (value === 'AC') {
//     setnumber('')
//   } else if(value === '=') {
//     try {
//       setnumber(eval(number.replaceAll('÷','/').replaceAll('×','*')).toString());
//     }    catch (e) {
//       setnumber('error')
//     }
//   } else {
//     setnumber(number + value);
//   }

// };

//   return (
//     <div className='bg-black w-120 text-[44px] mt-[20px] mx-auto mb-0 p-[30px] rounded-[20px]'>
//       <input type='text' value={number} className='text-white text-right text-[94px] pr-4 w-full'></input>
//       <div className='text-white grid grid-cols-4 gap-[30px] text-center [&>div]:py-2 [&>div]:bg-[oklch(0.38_0_0)] '>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full '>7</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>8</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>9</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full !bg-orange-400'>÷</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>4</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>5</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>6</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full !bg-orange-400'>×</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>1</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>2</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>3</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full !bg-orange-400'>-</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>0</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>AC</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full'>=</button>
//         <button onClick={handleclick} className='bg-gray-500 rounded-full !bg-orange-400'>+</button>
//       </div>
//     </div>
//   );
// }

export default App;
