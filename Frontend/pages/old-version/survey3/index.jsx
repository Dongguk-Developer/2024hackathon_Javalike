import {useState} from 'react';
import {router} from 'next/client';

/**
 * Survey3 Page
 * @since 2024.11.16
 * @author 권민지
 */
export default function survey3Page() {
    const [selected, setSelected] = useState(null);

    // 설문 답변 버튼 클릭 이벤트
    const handleClick = (id) => {
        setSelected(id);
    };

    return(
        <div className="flex flex-col items-center bg-[#FFA500] h-screen min-w-[76.6875rem] justify-items-center content-center">
            <div className="w-[76.6875rem]">
                <div className="flex flex-col items-center gap-20">
                    <div className="flex flex-col gap-8 w-[76.6875rem] pt-[4.375rem] items-center">
                        <div className="bg-[#FFFFFF33] rounded-lg py-2 px-5">
                            <p className="text-white">3 / 5</p>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <p className="text-center text-[2.75rem] weight-700 text-white">
                                어떤 여행을 하고 싶으신가요?
                            </p>
                            <p className="text-center weight-500 text-white">
                                선호하는 활동을 골라주세요!
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center w-screen bg-white rounded-t-3xl items-start pt-20"
                         style={{minHeight: 'calc(100vh - 19.6875rem)', minWidth: '76.6875rem'}}>
                        <div className="flex gap-20 justify-between">
                            <div className="flex justify-center items-center pl-[8rem]">
                                <div className="flex flex-col gap-8">
                                    <div className="flex gap-16">
                                        <div className={`cursor-pointer hover:bg-[#FFEFD2] flex items-center justify-between border-2 rounded-[0.875rem] w-[20rem] py-[1.125rem] px-[1.25rem]
                                ${selected === 'rest' ? 'border-[#FFA500] bg-[#FFEFD2]' : 'border-[#FFE0A8]'}`}
                                             onClick={() => handleClick('rest')}>
                                            <div className="w-10/11 justify-items-center">
                                                <p className="relative left-[6.7rem] weight-700 text-[1.3125rem]">🌳️ 휴식</p>
                                            </div>
                                            <div className="w-1/11">
                                                <img src={`${selected === 'rest'
                                                    ? '/images/icon/check_full.png' : '/images/icon/check_empty.png'}`}
                                                     className="w-[1.75rem] h-[1.75rem]" alt="v"/>
                                            </div>
                                        </div>

                                        <div className={`cursor-pointer hover:bg-[#FFEFD2] flex items-center justify-between border-2 rounded-[0.875rem] w-[20rem] py-[1.125rem] px-[1.25rem]
                                ${selected === 'activity' ? 'border-[#FFA500] bg-[#FFEFD2]' : 'border-[#FFE0A8]'}`}
                                             onClick={() => handleClick('activity')}>
                                            <div className="w-10/11 justify-items-center">
                                                <p className="relative left-[5.5rem] weight-700 text-[1.3125rem]">🚴‍♀️ 액티비티</p>
                                            </div>
                                            <div className="w-1/11">
                                                <img src={`${selected === 'activity'
                                                    ? '/images/icon/check_full.png' : '/images/icon/check_empty.png'}`}
                                                     className="w-[1.75rem] h-[1.75rem]" alt="v"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-16">
                                        <div className={`cursor-pointer hover:bg-[#FFEFD2] flex items-center justify-between border-2 rounded-[0.875rem] w-[20rem] py-[1.125rem] px-[1.25rem]
                                ${selected === 'cultural-tour' ? 'border-[#FFA500] bg-[#FFEFD2]' : 'border-[#FFE0A8]'}`}
                                             onClick={() => handleClick('cultural-tour')}>
                                            <div className="w-10/11 justify-items-center">
                                                <p className="relative left-[5.5rem] weight-700 text-[1.3125rem]">🏛️ 문화 탐방</p>
                                            </div>
                                            <div className="w-1/11">
                                                <img src={`${selected === 'cultural-tour'
                                                    ? '/images/icon/check_full.png' : '/images/icon/check_empty.png'}`}
                                                     className="w-[1.75rem] h-[1.75rem]" alt="v"/>
                                            </div>
                                        </div>

                                        <div className={`cursor-pointer hover:bg-[#FFEFD2] flex items-center justify-between border-2 rounded-[0.875rem] w-[20rem] py-[1.125rem] px-[1.25rem]
                                ${selected === 'date' ? 'border-[#FFA500] bg-[#FFEFD2]' : 'border-[#FFE0A8]'}`}
                                             onClick={() => handleClick('date')}>
                                            <div className="w-10/11 justify-items-center">
                                                <p className="relative left-[6.25rem] weight-700 text-[1.3125rem]">❤️ 데이트</p>
                                            </div>
                                            <div className="w-1/11">
                                                <img src={`${selected === 'date'
                                                    ? '/images/icon/check_full.png' : '/images/icon/check_empty.png'}`}
                                                     className="w-[1.75rem] h-[1.75rem]" alt="v"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[3rem] content-center">
                                <img className={`w-12 h-12 cursor-pointer
                                ${selected === null ? 'hidden' : 'block'}`}
                                     onClick={() => router.push('/survey4')}
                                     src="/images/icon/next_btn.png" alt="다음"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}