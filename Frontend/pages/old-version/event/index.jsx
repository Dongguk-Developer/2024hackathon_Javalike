import {router} from "next/client";

/**
 * Event page
 * @singce 2024.11.19
 * @author 권민지
 */
export default function eventPage() {
    return(
        <div className="flex flex-col items-center min-h-screen min-w-[78rem] justify-items-center content-center pb-[2.5rem]"
        style={{background: "linear-gradient(179deg, rgba(255, 165, 0, 0.50) 18.32%, rgba(255, 77, 1, 0.50) 120.72%), #FFA500"}}>
            <div className="flex flex-col items-center pt-[3.75rem]">
                <div>
                    <img src="/images/icon/stress_point_three.png"
                         className="w-[8.75rem] ml-2.5"/>
                </div>
                <div className="h-[0]">
                    <img src="/images/icon/stress_line.png"
                         className="w-[20rem] ml-2.5 relative top-[0.5rem] left-[4.375rem] z-10"/>
                </div>
                <div className="flex items-end gap-5">
                    <p className="text-white text-[4.125rem] weight-800"
                       style={{textShadow: "0px 3.325px 2.66px rgba(0, 0, 0, 0.30)"}}
                    >나에게</p>
                    <p className="text-[#3E2B0A] text-[4.6875rem] weight-800"
                       style={{textShadow: "0px 3.325px 2.66px rgba(0, 0, 0, 0.30)"}}
                    >딱!</p>
                    <p className="text-white text-[4.125rem] weight-800"
                       style={{textShadow: "0px 3.325px 2.66px rgba(0, 0, 0, 0.30)"}}
                    >맞는</p>
                    <p className="text-[4.6875rem] weight-800 relative z-20"
                       style={{textShadow: "0px 3.325px 2.66px rgba(0, 0, 0, 0.30)"}}
                    >맞춤형</p>
                    <p className="text-[4.6875rem] weight-800 relative z-20"
                       style={{textShadow: "0px 3.325px 2.66px rgba(0, 0, 0, 0.30)"}}
                    >코스</p>
                    <p className="text-white text-[4.125rem] weight-800"
                       style={{textShadow: "0px 3.325px 2.66px rgba(0, 0, 0, 0.30)"}}
                    >추천받고,</p>
                </div>

                <div className="flex items-end gap-5 relative top-[-0.9375rem]">
                    <p className="text-white text-[4.125rem] weight-800"
                       style={{textShadow: "0px 3.325px 2.66px rgba(0, 0, 0, 0.30)"}}
                    >지역페이</p>
                    <p className="text-[#3E2B0A] text-[4.6875rem] weight-800"
                       style={{textShadow: "0px 3.325px 2.66px rgba(0, 0, 0, 0.30)"}}
                    >경품</p>
                    <p className="text-white text-[4.125rem] weight-800"
                       style={{textShadow: "0px 3.325px 2.66px rgba(0, 0, 0, 0.30)"}}
                    >받아가자!</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 bg-[#FFB020] rounded-[0.875rem] mt-[2.5rem] w-[75rem] px-[1.5625rem] pt-[0.9375rem] pb-[1.875rem]">
                <p className="text-white text-[1.5rem] weight-800">코스 미리보기</p>

                <div className="flex justify-between">
                    <div className="flex justify-center items-center rounded-[0.875rem] border-4 w-[14.375rem] h-[7.9375rem]">
                        <p className="text-[1.625rem] weight-600">A 코스</p>
                    </div>

                    <div className="flex justify-center items-center rounded-[0.875rem] border-4 w-[14.375rem] h-[7.9375rem]">
                        <p className="text-[1.625rem] weight-600">B 코스</p>
                    </div>

                    <div className="flex justify-center items-center rounded-[0.875rem] border-4 w-[14.375rem] h-[7.9375rem]">
                        <p className="text-[1.625rem] weight-600">C 코스</p>
                    </div>

                    <div className="flex justify-center items-center rounded-[0.875rem] border-4 w-[14.375rem] h-[7.9375rem]">
                        <p className="text-[1.625rem] weight-600">D 코스</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-16 bg-white rounded-[1.375rem] w-[75rem] mt-[1.25rem] px-[3.125rem] py-[4.375rem]">
                <div className="flex flex-col items-center gap-8 mb-[1.25rem]">
                    <div className="flex gap-4">
                        <img src="/images/icon/instagram_icon.png" className="w-[2.8125rem] h-[2.8125rem]"/>
                        <p className="text-[2rem] weight-700">태그 이벤트 참여 방법</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <img src="/images/icon/step1_icon.png" className="w-[1.875rem] h-[1.875rem]"/>
                            <p className="text-[1.375rem] weight-600">맞춤형 관광 코스 추천을 위한 간단한 설문을 진행해 주세요!</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <img src="/images/icon/step2_icon.png" className="w-[1.875rem] h-[1.875rem]"/>
                            <p className="text-[1.375rem] weight-600">추천받은 맞춤형 코스를 확인하거나, 다양한 코스 중에서 마음에 드는 여행지를 골라보세요!</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <img src="/images/icon/step3_icon.png" className="w-[1.875rem] h-[1.875rem]"/>
                            <div className="flex">
                                <p className="text-[1.375rem] weight-600 mr-[0.5rem]">
                                    각 코스의 마음에 드는 방문지를 사진 찍어
                                </p>
                                <p className="text-[1.375rem] text-[#006EFF] weight-600">
                                    태그 인증
                                </p>
                                <p className="text-[1.375rem] weight-600">
                                    을 해주세요
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <img src="/images/icon/step4_icon.png" className="w-[1.875rem] h-[1.875rem]"/>
                            <p className="text-[1.375rem] weight-600">인증 게시판에서 개인 인스타임을 인증해주세요!</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-10 mb-[1.875rem]">
                    <div className="flex gap-2">
                        <p className="text-[2.125rem] text-[#FF6102] weight-700">🎁 2곳</p>
                        <p className="text-[2.125rem] weight-700">인증시 지역페이</p>
                        <p className="text-[2.125rem] text-[#FF6102] weight-700">1만원</p>
                        <p className="text-[2.125rem] weight-700">,</p>
                        <p className="text-[2.125rem] text-[#FF6102] weight-700">5곳</p>
                        <p className="text-[2.125rem] weight-700">인증시 지역페이</p>
                        <p className="text-[2.125rem] text-[#FF6102] weight-700">2만원</p>
                        <p className="text-[2.125rem] weight-700">증정!</p>
                    </div>

                    <div className="cursor-pointer hover:bg-[#FFEFDF] flex items-center gap-3 border-[0.1875rem] border-[#FF6102] rounded-[0.875rem] px-[2.8125rem] py-[1.25rem]"
                         style={{boxShadow: "0px 5px 22px 1px rgba(255, 100, 1, 0.40)"}}
                         onClick={() => router.push('/home')}
                    >
                        <p className="text-[1.875rem] text-[#FF6102] weight-700">맞춤형 관광 코스 제안받기</p>
                        <img src="/images/icon/vector_right_deep_orange.png" className="w-[1.5625rem]"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-[56.25rem] bg-[#F2F2F2] rounded-[0.875rem] px-[2.5rem] py-[1.25rem]">
                    <div className="flex justify-start gap-1.5">
                        <p className="text-[#006EFF] text-[1.5rem] weight-700">🔍 태그 인증?</p>
                        <p className="text-[1.5rem] weight-700">그게 뭐죠?</p>
                    </div>

                    <div className="flex gap-2">
                        <p className="text-[1.125rem] weight-500">
                            개인 인스타그램에 편하게 <span style={{ color: '#006FFF' }}>#경주시가_미쳤어요</span> 해시태그를 포함하여 공게 개시글을 작성해주신후, 인스타 인증게시판에서 본인 인스타임을 인증해주시면, 상품을 보내드립니다.
                        </p>
                    </div>

                    <div className="flex justify-center items-center w-full">
                        <div className="cursor-pointer hover:bg-[#FAFAFA] flex justify-center bg-white rounded-[0.875rem] px-[2.1875rem] py-[0.625rem]"
                             style={{boxShadow: "0px 2.66px 6.65px 0px rgba(0, 0, 0, 0.35)"}}
                             onClick={() => router.push('/footingPost')}
                        >
                            <p className="weight-600">인증하러 가기</p>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col items-center gap-0.5">
                    <p className="text-[#4B4B4B]">저희 서비스는 경주의 각 소상공인들이 자발적으로 참여하여, 좀 더 저렴하게 먹을수 있는 쿠폰을 발급해드리고 있습니다.</p>
                    <p className="text-[#4B4B4B]">쿠폰게시판으로 가셔서 확인해주세요!! :)</p>
                </div>
            </div>

        </div>
    )
}