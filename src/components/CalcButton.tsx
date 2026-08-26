// 型定義
type CalcButtonprops = {
  id: string;
  onC: (e: React.MouseEvent<HTMLButtonElement>) => void;
  orange?: boolean;
};

// 定数設定し型を受け取った後、buttonの内容を記載する
export default function CalcButton({ id, onC, orange }: CalcButtonprops) {
  return (
    <button
      onClick={onC}
      className={`bg-gray-500 rounded-full ${orange ? '!bg-orange-400' : ''}`}
    >
      {id}
    </button>
  );
}

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
