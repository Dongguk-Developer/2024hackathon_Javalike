import {useEffect, useState, useRef} from 'react';
import {router} from 'next/client';

/**
 * analysis complete Page
 * @since 2024.11.19
 * @author 권민지
 */
export default function analysisCompletePage() {

    return (
        <div
            className="flex flex-col items-center bg-[#FFA500] h-screen min-w-[76.6875rem] justify-items-center content-center">
            <div className="w-[76.6875rem]">
                <div className="flex flex-col items-center gap-20">
                    <div className="flex flex-col gap-8 w-[76.6875rem] pt-[6rem] items-center">
                        <div className="flex flex-col gap-[0.625rem]">
                            <p className="text-center text-[2.75rem] weight-700 text-white">
                                분석 완료 🎉
                            </p>
                            <p className="text-center weight-500 text-white text-[1.3125rem]">
                                당신을 위한 맞춤형 코스 분석이 성공적으로 완료되었어요.<br/>
                                코스 분석을 확인하고 태그 이벤트를 통해 다양한 상품도 받아가세요!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-[5.9375rem] w-screen bg-white rounded-t-3xl pt-20"
                         style={{minHeight: 'calc(100vh - 19.6875rem)', minWidth: '76.6875rem'}}>
                        <div className="flex flex-col gap-7">
                            <p className="weight-600 text-center text-[1.3125rem]">당신에게 어울리는 코스는?</p>

                            <div className="rounded-[0.875rem] bg-[#F3F3F3] px-[4.375rem] py-[1.25rem]">
                                <p className="weight-800 text-center text-[2rem]">A 코스 추천!</p>
                            </div>
                        </div>

                        <div className="flex gap-20">
                            <div className="cursor-pointer hover:bg-[#FFEFD2] rounded-[0.875rem] border-[#FFA500] border-2 px-[5.625rem] py-[1.375rem]"
                                 onClick={() => router.push('/allCourses')}>
                                <p className="weight-700 text-center text-[1.3125rem] text-[#F70]">모든 코스 확인하기</p>
                            </div>
                            <div className="cursor-pointer hover:bg-[#FFEFD2] rounded-[0.875rem] border-[#FFA500] border-2 px-[5.625rem] py-[1.375rem]"
                                 onClick={() => router.push('/event')}>
                                <p className="weight-700 text-center text-[1.3125rem] text-[#F70]">태그 이벤트 참여하기</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}