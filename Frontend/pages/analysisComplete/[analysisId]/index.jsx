import {useEffect, useState, useRef} from 'react';
import {router} from 'next/client';


export default function analysisCompletePage() {
    const images = ["/images/analysisThumbs/sausage.png"]

    const [recommendImage,setRecommendImage] = useState("");
    const [recommendName,setRecommendName] = useState("");


    const foodNames = ['',
        '모츠나베',
        '부대찌개',
        '닭볶음탕',
        '바베큐',
        '대파닭꼬치',
        '두루치기',
        '어묵탕',
        '홍합탕',
        '매운탕',
        '감바스',
        '조개/새우구이',
        '골뱅이무침&소면',
        '밀푀유 나베',
        '샤브샤브&칼국수',
        '파스타',
        '소세지 야채볶음',
        '타코'
        ]


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
                                당신을 위한 맞춤형 메뉴 분석이 성공적으로 완료되었어요.<br/>
                                직배송되는 신선한 재료를 구매하고, 태그 이벤트를 통해 다양한 상품도 받아가세요!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-[5.9375rem] w-screen bg-white rounded-t-3xl pt-20 pb-[1.1939rem]"
                         style={{minHeight: 'calc(100vh - 19.6875rem)', minWidth: '76.6875rem'}}>
                        <div className="flex flex-col gap-7">
                            <p className="weight-600 text-center text-[1.7125rem]">당신이 찾던 식사는?</p>
                            <div className='flex justify-center'>
                                <img className="w-[22.25rem] h-auto" src={`/images/foods/${router?.query.analysisId}.jpg`}></img>
                            </div>
                            <div className="rounded-[0.875rem] bg-[#F3F3F3] px-[4.375rem] py-[1.25rem]">
                                <p className="weight-800 text-center text-[2rem]">{`${foodNames[router?.query.analysisId]}`} 추천!</p>
                            </div>
                        </div>

                        <div className="flex gap-20">
                            <div className="cursor-pointer hover:bg-[#FFEFD2] rounded-[0.875rem] border-[#FFA500] border-2 px-[5.625rem] py-[1.375rem]"
                                 onClick={() => router.push('/ingredientsDelivery')}>
                                <p className="weight-700 text-center text-[1.3125rem] text-[#F70]">신선한 재료 사러가기</p>
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