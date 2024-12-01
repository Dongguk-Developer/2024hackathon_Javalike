import {useRouter} from "next/router";

export default function eventPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center bg-gradient-to-b from-[#FFA50088] from-0% to-[#FF4D0188] to-100% bg-[#FFA500] pt-[106.4px] pb-[35px] px-[40px] min-w-[1280px] min-h-screen">
            
            <div className="flex flex-col text-[#FFF] text-center pb-[60px]">


                    <div className="flex flex-col w-[905.5px] h-[101.8px]">
                        <div className="relative bottom-[0%] z-20 w-[905.5px] h-[101.8px]">
                            <div className="flex flex-col justify-center">
                                <div className="flex justify-center gap-[22px] text-[66.5px] font-extrabold leading-[152%]" style={{textShadow:'0px 3.325px 2.66px rgba(0, 0, 0, 0.30)'}}>
                                    <p>나에게</p>
                                    <p className="text-[#3E2B0A] text-[79.8px] font-black">딱!</p>
                                    <p>맞는</p>
                                    <p className="text-[#000000] text-[79.8px] font-black">여행지</p>
                                    <p>다녀오고</p>
                                </div>
                            </div>
                        </div>
                        <img src="/images/icon/stress_line.png" className="relative bottom-[100%] left-[354.25px] w-[342.5px] h-[101.8px] px-[5px] py-[5px] resize-none"/>
                    </div>


                    
                <div className="flex justify-center gap-[22px] text-[66.5px] font-extrabold leading-[152%]" style={{textShadow:'0px 3.325px 2.66px rgba(0, 0, 0, 0.30)'}}>
                    <p>지역페이</p>
                    <p className="text-[#3E2B0A] text-[79.8px] font-black">경품</p>
                    <p>받아가자!</p>
                </div>
            </div>
            <div
                className="flex flex-col items-center w-[1200px] rounded-[14.63px] bg-[#FFF] pt-[60px] px-[100px] pb-[110px] mt-[16.63px] gap-[30px]">
                <div className="flex justify-center gap-[12.63px]">
                    <img className="w-[53.2px] h-[53.2px]" src="/images/icon/instagram_icon.png"></img>
                    <div className="flex flex-col justify-center">
                        <div className="text-[37.24px] font-bold">태그 이벤트 참여 방법</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-start gap-3 items-center">
                        <img className="w-[28px] h-[28px]" src="/images/icon/step1_icon.png"/>
                        <div className="flex flex-col justify-center">
                            <p className="text-[23.94px] weight-600">태그 이벤트는 “숙소 방문 인증"과 “쓰레기 처리 인증" 총 2가지로, 참여하고 싶은
                                이벤트를 골라주세요</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-3">
                        <img className="w-[28px] h-[28px] mt-[5px]" src="/images/icon/step2_icon.png"/>
                        <div className="flex flex-col justify-center">
                            <p className="text-[23.94px] weight-600">숙소 방문 인증의 경우, 경주의 밤 플랫폼에서 제공하는 숙소에 한해 방문 인증 사진을
                                찍어주세요.</p>
                            <p className="text-[23.94px] weight-600">쓰레기 처리 인증의 경우, 분리수거를 완료한 인증 사진을 찍어주세요.</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-3 items-center">
                        <img className="w-[28px] h-[28px]" src="/images/icon/step3_icon.png"/>
                        <div className="flex flex-col justify-center">
                            <p className="text-[23.94px] weight-600">개인 인스타그램에서 촬영한 사진을 업로드하여 <span
                                className="text-[#006EFF] font-bold">태그 인증</span>을 해주세요</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-3 items-center">
                        <img className="w-[28px] h-[28px]" src="/images/icon/step4_icon.png"/>
                        <div className="flex flex-col justify-center">
                            <p className="text-[23.94px] weight-600">인증 게시판에서 개인 인스타임을 인증해주세요!</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-[37.24px] font-bold pt-[66.75px]">
                    <p>🎁</p>
                    <p className="text-[#FF6102] px-2">1개</p>
                    <p>인증시 지역페이</p>
                    <p className="text-[#FF6102] pl-2">1만원</p>
                    <p>,</p>
                    <p className="text-[#FF6102] px-2">모두</p>
                    <p>인증시 지역페이</p>
                    <p className="text-[#FF6102] px-2">2만원</p>
                    <p>증정!</p>
                </div>
                <div
                    className="cursor-pointer hover:bg-[#FFEFDF] flex items-center justify-center gap-3 border-[0.1875rem] border-[#FF6102] rounded-[0.875rem] w-[442.219px] py-[1.25rem]"
                    style={{boxShadow: "0px 5px 22px 1px rgba(255, 100, 1, 0.40)"}}
                    onClick={() => router.push('/home')}
                >
                    <p className="text-[1.875rem] text-[#FF6102] weight-700">경주의 밤 바로가기</p>
                    <img src="/images/icon/vector_right_deep_orange.png" className="w-[1.5625rem]"/>
                </div>
                <div className="flex justify-start w-full bg-[#F2F2F2] rounded-[14.63px] px-[40px] py-[35px] mt-16">
                    <div className="flex flex-col gap-[20px] w-full">
                        <div className="flex justify-start font-bold text-[26.6px]">
                            <p>🔍</p>
                            <p className="text-[#006EFF]">태그 인증?</p>
                            <p>그게 뭐죠?</p>
                        </div>

                        <div className="flex gap-2 pb-[10px]">
                            <p className="text-[1.4rem] weight-500">
                                개인 인스타그램에 <span style={{color: '#006FFF'}}>#경주의밤_2024</span> 해시태그를 포함하여 공게 개시글을 작성해주세요.<br/>
                                인스타 인증게시판에서 본인 인스타임을 인증해주시면, 상품을 보내드립니다.
                            </p>
                        </div>

                        <div className="flex justify-center items-center w-full">
                            <div
                                className="cursor-pointer hover:bg-[#FAFAFA] flex justify-center bg-white rounded-[0.875rem] px-[2.1875rem] py-[0.625rem]"
                                style={{boxShadow: "0px 2.66px 6.65px 0px rgba(0, 0, 0, 0.35)"}}
                                onClick={() => router.push('/certificationBoardList')}
                            >
                                <p className="weight-600 text-[1.3125rem]">인증하러 가기</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}