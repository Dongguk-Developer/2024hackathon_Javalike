import {useRouter} from 'next/router';
import React, { useState } from 'react';
/**
 * allCoursesPage ui
 * @author 김이현
 */


export default function allCoursesPage() {
    const router = useRouter();

    const [openModal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!openModal)
    }

    return(
        <>

            <div
                className="flex flex-col items-center gap-[1.28875rem] bg-[#FFA500] min-h-screen min-w-[76.6rem] w-full">
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
                            className="rounded-[0.914375rem] weight-700 px-[2.078125rem] py-[0.595rem] bg-[#F18304] text-[white]"
                            onClick={() => router.push('/allCourses')}>코스 모두 보기
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] px-[4.364375rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/review')}>후기
                        </button>
                    </div>
                </div>
                <div
                    className="rounded-t-3xl flex flex-col items-center gap-[3rem] pt-[6rem] pb-[10rem] w-full min-h-screen bg-white"
                    onClick={() => {
                        toggleModal
                    }}>
                    <div className='flex justify-center'>
                        <div
                            className='flex flex-col bg-[#ffa500]/30 rounded-[0.9125rem] px-[2.473125rem] py-[1.75rem]'>
                            <div className='text-base text-[#303030] font-bold text-left mb-[1.151875rem]'>A코스</div>
                            <div className='flex justify-center gap-[1.75rem]'>
                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div
                            className='flex flex-col bg-[#ffa500]/30 rounded-[0.9125rem] px-[2.473125rem] py-[1.75rem]'>
                            <div className='text-base text-[#303030] font-bold text-left mb-[1.151875rem]'>A코스</div>
                            <div className='flex justify-center gap-[1.75rem]'>
                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div
                            className='flex flex-col bg-[#ffa500]/30 rounded-[0.9125rem] px-[2.473125rem] py-[1.75rem]'>
                            <div className='text-base text-[#303030] font-bold text-left mb-[1.151875rem]'>A코스</div>
                            <div className='flex justify-center gap-[1.75rem]'>
                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center h-[5.6109375rem]'>
                                        <div className='flex flex-col justify-center'>
                                            <img src="/images/icon/vector_right_brown.png"
                                                 className='w-[1rem] h-[0.9375rem]'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div
                                        className='flex justify-center bg-[#ffffff] w-[8.3125rem] h-[5.6109375rem] rounded-[0.875rem] mb-[0.8125rem]'>
                                        <img className='rounded-[0.875rem]'
                                             src="https://res.cloudinary.com/kyte/image/upload/w_1200,h_630,q_auto,e_sharpen:50,c_fill,g_auto/v1602500628/content/free/KR/gyeongju_1"/>
                                    </div>
                                    <div className='text-[0.665rem] mb-[0.4375rem] w-[8.3125rem]'>어쩌구</div>
                                    <p className='text-[#6D5221] text-[0.665rem] w-[8.3125rem]'>설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}