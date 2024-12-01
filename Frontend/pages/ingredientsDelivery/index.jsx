import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

/**
 * Ingredients Delivery Page
 * @since 2024.11.25
 * @author 권민지
 */
export default function ingredientsDeliveryPage() {
    const router = useRouter();
    const [category, setCategory] = useState('VEGETABLES');
    const [page, setPage] = useState(0);

    // 지역 재료 데이터 반환
    const fetchIngredients = async (category, page) => {
        const response = await axios.get(`http://localhost:8081/sale/posts/category/${category}?pageNumber=${page}&size=5`);
        return response.data;
    }

    const {data, error, isLoading} = useQuery({
        queryKey: ['ingredients', category, page],
        queryFn: () => fetchIngredients(category, page),
        select: (data) => data.data
    });

    const handlePageClick = (newPage) => {
        setPage(newPage);
    }

    const handleCategoryClick = (newCategory) => {
        setCategory(newCategory);
        setPage(0);
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
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/campingReservation')}>캠핑장 예약
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
                        onClick={() => router.push('/ingredientsDelivery')}>지역 재료 직배송
                    </button>
                    <button
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/reservationAuth')}>예약 조회
                    </button>
                </div>
            </div>

            {/* 컨텐츠 영역 */}
            <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[2.5rem] bg-white">
                <div className='flex flex-col justify-center'>
                    {/* 상단 카테고리, 맞춤형 식사 추천 받으러가기 */}
                    <div className='flex justify-between px-1.5 pb-8'>
                        <div className='flex justify-between gap-4'>
                            {['VEGETABLES', 'FRUITS', 'MEAT', 'MEAL_KIT'].map((cat) => (
                                <div
                                    key={cat}
                                    className={`${
                                        category === cat
                                            ? 'text-[#F18304] bg-[#FFEECE] border-[#F18304]'
                                            : 'text-[#6C6C6C] border-[#6C6C6C] hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'
                                    } w-[5.375rem] py-[0.25rem] border-2 border-solid rounded-lg text-center weight-600`}
                                    onClick={() => handleCategoryClick(cat)}
                                >
                                    {cat === 'VEGETABLES' && '채소'}
                                    {cat === 'FRUITS' && '과일'}
                                    {cat === 'MEAT' && '정육'}
                                    {cat === 'MEAL_KIT' && '밀키트'}
                                </div>
                            ))}
                        </div>
                        <div
                            className='border-2 border-solid border-[#FFA500] rounded-lg text-[#FFA500] py-[0.25rem] px-4 text-center weight-700
                            hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'
                            onClick={() => router.push('/survey1')}>맞춤형 식사 추천 받으러가기
                        </div>
                    </div>
                    <div className='flex flex-col rounded-[0.9125rem] w-[57.375rem] pb-[5rem]'>
                        {/* 리스트 */}
                        {data ? (
                            data.salePostsByCategory.map(salePost => (
                                <div key={salePost.id}>
                                    <div className='flex justify-between w-full gap-2 cursor-pointer px-[0.9375rem]'
                                         onClick={() => router.push(`/ingredientsDeliveryDetail/${salePost.id}`)}
                                    >
                                        <div className='flex gap-7'>
                                            <div className='flex flex-col justify-center'>
                                                <img
                                                    src={salePost.thumbnailPath}
                                                    className="w-[9rem] h-[8.125rem] rounded-[0.875rem]"/>
                                            </div>
                                            <div className='flex justify-start w-auto'>
                                                <div className='flex flex-col'>
                                                    <div className='flex items-center gap-3 pt-[8px]'>
                                                        <p className="weight-700 text-[1.2rem]">{salePost.name}</p>
                                                        <p className='text-[0.9rem] weight-500'>⭐ {salePost.rating}</p>
                                                    </div>
                                                    <p className='text-[0.875rem] text-[#404040] weight-500'>
                                                        {salePost.shortDescription}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-end'>
                                            <p className="text-[0.9rem] text-[#404040] text-end weight-500">{salePost.sellerName}</p>
                                            <p className="text-[1.05rem] weight-800">{salePost.price.toLocaleString()}원</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center py-[1.375rem]'>
                                        <hr/>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center p-10">지역 재료 데이터가 없습니다.</div>
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