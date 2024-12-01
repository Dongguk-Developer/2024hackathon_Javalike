import {useRouter} from 'next/router';

/**
 * home ui
 * @since 2024.11.15
 * @author 권민지
 */
export default function homePage() {
    const router = useRouter();

    return(
        <div className="flex flex-col bg-[#FFA500] w-screen h-screen min-w-[76.6875rem] min-h-[38.875rem] items-center justify-center content-center">
            <div className="flex flex-col w-[76.6875rem] gap-24 pb-[1rem]">
                <div className="flex flex-col items-center gap-5">
                    <p className="text-center text-[2.75rem] weight-700 text-white leading-[3.375rem]">
                        가족, 친구, 연인과 함께하는 경주 탐방!
                        <br/>당신의 여행을 완벽하게 계획해드립니다
                    </p>
                    <div className="bg-[#FFFFFF33] rounded-lg py-2 px-5">
                        <p className="text-white">🕖 질문 5개, 단 1분 소요</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-14">
                    <div className="cursor-pointer hover:bg-[#f3efe7] flex items-center gap-[0.375rem] bg-white rounded-[0.875rem] py-4 px-5"
                         style={{boxShadow: "0rem 0.8728125rem 1.6625rem 0.083125rem #C7760D"}}
                         onClick={() => router.push('/survey1')}
                    >
                        <p className="text-[1.3125rem] text-[#FF7700] weight-700">맞춤형 관광 코스 제안받기</p>
                        <img src="/images/icon/vector_right_orange.png"
                             className="w-[0.9375rem] h-[0.9375rem]" alt="->"/>
                    </div>

                    <div className="flex flex-col gap-2.5 bg-[#FFE4B3] rounded-[0.875rem] px-8 pb-10 pt-4">
                        <p className="weight-700 text-[#4D4D4D]">코스</p>
                        <div className="flex gap-8 items-center">
                            <div className="bg-white rounded-[0.875rem] w-[8.3125rem] h-[8.3125rem] content-center text-center">
                                <p className="text-[#FFA500] text-[1.625rem] weight-700">?</p>
                            </div>

                            <img src="/images/icon/vector_right_brown.png"
                                 className="w-[1rem] h-[1rem]" alt="->"/>

                            <div className="bg-white rounded-[0.875rem] w-[8.3125rem] h-[8.3125rem] content-center text-center">
                                <p className="text-[#FFA500] text-[1.625rem] weight-700">?</p>
                            </div>

                            <img src="/images/icon/vector_right_brown.png"
                                 className="w-[1rem] h-[1rem]" alt="->"/>

                            <div className="bg-white rounded-[0.875rem] w-[8.3125rem] h-[8.3125rem] content-center text-center">
                                <p className="text-[#FFA500] text-[1.625rem] weight-700">?</p>
                            </div>

                            <img src="/images/icon/vector_right_brown.png"
                                 className="w-[1rem] h-[1rem]" alt="->"/>

                            <div className="bg-white rounded-[0.875rem] w-[8.3125rem] h-[8.3125rem] content-center text-center">
                                <p className="text-[#FFA500] text-[1.625rem] weight-700">?</p>
                            </div>

                            <img src="/images/icon/vector_right_brown.png"
                                 className="w-[1rem] h-[1rem]" alt="->"/>

                            <div className="bg-white rounded-[0.875rem] w-[8.3125rem] h-[8.3125rem] content-center text-center">
                                <p className="text-[#FFA500] text-[1.625rem] weight-700">?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}