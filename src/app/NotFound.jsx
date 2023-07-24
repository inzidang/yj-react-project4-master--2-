import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center h-[100vh]">
      <h1 className="font-bold text-[40px]">페이지를 찾을 수 없습니다.</h1>
      <Link to="/">
        <button className="hover:text-neutral-900 hover:font-bold hover:border-2  border border-neutral-800 px-4 py-2 rounded-lg text-neutral-700">
          홈으로 가기
        </button>
      </Link>
    </div>
  );
}
