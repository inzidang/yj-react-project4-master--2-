import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";
import MultiCarousel from "./components/MultiCarousel";
import TitleTwoRow from "./components/TitleTwoRow";
import AcademyAsset from "./components/asset/AcademyAsset";
import InstaAsset from "./components/asset/InstaAsset";
import KakaoAsset from "./components/asset/KakaoAsset";

export default function Page() {
  return (
    <Layout>
      {/* 메인 캐러셀 이미지 */}
      <div className="w-full h-screen-minus-header overflow-hidden">
        <CarouselMain />
      </div>

      {/* 1번째 그리드 3/5 2/5 구분 */}
      <div className="py-16 w-full">
        <div className="w-full px-4">
          <div className="grid grid-cols-5 gap-16">
            {/* 공지사항 */}
            <div className="col-span-3 space-y-8">
              {/* 타이틀 */}
              <TitleTwoRow main="공지사항" sub="notice" />
              {/* 게시판 */}
              <div className="w-full flex flex-col">
                <div className="border-2 border-neutral-900 w-full flex items-center">
                  <div className="text-center w-20 aspect-square flex justify-center items-center bg-neutral-900 text-white">
                    2023
                    <br /> 05-15
                  </div>
                  <div className="px-4">
                    대구 오페라하우스 개관 20주년 이벤트
                  </div>
                </div>
              </div>
              <ul>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <li
                      key={i}
                      className="w-full flex justify-between px-1 py-3 cursor-pointer hover:bg-neutral-50"
                    >
                      <span>
                        대구오페라하우스는 문화비 소득공제가 가능합니다.
                      </span>
                      <span>2023-06-08</span>
                    </li>
                  ))}
              </ul>
            </div>
            {/* 아카데미 */}
            <div className="col-span-2 flex flex-col space-y-8">
              <TitleTwoRow main="아카데미" sub="doh academy" />
              <p className="w-1/2">
                전문적이고 차별화 된 대구오페라하우스의 아카데미 교육프로그램을
                만나보세요
              </p>
              {/* 아이콘 4개 이미지 */}
              <div className="grid grid-cols-2 gap-6">
                {/* 1번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/* 아이콘 */}
                  <div>
                    <AcademyAsset />
                  </div>
                  {/* 글 내용*/}
                  <div>
                    <p>아카데미 안내</p>
                    <p className="text-neutral-300">Academy</p>
                  </div>
                </div>
                {/* 2번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/* 아이콘 */}
                  <div>
                    <AcademyAsset />
                  </div>
                  {/* 글 내용*/}
                  <div>
                    <p>아카데미 안내</p>
                    <p className="text-neutral-300">Academy</p>
                  </div>
                </div>
                {/* 3번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/* 아이콘 */}
                  <div>
                    <AcademyAsset />
                  </div>
                  {/* 글 내용*/}
                  <div>
                    <p>아카데미 안내</p>
                    <p className="text-neutral-300">Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2번째 그리드 3/5 2/5 구분 */}
      <div className="py-16 w-full">
        <div className="w-full px-4">
          <div className="grid grid-cols-5 gap-16">
            {/* 소셜네트워크 */}
            <div className="col-span-3 flex flex-col space-y-8">
              <TitleTwoRow main="소셜네트워크" sub="social network" />
              <div className="w-full grid grid-cols-2 gap-4">
                {/* 1번째 자식 */}
                <div className="w-full cursor-pointer aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1683009427513-28e163402d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="social image1"
                  />
                  <p className="font-semibold py-3 px-1">오페라테 Operatte</p>
                  {/* 호버했을 때 음영처리 빈박스 */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[hsl(0,0%,98.4%,0.2)] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100" />
                  {/* 오른쪽 위 아이콘 */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/70 flex justify-center items-center">
                    <KakaoAsset />
                  </div>
                </div>
                {/* 2번째 자식 */}
                <div className="w-full cursor-pointer aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1688362378019-15b0312dfce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="social image1"
                  />
                  <p className="font-semibold py-3 px-1">카페라테 Caffelatte</p>
                  {/* 호버했을 때 음영처리 빈박스 */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[hsl(0,0%,98.4%,0.2)] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100" />
                  {/* 오른쪽 위 아이콘 */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/70 flex justify-center items-center">
                    <InstaAsset />
                  </div>
                </div>
              </div>
            </div>
            {/* 알림존 */}
            <div className="col-span-2 flex flex-col space-y-8">
              <TitleTwoRow main="알림존" sub="doh banner" />
              <MultiCarousel>
                {/* 첫번째 이미지 */}
                <div className="w-52 h-60 bg-gray-400">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=652&q=80"
                    alt="alimzone1"
                  />
                </div>
                {/* 두번째 이미지 */}
                <div className="w-52 h-60 bg-gray-400">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://plus.unsplash.com/premium_photo-1683750689796-285f1c699ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="alimzone1"
                  />
                </div>
                {/* 세번째 이미지 */}
                <div className="w-52 h-60 bg-gray-400">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1688574398156-92556aa3cf52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    alt="alimzone1"
                  />
                </div>
                {/* 네번째 이미지 */}
                <div className="w-52 h-60 bg-gray-400">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1688619101864-1256eadb1740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="alimzone1"
                  />
                </div>
              </MultiCarousel>
            </div>
          </div>
        </div>
      </div>

      {/* 유관기관 */}
      <div className="w-full px-4">
        <div className="grid grid-cols-5 gap-16 itmes-end">
          {/* 타이틀 */}
          <div>
            <TitleTwoRow main="유관기관" sub="family sites" />
          </div>
          {/* 캐러셀 이미지 */}
          <div className="col-span-4">
            <MultiCarousel itemNum={5}>
              {Array(9)
                .fill("")
                .map((_, i) => (
                  <div key={i}>
                    <img
                      src={`https://www.daeguoperahouse.org/images/main/img_ban0${
                        i + 1
                      }_on.png`}
                      alt="image family site"
                    />
                  </div>
                ))}
            </MultiCarousel>
          </div>
        </div>
      </div>
    </Layout>
  );
}
