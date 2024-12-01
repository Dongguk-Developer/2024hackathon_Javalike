import {useRouter} from 'next/router';
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";

/**
 * reviewDetailPage ui
 * @author 김이현
 */


export default function reviewDetailPage() {
    const router = useRouter();



    return(
        <>

            <div className="flex flex-col gap-[1.28875rem] bg-[#FFA500] min-w-[76.6875rem]">
                <div className="flex flex-col items-center gap-1 pt-[4.15625rem] pb-[1.113125rem]">
                    <p className="text-center text-[2.0625rem] weight-700 text-white leading-[3.375rem]">
                        경주 맞춤형 관광지 코스 제공 서비스
                    </p>
                </div>

                <div className="flex flex-col items-center gap-[1.28875rem]">
                    <div className="flex justify-center gap-[1.371875rem] pb-[0.86875rem]">
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#F18304] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/footingPost')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base text-[#FFA500] weight-700 text-[0.914375rem]">발자국 해시태그</p>
                            </div>
                        </div>

                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#F18304] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/discountCoupon')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base	text-[#FFA500] weight-700 text-[0.914375rem]">할인 쿠폰</p>
                            </div>
                        </div>
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer hover:bg-[#F18304] flex justify-center bg-white rounded-[0.875rem]"
                            onClick={() => router.push('/allCourses')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base text-[#FFA500] weight-700 text-[0.914375rem]">코스 모두 보기</p>
                            </div>
                        </div>
                        <div className="w-[10.7646875rem] h-[2.846875rem] cursor-pointer bg-[#F18304] hover:text-[#FFA500] hover:bg-[#FFF] flex justify-center rounded-[0.875rem]"
                            onClick={() => router.push('/review')}>
                            <div className='flex flex-col justify-center'>
                                <p className="text-base	text-[#FFF] weight-700 hover:text-[#FFA500] text-[0.86rem]">후기</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col min-h-screen min-w-[76.6rem] w-full gap-[3.11125rem] bg-[#ffffff] rounded-t-[1.33125rem] px-[8.354375rem] pb-[18.370625rem] pt-[3.075625rem]">
                        <div className='flex justify-center'>
                            <div className='flex flex-col rounded-[0.9125rem] px-[2.473125rem] py-[1.75rem] min-w-[50rem] w-[57.8555375rem]'>
                                <div className='flex justify-between gap-2'>
                                    <div className='flex gap-4'>
                                        <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                        <div className='flex justify-start w-auto'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-[0.794375rem]'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787] text-[0.665rem]'>24.11.10</div>
                                </div>
                                <div className='flex flex-col justify-center py-[1.375rem]'>
                                    <hr/>
                                </div>

                                <div className='text-[0.665rem] text-[#404040] w-max-[25rem] pb-[6.15125rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박</div>

                                <div className='flex justify-center'>
                                    <div className='flex flex-col justify-center gap-1 pt-[0.125rem] pb-[0.25rem] px-[0.625rem] border-2 border-solid border-[#6C6C6C] rounded-lg w-[3.5596875rem]'>
                                        <div className='flex justify-center'>
                                            <AiOutlineLike className='w-[2.875rem]'/>
                                        </div>
                                        <div className='flex justify-center'>
                                            <div className='text-[0.665rem]'>추천</div>
                                        </div>
                                    </div>
                                </div>

                                {/* 구분선 */}
                                <div className='flex flex-col justify-center pt-[0.375rem] pb-[1.625rem]'>
                                    <hr/>
                                </div>

                                {/* 의견 헤더 */}
                                <div className='flex gap-2'>
                                    <div className='flex flex-col justify-center'>
                                        <div>의견</div>
                                    </div>
                                    <div className='flex flex-col justify-end'>
                                        <div className='text-[0.665rem] text-[#878787]'>4개</div>
                                    </div>
                                </div>

                                {/* 의견 */}
                                <div className='flex gap-3 pt-2'>
                                    <div className='flex flex-col justify-center'>
                                        <img src="/images/icon/profile.png" className='w-6 h-6'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-[0.665rem] text-[#878787]'>24.11.20</div>
                                        <div className='text-[0.665rem] text-[#404040]'>대박이긴 하네...</div>
                                    </div>
                                </div>

                                <div className='flex gap-3 pt-2'>
                                    <div className='flex flex-col justify-center'>
                                        <img src="/images/icon/profile.png" className='w-6 h-6'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-[0.665rem] text-[#878787]'>24.11.20</div>
                                        <div className='text-[0.665rem] text-[#404040]'>대박이긴 하네...</div>
                                    </div>
                                </div>

                                <div className='flex gap-3 pt-2'>
                                    <div className='flex flex-col justify-center'>
                                        <img src="/images/icon/profile.png" className='w-6 h-6'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-[0.665rem] text-[#878787]'>24.11.20</div>
                                        <div className='text-[0.665rem] text-[#404040]'>대박이긴 하네...</div>
                                    </div>
                                </div>

                                <div className='flex gap-2 pt-7 pb-[0.75rem]'>
                                    <div className='flex flex-col justify-center'>
                                        <div>의견작성</div>
                                    </div>
                                </div>
                                <textarea className='bg-[#F4F4F4] rounded-[0.9125rem] p-4 pb-16 resize-none' placeholder='의견을 작성해주세요'></textarea>
                                <div className='flex justify-end pt-2'>
                                    <div className='px-4 py-2 rounded-[0.5rem] bg-[#FFA500] text-[#FFF]'>등록</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}