// -------------------------------------------------------------------------------
// ■型定義
// ■■使う型は３つある
// ■■３つのうち一つはReact.MouseEvent<HTMLButtonElement>を使う　関数は何も返さない
// -------------------------------------------------------------------------------

type kata = {
  onc: (e:React.MouseEvent<HTMLButtonElement>) => void;
  orange?: boolean;
  label:string;
};

// -------------------------------------------------------------------------------
//■ボタン要素を記載
//■ 定数設定し分割代入で型を受け取った後、buttonの内容を記載する
//■ブタンのclass名で三項演算子を使い色分けをする
// -------------------------------------------------------------------------------

const btn = ({onc,orange,label}:kata)=> {

return (

<button onClick={onc} className={`bg-gray-500 rounded-full ${orange ? 'bg-orange-400' : '' } `}>{label}</button>

)

}







export default btn;





















// -----------------------------------------------------

// // 型定義
// type CalcButtonProps = {
//   label: string;
//   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   orange?: boolean;
// };

// // 定数設定し型を受け取った後、buttonの内容を記載する
// export default function CalcButton({ label, onClick, orange }: CalcButtonProps) {
//   return (
//     <button
//       onClick={onClick}
//       className={`bg-gray-500 rounded-full ${orange ? '!bg-orange-400' : ''}`}
//     >
//       {label}
//     </button>
//   );
// }
