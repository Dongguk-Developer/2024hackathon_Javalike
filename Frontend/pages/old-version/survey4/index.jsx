import {useState} from 'react';
import {router} from 'next/client';

/**
 * Survey4 Page
 * @since 2024.11.16
 * @author 권민지
 */
export default function survey4Page() {
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
                            <p className="text-white">4 / 5</p>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <p className="text-center text-[2.75rem] weight-700 text-white">
                                시끌벅적한 분위기를 좋아하시나요?
                            </p>
                            <p className="text-center weight-500 text-white">
                                당신의 취향을 알려주세요!
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center w-screen bg-white rounded-t-3xl items-start pt-20"
                         style={{minHeight: 'calc(100vh - 19.6875rem)', minWidth: '76.6875rem'}}>
                        <div className="flex gap-20 justify-between">
                            <div className="flex justify-center items-center pl-[8rem]">
                                <div className="flex flex-col gap-8">
                                    <div className={`cursor-pointer hover:bg-[#FFEFD2] flex items-center justify-between border-2 rounded-[0.875rem] w-[31.25rem] py-[1.125rem] px-[1.25rem]
                                ${selected === 'many-people' ? 'border-[#FFA500] bg-[#FFEFD2]' : 'border-[#FFE0A8]'}`}
                                         onClick={() => handleClick('many-people')}>
                                        <div className="w-10/11 justify-items-center">
                                            <p className="relative left-[7.5rem] weight-700 text-[1.3125rem]">🙆‍♂️️ 사람이 많은 곳이 좋아요</p>
                                        </div>
                                        <div className="w-1/11">
                                            <img src={`${selected === 'many-people'
                                                ? '/images/icon/check_full.png' : '/images/icon/check_empty.png'}`}
                                                 className="w-[1.75rem] h-[1.75rem]" alt="v"/>
                                        </div>
                                    </div>

                                    <div className={`cursor-pointer hover:bg-[#FFEFD2] flex items-center justify-between border-2 rounded-[0.875rem] w-[31.25rem] py-[1.125rem] px-[1.25rem]
                                ${selected === 'quiet' ? 'border-[#FFA500] bg-[#FFEFD2]' : 'border-[#FFE0A8]'}`}
                                         onClick={() => handleClick('quiet')}>
                                        <div className="w-10/11 justify-items-center">
                                            <p className="relative left-[9.6rem] weight-700 text-[1.3125rem]">🙅‍♂️ 조용한게 좋아요</p>
                                        </div>
                                        <div className="w-1/11">
                                            <img src={`${selected === 'quiet'
                                                ? '/images/icon/check_full.png' : '/images/icon/check_empty.png'}`}
                                                 className="w-[1.75rem] h-[1.75rem]" alt="v"/>
                                        </div>
                                    </div>

                                    <div className={`cursor-pointer hover:bg-[#FFEFD2] flex items-center justify-between border-2 rounded-[0.875rem] w-[31.25rem] py-[1.125rem] px-[1.25rem]
                                ${selected === 'nothing' ? 'border-[#FFA500] bg-[#FFEFD2]' : 'border-[#FFE0A8]'}`}
                                         onClick={() => handleClick('nothing')}>
                                        <div className="w-10/11 justify-items-center">
                                            <p className="relative left-[10.8rem] weight-700 text-[1.3125rem]">🤷‍♂️️ 상관 없어요</p>
                                        </div>
                                        <div className="w-1/11">
                                            <img src={`${selected === 'nothing'
                                                ? '/images/icon/check_full.png' : '/images/icon/check_empty.png'}`}
                                                 className="w-[1.75rem] h-[1.75rem]" alt="v"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[3rem] content-center">
                                <img className={`w-12 h-12 cursor-pointer
                                ${selected === null ? 'hidden' : 'block'}`}
                                     onClick={() => router.push('/survey5')}
                                     src="/images/icon/next_btn.png" alt="다음"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}