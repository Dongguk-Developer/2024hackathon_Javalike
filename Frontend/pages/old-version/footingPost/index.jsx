import {useRouter} from 'next/router';
import { RiImageAddLine } from "@react-icons/all-files/ri/RiImageAddLine"
import { TiDelete } from "@react-icons/all-files/ti/TiDelete";

export default function footingPostPage() {
    const router = useRouter();

    return(
        <div className="flex flex-col items-center min-h-screen min-w-[76.6rem] bg-[#FFA500]">
            <div className="flex flex-col items-center">
                <h1 className="text-[2rem] weight-700 text-[white] pt-[4.15625rem]">경주 맞춤형 관광지 코스 제공 서비스</h1>
                <div className="flex gap-[1.371875rem] pt-[2.401875rem] pb-[2.1575rem] weight-700 text-[#FFA500]">
                    <button className="rounded-[0.914375rem] weight-700 px-[1.745625rem] py-[0.595rem] bg-[#F18304] text-[white]"
                            onClick={() => router.push('/footingPost')}>SNS 인증게시판</button>
                    <button className="rounded-[0.914375rem] weight-700 bg-[white] px-[3.241875rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/discountCoupon')}>할인쿠폰</button>
                    <button className="rounded-[0.914375rem] weight-700 bg-[white] px-[2.078125rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/allCourses')}>코스 모두 보기</button>
                    <button className="rounded-[0.914375rem] weight-700 bg-[white] px-[4.364375rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/review')}>후기</button>
                </div>
            </div>
            <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[2.539375rem] bg-white">
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">인스타 닉네임</label>
                        <input type="text" className="rounded-[0.914375rem] w-[21.4878125rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="인스타 user name을 입력해주세요"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">전화번호</label>
                        <input type="text" className="rounded-[0.914375rem] w-[21.4878125rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="전화번호를 입력해주세요"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">이메일</label>
                        <input type="text" className="rounded-[0.914375rem] w-[21.4878125rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="이메일을 입력해주세요"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">제목</label>
                        <input type="text" className="rounded-[0.914375rem] w-[33.6240625rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="제목을 입력해주세요"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">인스타그램 계정 인증</label>
                        <textarea type="text" className="rounded-[0.914375rem] w-[53.69875rem] h-[21.7371875rem] bg-[#F1F1F1] px-[1.205rem] py-[0.625rem]" placeholder="내용을 입력해주세요"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">사진 첨부</label>
                        <div className="flex gap-[0.5625rem]">
                            <RiImageAddLine className="w-[1.875rem] h-[1.875rem] cursor-pointer mr-[0.375rem]"></RiImageAddLine>
                            <div className="flex items-center gap-[0.0625rem] pl-[0.3125rem] pr-[0.125rem] py-[0.3125rem] rounded-[0.625rem] border-[0.0625rem] border-solid border-[#bdbdbd] ">
                                <div className="cursor-pointer text-[0.875rem]">SNS 인증 캡쳐1.jpg</div>
                                <TiDelete className="w-[1.375rem] h-[1.375rem] cursor-pointer text-[gray]"></TiDelete>
                            </div>
                            <div className="flex items-center gap-[0.0625rem] pl-[0.3125rem] pr-[0.125rem] py-[0.3125rem] rounded-[0.625rem] border-[0.0625rem] border-solid border-[#bdbdbd] ">
                                <div className="cursor-pointer text-[0.875rem]">SNS 인증 캡쳐2.jpg</div>
                                <TiDelete className="w-[1.375rem] h-[1.375rem] cursor-pointer text-[gray]"></TiDelete>
                            </div>
                            <div className="flex items-center gap-[0.0625rem] pl-[0.3125rem] pr-[0.125rem] py-[0.3125rem] rounded-[0.625rem] border-[0.0625rem] border-solid border-[#bdbdbd] ">
                                <div className="cursor-pointer text-[0.875rem]">SNS 인증 캡쳐3.jpg</div>
                                <TiDelete className="w-[1.375rem] h-[1.375rem] cursor-pointer text-[gray]"></TiDelete>
                            </div>
                        </div>
                    </div>
                    <button className="self-center mt-10 mb-[19.239375rem] rounded-[0.914375rem] w-[18.2875rem] h-[4.15625rem] bg-[#FFA500] text-[1.49625rem] text-white weight-700  hover:bg-[#F18304]">SNS 인증 등록</button>
                </div>
            </div>
        </div>
    )
}