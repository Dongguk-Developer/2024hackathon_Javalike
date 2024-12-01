import {useRouter} from 'next/router';

export default function homePage() {
    const router = useRouter();

    return(
        <div className="flex flex-col bg-[#FFA500] w-screen h-screen min-w-[76.6875rem] min-h-[38.875rem] items-center justify-center content-center">
            <div className="flex flex-col w-[76.6875rem] gap-[3.125rem] pb-[1rem] pt-[7.75rem]">
                <div className="flex flex-col items-center gap-5">
                    <p className="text-center text-[2.75rem] weight-700 text-white leading-[3.375rem]">
                        경주의 밤🌲
                    </p>
                    <div>
                        <p className="text-center text-[1.5rem] weight-500 text-white leading-[1.9375rem]">
                            낭만 한옥, 자연 속 캠핑, 황리단길의 맛집 밀키트까지!
                        </p>
                        <p className="text-center text-[1.5rem] weight-500 text-white leading-[1.9375rem]">
                            경주에서 새로운 경험과 가치를 만들어 보세요.
                        </p>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-[5.625rem]">
                    <div className="cursor-pointer hover:bg-[#f3efe7] flex items-center gap-[.375rem] bg-white py-4 px-14 rounded-[.875rem]"
                         style={{boxShadow: "0rem .8728rem 1.6625rem .0831rem #C7760D"}}
                         onClick={() => router.push('/accommodateReservation')}
                    >
                        <p className="text-[1.3125rem] text-[#FF7700] weight-700">경주 여정 떠나기</p>
                        <img src="/images/icon/vector_right_orange.png"
                             className="w-[.9375rem] h-[.9375rem]" alt="->"/>
                    </div>

                    <div className="flex flex-col gap-2.5 px-8 pb-10">
                        <div className="flex gap-[.0625rem] items-start justify-between max-w-[68.75rem] text-[#FFF] h-[12.125rem]">
                            <div className='w-[22.875rem]'>
                                <div className="flex flex-col text-center">
                                    <div className='text-[1.375rem] font-bold leading-[1.9375rem]'>POINT 1</div>
                                    <div className='text-[1.375rem] font-bold leading-[1.9375rem]'>지역 농가와의 직거래로</div>
                                    <div className='text-[1.375rem] font-bold leading-[1.9375rem] pb-[.75rem]'>신선한 식자재를 저렴하게 직배송!</div>
                                    <div className='text-[1rem] font-medium leading-[1.625rem]'>농가의 신선함을 담은 식재료를</div>
                                    <div className='text-[1rem] font-medium leading-[1.625rem]'>빠르고 저렴하게 즐길 수 있어요.</div>
                                </div>
                            </div>
                            <div className='w-[22.875rem] border-x border-white'>
                                <div className="flex flex-col text-center">
                                    <div className='text-[1.375rem] font-bold leading-[1.9375rem]'>POINT 2</div>
                                    <div className='text-[1.375rem] font-bold leading-[1.9375rem]'>숙소 예약부터 식자재,</div>
                                    <div className='text-[1.375rem] font-bold leading-[1.9375rem] pb-[.75rem]'>밀키트까지 원스톱으로!</div>
                                    <div className='text-[1rem] font-medium leading-[1.625rem]'>숙소 예약과 함께 식자재 배송, 밀키트 구매</div>
                                    <div className='text-[1rem] font-medium leading-[1.625rem]'>서비스를 원스톱으로 제공받으실 수 있어요.</div>
                                    <div className='text-[1rem] font-medium leading-[1.625rem]'>AI 기반 메뉴 추천은 덤!</div>
                                </div>
                            </div>
                            <div className='w-[22.875rem]'>
                                <div className="flex flex-col text-center">
                                    <div className='text-[1.375rem] font-bold leading-[1.9375rem]'>POINT 3</div>
                                    <div className='text-[1.375rem] font-bold leading-[1.9375rem]'>내가 남긴 건 추억,</div>
                                    <div className='text-[1.375rem] font-bold leading-[1.9375rem] pb-[.75rem]'>경주에 남긴 건 깨끗함!</div>
                                    <div className='text-[1rem] font-medium leading-[1.625rem]'>쓰레기 처리 인증 이벤트로</div>
                                    <div className='text-[1rem] font-medium leading-[1.625rem]'>깨끗한 여행 문화를 함께 만들어가요.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}