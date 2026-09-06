import './App.css';
import { useState } from 'react';
import CalcButton from './components/CalcButton.tsx';

// -----------------------------------------

function App() {
  // -------------------------------------------------------------------------------
  // ■状態管理 電卓の計算結果の現在値/更新値
  // ■■型も設定していないので型も状態管理で設定する事
  // -------------------------------------------------------------------------------

  const [count, setCount] = useState<string>('');

  // -------------------------------------------------------------------------------
  // ■ボタンで使う数字や色分岐のみ設定する
  // ■■定数keysを設定する際は型がないので、型も設定する事
  // -------------------------------------------------------------------------------

  const keys : {label:string,orange?:boolean}[] = [
    {label:'7'},
    {label:'8'},
    {label:'9'},
    {label:'÷',orange:true},
    {label:'4'},
    {label:'5'},
    {label:'6'},
    {label:'×',orange:true},
    {label:'1'},
    {label:'2'},
    {label:'3'},
    {label:'-',orange:true},
    {label:'0'},
    {label:'AC'},
    {label:'='},
    {label:'+',orange:true}
  ]

  // -------------------------------------------------------------------------------
  // ■ ボタンを押した際の処理を書いていく
  // ■■関数を設定していく際に「e」を使うので関数自体に型を設定する事
  // ■■定数で「その要素の中身」を設定する
  // ■■条件分岐で詳細に設定を記載していく
  // ■■■「ac」「=」「文字を入れるときの処理」についてクリックしたときの処理
  // -------------------------------------------------------------------------------

  const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text__input = e.currentTarget.innerText;

    if (text__input === 'AC') {
      setCount('');
    } else if (text__input === '=') {
      setCount(
        eval(count.replaceAll('×', '*').replaceAll('÷', '/')).toString()
      );
    } else {
      setCount(count + text__input);
    }
  };

  // -------------------------------------------------------------------------------
  // ■見た目の要素を作っていく（input設定 / keysを配列にしコンポーネントに要素を渡す）
  //
  // ■■ボタン要素だけは別ファイルに移し見やすくする（別ファイルにpropsを渡す事も忘れずに（別ファイルがよみとれないため））
  // ■■ボタン要素は配列
  // -------------------------------------------------------------------------------

  return (
    <div className='bg-black w-120 text-[44px] mt-[20px] mx-auto mb-0 p-[30px] rounded-[20px]'>
      <input
        className='placeholder:text-white text-white text-right text-[94px] pr-4 w-full'
        type='text'
        placeholder='0'
        value={count}
      />
      <div className='text-white grid grid-cols-4 gap-[30px] text-center [&>div]:py-2 [&>div]:bg-[oklch(0.38_0_0)] '>
        {keys.map((key) => (
          <CalcButton 
          key={key.label}
          onc={handleclick}
          orange={key.orange}
          label={key.label}
          />
        ))}
      </div>
    </div>
  );
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
