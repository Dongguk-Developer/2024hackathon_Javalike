import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {useRouter} from "next/router";
import React, { useState } from "react";

export default function reservationStatusPage() {
    const router = useRouter();
    const { phoneNumber } = router.query;
    
    const fetchPurchaseHistory = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:8081/sale/purchase-histories',
                params: {
                    phoneNumber: phoneNumber
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    // UseQuery
    const { data: purChaseHistoryData, error, isLoading } = useQuery({
        queryKey: ['purChaseHistory', phoneNumber],
        queryFn: fetchPurchaseHistory,
        enabled: !!phoneNumber,
        select: (data) => data.data,
        onSuccess: (purChaseHistoryData) => {
            console.log(purChaseHistoryData);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const fetchCampsiteReservations = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:8081/campsite-reservations',
                params: {
                    phoneNumber: phoneNumber
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    
    // UseQuery
    const { data: campsiteReservationData, errorCampsite, isLoadingCampsite } = useQuery({
        queryKey: ['campsiteReservations', phoneNumber],
        queryFn: fetchCampsiteReservations,
        enabled: !!phoneNumber,
        select: (data) => data.data,
        onSuccess: (campsiteReservationData) => {
            console.log(campsiteReservationData);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const fetchAccommodationReservation = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:8081/accommodation-reservations',
                params: {
                    phoneNumber: phoneNumber
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    
    // UseQuery
    const { data: accommodationReservationData, accommodationReservationError, isLoadingAccommodationReservation } = useQuery({
        queryKey: ['accommodationReservation', phoneNumber],
        queryFn: fetchAccommodationReservation,
        enabled: !!phoneNumber,
        select: (data) => data.data,
        onSuccess: (accommodationReservationData) => {
            console.log(accommodationReservationData);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    /**
     * 
     * 
     * 
     */
    return(

        <div className="flex flex-col items-center min-h-screen min-w-[76.6rem] bg-[#FFA500]">
            {/* 상단 메뉴 */}
            <div className="flex flex-col items-center">
                <h1 className="text-[2rem] weight-700 text-[white] pt-[4.15625rem]">경주의 밤 🌲</h1>
                <div className="flex gap-[1.371875rem] pt-[2.401875rem] pb-[2.1575rem] weight-700 text-[#FFA500]">
                    <button
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/certificationBoardList')}>SNS 인증게시판
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/quoteTalkList')}>견적톡
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/accommodateReservation')}>숙소 예약
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/campingReservation')}>캠핑장 예약
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/ingredientsDelivery')}>지역 재료 직배송
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
                        onClick={() => router.push('/reservationAuth')}>예약 조회
                    </button>
                </div>
            </div>

            {/* 컨텐츠 영역 */}
            <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen py-[3rem] bg-white">
                <div className='flex flex-col gap-3'>
                    <div className="flex flex-col gap-1">
                        <p className="text-[1.5rem] weight-700">나의 구매 현황</p>
                        <p className="text-[#404040] weight-500">구매 취소를 원하실 경우, 아래의 연락처로 연락해주세요</p>
                    </div>

                    <div className='flex flex-col w-[57.375rem]'>
                        {/* 리스트 */}

                        {(purChaseHistoryData&&purChaseHistoryData.purchaseHistories.length>0)?purChaseHistoryData.purchaseHistories.map((value,index)=>{
                    return(<div>
                        <div className='flex justify-between w-full gap-2 cursor-pointer px-[0.9375rem]'>
                            <div className='flex gap-7'>
                                <div className='flex flex-col justify-center'>
                                    <img src={value.salePostThumbnailPath}
                                            className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                </div>
                                <div className='flex justify-start w-auto'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-3 pt-[8px]'>
                                            <p className='weight-700 text-[1.2rem] text-[#FFA500]'>{value.category=="VEGETABLES"?"채소":value.category=="MEAT"?"육류":""}</p>
                                            <p className="weight-700 text-[1.2rem]">{value.sellerName}</p>
                                        </div>
                                        <p className='text-[0.875rem] text-[#404040] weight-500 max-w-[510px]'>
                                            {value.name}
                                        </p>
                                        <p className='text-[0.875rem] text-[#404040] weight-500 max-w-[510px]'>
                                            {value.phoneNumber}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end items-end'>
                                <button
                                    className="rounded-[0.5rem] weight-600 w-[5.3125rem] py-[0.3rem] bg-[#FFA500] text-[white] text-[0.875rem]">
                                    구매완료
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center py-[1.375rem]'>
                            <hr/>
                        </div>
                    </div>)
                }):<div className="flex justify-center">나의 구매 현황이 비었습니다</div>}
                <div className="flex flex-col gap-3 pb-3">
                    <p className="text-[1.5rem] weight-700">나의 캠핑 예약 현황</p>
                    <p className="text-[#404040] weight-500">캠핑 예약 취소를 원하실 경우, 해당 숙소로 문의해주세요.</p>
                </div>
                {(campsiteReservationData&&campsiteReservationData.campsiteReservations.length>0)?campsiteReservationData.campsiteReservations.map((value,index)=>{
                    return(<div>
                        <div className='flex justify-between w-full gap-2 cursor-pointer px-[0.9375rem]'>
                            <div className='flex gap-7'>
                                <div className='flex flex-col justify-center'>
                                    <img src={value.campsiteThumbnailPath}
                                            className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                </div>
                                <div className='flex justify-start w-auto'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-3 pt-[8px]'>
                                            <p className='weight-700 text-[1.2rem] text-[#FFA500]'>캠핑장</p>
                                            <p className="weight-700 text-[1.2rem]">{value.campsiteName}</p>
                                        </div>
                                        <p className='text-[0.875rem] text-[#404040] weight-500 max-w-[510px]'>
                                            {value.campsiteDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end items-end'>
                                <p className="text-[0.9rem] text-[#404040] weight-600">숙박일 {new Date(value.checkInDate).getMonth()+1}.{new Date(value.checkInDate).getDate()} ~ {new Date(value.checkOutDate).getMonth()+1}.{new Date(value.checkOutDate).getDate()}</p>
                                <button
                                    className="rounded-[0.5rem] weight-600 w-[5.3125rem] py-[0.3rem] bg-[#FFA500] text-[white] text-[0.875rem]">
                                    예약완료
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center py-[1.375rem]'>
                            <hr/>
                        </div>
                    </div>)
                }):<>나의 캠핑 예약 현황이 비었습니다</>}
                <div className="flex flex-col gap-3 pb-3">
                    <p className="text-[1.5rem] weight-700">나의 예약 현황</p>
                    <p className="text-[#404040] weight-500">예약 취소를 원하실 경우, 해당 숙소로 문의해주세요.</p>
                </div>

                {(accommodationReservationData&&accommodationReservationData.accomReservations.length>0)?accommodationReservationData.accomReservations.map((value,index)=>{
                    return(<div>
                        <div className='flex justify-between w-full gap-2 cursor-pointer px-[0.9375rem]'>
                            <div className='flex gap-7'>
                                <div className='flex flex-col justify-center'>
                                    <img src={value.accommodationThumbnailPath}
                                            className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                </div>
                                <div className='flex justify-start w-auto'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-3 pt-[8px]'>
                                            <p className='weight-700 text-[1.2rem] text-[#FFA500]'>숙소</p>
                                            <p className="weight-700 text-[1.2rem]">{value.accommodationName}</p>
                                        </div>
                                        <p className='text-[0.875rem] text-[#404040] weight-500 max-w-[510px]'>
                                            {value.accommodationDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end items-end'>
                                <p className="text-[0.9rem] text-[#404040] weight-600">숙박일 {new Date(value.checkInDate).getMonth()+1}.{new Date(value.checkInDate).getDate()} ~ {new Date(value.checkOutDate).getMonth()+1}.{new Date(value.checkOutDate).getDate()}</p>
                                <button
                                    className="rounded-[0.5rem] weight-600 w-[5.3125rem] py-[0.3rem] bg-[#FFA500] text-[white] text-[0.875rem]">
                                    예약완료
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center py-[1.375rem]'>
                            <hr/>
                        </div>
                    </div>)
                }):<>나의 예약 현황이 비었습니다</>}
                    </div>
                </div>
            </div>
        </div>

    )
}