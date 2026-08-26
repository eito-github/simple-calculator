import './App.css';
import { useState } from 'react';
import CalcButton from './components/CalcButton.tsx';

// -----------------------------------------



function App() {
  
  // 状態管理 電卓の計算結果の現在値/更新値
  const [number,setnumber] = useState<string>('');
  
  // 定数keysを設定し中に要素(id)を設定する(引数で型も書く事)
  const keys : {id:string,orange?:boolean}[] = [
    {id: '7'},
    {id: '8'},
    {id: '9'},
    {id: '÷', orange:true},
        { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '×', orange: true },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '-', orange: true },
    { id: '0' },
    { id: 'AC' },
    { id: '=' },
    { id: '+', orange: true },
  ]

  // 定数handleclickを設定し、ボタンが押された時の条件分岐を設定する
  const handleclick = (e: React.MouseEvent<HTMLButtonElement>)=> {
    const value_inner = e.currentTarget.innerText;

    if (value_inner === 'AC') {
      setnumber('');
    } else if (value_inner === '=') {
      setnumber(eval(number.replaceAll('×','*').replaceAll('÷','/').toString()))
    } else {
      // setnumber(value_inner + number);
      setnumber( number + value_inner);
    }

  }

  // input設定とkeysを配列にし他コンポーネントに要素を渡す

return (
  <div className="bg-black w-120 text-[44px] mt-[20px] mx-auto mb-0 p-[30px] rounded-[20px]">
    <input
      placeholder="0"
      type="text"
      value={number}
      className="placeholder:text-white text-white text-right text-[94px] pr-4 w-full"
    />
    <div className="text-white grid grid-cols-4 gap-[30px] text-center">
      {keys.map((key) => (
        <CalcButton
          key={key.id}
          id={key.id}
          onC={handleclick}
          orange={key.orange}
        />
      ))}
    </div>
  </div>
)

}


export default App;
// ---------------------------------------------------------------------------------------


// import './App.css';
// import { useState } from 'react';
// import CalcButton from './components/CalcButton.tsx';

// // -----------------------------------------



// function App() {
  
//   // 状態管理 電卓の計算結果の現在値/更新値
//   const [number, setnumber] = useState<string>('');
  
//   // 定数keysを設定し中に要素(label)を設定する(引数で型も書く事)
//   const KEYS: { label: string; orange?: boolean }[] = [
//     { label: '7' },
//     { label: '8' },
//     { label: '9' },
//     { label: '÷', orange: true },
//     { label: '4' },
//     { label: '5' },
//     { label: '6' },
//     { label: '×', orange: true },
//     { label: '1' },
//     { label: '2' },
//     { label: '3' },
//     { label: '-', orange: true },
//     { label: '0' },
//     { label: 'AC' },
//     { label: '=' },
//     { label: '+', orange: true },
//   ];

//   // 定数handleclickを設定し、ボタンが押された時の条件分岐を設定する
//   const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const value_inner = e.currentTarget.innerText;
//     if (value_inner === 'AC') {
//       setnumber('');
//     } else if (value_inner === '=') {
//       setnumber(
//         eval(number.replaceAll('×', '*').replaceAll('÷', '/')).toString()
//       );
//     } else {
//       setnumber(value_inner + number);
//     }
//   };

//   // input設定とkeysを配列にし他コンポーネントに要素を渡す
//   return (
//     <div className='bg-black w-120 text-[44px] mt-[20px] mx-auto mb-0 p-[30px] rounded-[20px]'>
//       <input
//         placeholder='0'
//         type='text'
//         value={number}
//         className='placeholder:text-white text-white text-right text-[94px] pr-4 w-full'
//       ></input>
//       <div className='text-white grid grid-cols-4 gap-[30px] text-center [&>div]:py-2 [&>div]:bg-[oklch(0.38_0_0)] '>
//         {KEYS.map((key) => (
//           <CalcButton
//             key={key.label}
//             label={key.label}
//             onClick={handleclick}
//             orange={key.orange}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;