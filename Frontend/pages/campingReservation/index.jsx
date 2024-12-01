import {useRouter} from "next/router";
import React, {useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

/**
 * Camping Reservation Page
 * @since 2024.11.25
 * @author 권민지
 */
export default function campingReservationPage() {
    const router = useRouter();
    const [page, setPage] = useState(0);

    // 캠핑장 데이터 반환
    const fetchCampingSites = async (page = 1) => {
        const response = await axios.get(`http://localhost:8081/reservation/campsites?pageNumber=${page}&size=5`);
        return response.data;
    }

    const {data, error, isLoading} = useQuery({
        queryKey: ['campingSites', page],
        queryFn: () => fetchCampingSites(page),
        select: (data) => data.data,
    });

    const handlePageClick = (newPage) => {
        setPage(newPage);
    }

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
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
                        className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
                        onClick={() => router.push('/campingReservation')}>캠핑장 예약
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/ingredientsDelivery')}>지역 재료 직배송
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/reservationAuth')}>예약 조회
                    </button>
                </div>
            </div>

            {/* 컨텐츠 영역 */}
            <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[1.3rem] bg-white">
                <div className='flex justify-center'>
                    <div className='flex flex-col rounded-[0.9125rem] py-[1.75rem] w-[57.375rem]'>
                        {/* 리스트 */}
                        {data ? (
                            data.campsites.map(campsite => (
                                <div key={campsite.id}>
                                    <div className='flex justify-between w-full gap-2 cursor-pointer px-[0.9375rem]'
                                         onClick={() => router.push(`/campingDetail/${campsite.id}`)}
                                    >
                                        <div className='flex gap-7'>
                                            <div className='flex flex-col justify-center'>
                                                <img src={campsite.thumbnailPath}
                                                     className="w-[12.5rem] h-[8.125rem] rounded-[0.875rem]"/>
                                            </div>
                                            <div className='flex justify-start w-auto'>
                                                <div className='flex flex-col'>
                                                    <div className='flex items-center gap-3 pt-[8px]'>
                                                        <p className="weight-700 text-[1.2rem]">{campsite.name}</p>
                                                        <p className='text-[0.9rem] weight-500'>⭐ {campsite.rating}</p>
                                                    </div>
                                                    <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                        {campsite.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-end'>
                                            <p className="text-[0.9rem] text-[#404040] weight-500">숙박 15:00 ~</p>
                                            <p className="text-[1.05rem] weight-800">{campsite.price.toLocaleString()}원</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center py-[1.375rem]'>
                                        <hr/>
                                    </div>
                                </div>
                            ))) : (
                            <div className="flex flex-col items-center p-10">캠핑장 데이터가 없습니다.</div>
                        )}

                        <div className='flex justify-center gap-2 cursor-pointer'>
                            {Array.from({length: data.totalPages}).map((_, index) => (
                                <p key={index}
                                   className={`text-[1rem] ${page === index ? 'weight-600' : 'text-[#6C6C6C] hover:text-black'}`}
                                   onClick={() => handlePageClick(index)}
                                >
                                    {index + 1}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}