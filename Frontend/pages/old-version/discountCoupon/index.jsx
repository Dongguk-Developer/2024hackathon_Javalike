import {useRouter} from 'next/router';
import React, { useState } from 'react';
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";


/**
 * discountCoupon ui
 * @author 김이현
 */


export default function discountCouponPage() {
    const router = useRouter();

    const [openModal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!openModal)
    }

    return(
        <div className='w-full'>
        {openModal &&
            <div className='fixed top-0 left-0 w-full h-full bg-[#333333]/60 flex justify-center items-center z-99'
                 onClick={toggleModal}>
                    <div className='w-[42.809375rem] h-[30.09125rem] bg-white shadow-lg py-2 rounded-md flex flex-col px-[10.421875rem]'
                         onClick={(e) => e.stopPropagation()}>
                        <div className='flex justify-center pt-[2.451875rem]'>
                            <div className='bg-[#999999] w-[8.3125rem] h-[8.3125rem] rounded-full'></div>
                        </div>
                        <div className='flex justify-center mt-[1.16375rem] mb-[1.33rem] gap-1'>
                            <div className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                식품
                            </div>
                            <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                        </div>
                        <p className='w-[21.9865625rem]'>위치: 경상북도 경주시 ... 어디고 어쩌고</p>
                        <p className='w-[21.9865625rem] text-[#777]'>이 매장은 저쩌고</p>

                        <div className='flex justify-center mt-[2.66rem]'>
                            <div className='flex flex-col justify-center bg-[#F3F3F3] rounded-2xl w-[21.11375rem] h-[4.2809375rem] px-[2.95125rem] py-[0.62375rem] text-center text-[#272727] text-[1rem]'>
                                직원분에게 해당 쿠폰을 제시해주세요. 현장에서 즉시 할인됩니다.😊
                            </div>
                        </div>
                    </div>
            </div>
        }

            <div className="flex flex-col items-center justify-items-center w-full min-h-screen min-w-[76.6rem] bg-[#FFA500]">
                <div className="flex flex-col items-center">
                    <h1 className="text-[2rem] weight-700 text-[white] pt-[4.15625rem]">경주 맞춤형 관광지 코스 제공 서비스</h1>
                    <div className="flex gap-[1.371875rem] pt-[2.401875rem] pb-[2.1575rem] weight-700 text-[#FFA500]">
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] px-[1.745625rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/footingPost')}>SNS 인증게시판
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 px-[3.241875rem] py-[0.595rem] bg-[#F18304] text-[white]"
                            onClick={() => router.push('/discountCoupon')}>할인쿠폰
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] px-[2.078125rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/allCourses')}>코스 모두 보기
                        </button>
                        <button
                            className="rounded-[0.914375rem] weight-700 bg-[white] px-[4.364375rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                            onClick={() => router.push('/review')}>후기
                        </button>
                    </div>
                </div>
                <div
                    className="w-full min-h-screen flex flex-col gap-[2.410625rem] bg-[#ffffff] rounded-t-3xl px-[8.354375rem] pt-[6.026875rem]">
                    <div className='flex gap-[1.786875rem] justify-center'>
                        <div
                            className={`flex justify-between border border-solid border-[#D9D9D9] rounded-[0.914375rem] w-[30.465313125rem] h-[8.14625rem] ${openModal ? '' : 'cursor-pointer hover:opacity-80'}`}
                            onClick={() => {
                                toggleModal();
                            }}>
                            <div className='flex flex-col justify-center px-[1.07625rem]'>
                                <div className='bg-[#FF0000] w-[4.571875rem] h-[4.571875rem] rounded-full'></div>
                            </div>
                            <div className='flex flex-col justify-center w-[17.733125rem]'>
                                <div
                                    className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                    식품
                                </div>
                                <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                                <p className='text-[0.665rem] text-[#777]'>위치는 어디고 어쩌고</p>
                            </div>
                            <div className='flex flex-col w-[5.5rem] bg-[#FFA500]/60 rounded-r-[0.914375rem] justify-center'>
                                <div className='flex justify-center'>
                                    <FiDownload className='w-[1.5625rem] h-[1.3125rem] cursor-pointer text-[#F18304]'/>
                                    </div>
                                <div className='flex justify-center'>
                                    <div className='text-[#F18304] text-[0.914375rem]'>사용하기</div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex justify-between border border-solid border-[#D9D9D9] rounded-[0.914375rem] w-[30.465313125rem] h-[8.14625rem] ${openModal ? '' : 'cursor-pointer hover:opacity-80'}`} onClick={()=>{toggleModal();}}>
                            <div className='flex flex-col justify-center px-[1.07625rem]'>
                                <div className='bg-[#FF0000] w-[4.571875rem] h-[4.571875rem] rounded-full'></div>
                            </div>
                            <div className='flex flex-col justify-center w-[17.733125rem]'>
                                <div className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                    식품
                                </div>
                                <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                                <p className='text-[0.665rem] text-[#777]'>위치는 어디고 어쩌고</p>
                            </div>
                            <div className='flex flex-col w-[5.5rem] bg-[#FFA500]/60 rounded-r-[0.914375rem] justify-center'>
                                <div className='flex justify-center'>
                                    <FiDownload className='w-[1.5625rem] h-[1.3125rem] cursor-pointer text-[#F18304]'/>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='text-[#F18304] text-[0.914375rem]'>사용하기</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[1.786875rem] justify-center'>
                        <div className={`flex justify-between border border-solid border-[#D9D9D9] rounded-[0.914375rem] w-[30.465313125rem] h-[8.14625rem] ${openModal ? '' : 'cursor-pointer hover:opacity-80'}`} onClick={()=>{toggleModal();}}>
                            <div className='flex flex-col justify-center px-[1.07625rem]'>
                                <div className='bg-[#FF0000] w-[4.571875rem] h-[4.571875rem] rounded-full'></div>
                            </div>
                            <div className='flex flex-col justify-center w-[17.733125rem]'>
                                <div className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                    식품
                                </div>
                                <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                                <p className='text-[0.665rem] text-[#777]'>위치는 어디고 어쩌고</p>
                            </div>
                            <div className='flex flex-col w-[5.5rem] bg-[#FFA500]/60 rounded-r-[0.914375rem] justify-center'>
                                <div className='flex justify-center'>
                                    <FiDownload className='w-[1.5625rem] h-[1.3125rem] cursor-pointer text-[#F18304]'/>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='text-[#F18304] text-[0.914375rem]'>사용하기</div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex justify-between border border-solid border-[#D9D9D9] rounded-[0.914375rem] w-[30.465313125rem] h-[8.14625rem] ${openModal ? '' : 'cursor-pointer hover:opacity-80'}`} onClick={()=>{toggleModal();}}>
                            <div className='flex flex-col justify-center px-[1.07625rem]'>
                                <div className='bg-[#FF0000] w-[4.571875rem] h-[4.571875rem] rounded-full'></div>
                            </div>
                            <div className='flex flex-col justify-center w-[17.733125rem]'>
                                <div className='flex flex-col justify-center border border-solid border-[#FFA500] rounded-lg w-[2.576875rem] h-[1.413125rem] text-center text-[#FFA500] text-[0.75rem]'>
                                    식품
                                </div>
                                <div className='text-base font-bold'>어디 국밥집 110% 할인</div>
                                <p className='text-[0.665rem] text-[#777]'>위치는 어디고 어쩌고</p>
                            </div>
                            <div className='flex flex-col w-[5.5rem] bg-[#FFA500]/60 rounded-r-[0.914375rem] justify-center'>
                                <div className='flex justify-center'>
                                    <FiDownload className='w-[1.5625rem] h-[1.3125rem] cursor-pointer text-[#F18304]'/>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='text-[#F18304] text-[0.914375rem]'>사용하기</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}