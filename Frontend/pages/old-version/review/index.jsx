import {useRouter} from 'next/router';
import React, { useState } from 'react';
/**
 * reviewPage ui
 * @author 김이현
 */


export default function reviewPage() {
    const router = useRouter();

    const [openModal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!openModal)
    }

    return(
        <>
            <div className="flex flex-col items-center min-h-screen min-w-[76.6rem] bg-[#FFA500]">
                <div className="flex flex-col items-center">
                    <h1 className="text-[2rem] weight-700 text-[white] pt-[4.15625rem]">경주 맞춤형 관광지 코스 제공 서비스</h1>
                    <div className="flex gap-[1.371875rem] pt-[2.401875rem] pb-[2.1575rem] weight-700 text-[#FFA500]">
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] px-[1.745625rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/footingPost')}>SNS 인증게시판
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] px-[3.241875rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/discountCoupon')}>할인쿠폰
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] px-[2.078125rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/allCourses')}>코스 모두 보기
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 px-[4.364375rem] py-[0.595rem] bg-[#F18304] text-[white]"
                            onClick={() => router.push('/review')}>후기
                        </button>
                    </div>
                </div>

                <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[0.9375rem] bg-white"
                     onClick={() => {
                         toggleModal
                     }}>
                    <div className='flex justify-center'>
                        <div
                            className='flex flex-col rounded-[0.9125rem] py-[1.75rem] w-[57.375rem]'>
                            {/* 상단 카테고리, 글쓰기 */}
                            <div className='flex justify-between pb-8'>
                                <div className='flex justify-between gap-4'>
                                    <div
                                        className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>식당
                                    </div>
                                    <div
                                        className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>숙박
                                    </div>
                                    <div
                                        className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>전시
                                    </div>
                                </div>
                                <div
                                    className='border-2 border-solid border-[#000] rounded-lg text-[#000] py-1 px-4 cursor-pointer'
                                    onClick={() => router.push('/reviewWrite')}>글작성
                                </div>
                            </div>

                            {/* 후기글들 */}
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>
                            <div className='flex justify-between w-full gap-2 cursor-pointer'>
                                <div className='flex gap-7'>
                                    <div className='flex flex-col justify-center text-[#FFA500]'>식당 후기</div>
                                    <div className='flex justify-start w-auto'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>진짜 대박이에요</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='flex gap-1'>
                                                        <div className='text-[0.665rem] text-[#878787]'>추천 34</div>
                                                        <div className='text-[0.665rem] text-[#878787]'>의견 34</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className='text-[0.665rem] text-[#404040] w-max-[25rem]'>아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박아무튼대박
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>24.11.10
                                </div>
                            </div>
                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                <hr/>
                            </div>


                            <div className='flex justify-center gap-2 cursor-pointer'>
                                <div className='text-[0.665rem] text-base'>1</div>
                                <div className='text-[0.665rem] text-base'>2</div>
                                <div className='text-[0.665rem] text-base'>3</div>
                                <div className='text-[0.665rem] text-base'>4</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}