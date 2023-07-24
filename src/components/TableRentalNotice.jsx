import { useQuery } from "react-query";
import { rentalNotices } from "../api";
import { Link } from "react-router-dom";

export default function TableRentalNotice() {
  const { data } = useQuery("notices", rentalNotices);

  return (
    <div className="w-full grid py-16">
      {/* 제목 */}
      <div className="grid grid-cols-12 py-4 text-center bg-neutral-100 border-t-2 border-b-0.5 border-neutral-500">
        <div>No</div>
        <div className="col-span-7">제목</div>
        <div className=" col-span-2">작성자</div>
        <div className=" col-span-2">작성일</div>
      </div>
      {/* 반복되는 부분 */}
      {data?.notices.map((item, i) => (
        <Link key={i} to={`/rental/notice-detail/${item._id}`}>
          <div>
            <div className="grid grid-cols-12 py-4 text-center border-b border-neutral-100 cursor-pointer hover:bg-red-50">
              <div>{data?.counts - i}</div>
              <div className="col-span-7">{item.title}</div>
              <div className=" col-span-2">{item.writer}</div>
              <div className=" col-span-2">{item.createdAt.substr(0, 10)}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
