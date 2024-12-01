import {useRouter} from 'next/router';
import React, { useState, useCallback,useEffect  } from 'react';
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

/**
 * certificationBoardListPage ui
 * @author 김이현
 */


export default function certificationBoardListPage() {


    const [selectedCategory,setSelectedCategory] = useState("ACCOMMODATION_VISIT");

    const router = useRouter();
    const [page, setPage] = useState(0);

    const handlePageClick = (newPage) => {
        setPage(newPage);
    }

    const fetchCertificationBoards = async (category, page) => {
        try {
            const response = await axios.get(`http://localhost:8081/sns-auth/posts/category/${category}?pageNumber=${page}&size=10`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const {data, error, isLoading} = useQuery({
        queryKey: ['certificationBoards', selectedCategory,page],
        queryFn: () => fetchCertificationBoards(selectedCategory, page),
        select: (data) => data.data,
    });



    useEffect(()=>{
        console.log(data);
    },[data]);
    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return(
        <>
            <div className="flex flex-col items-center min-h-screen min-w-[76.6rem] bg-[#FFA500]">
                {/* 상단 메뉴 */}
            <div className="flex flex-col items-center">
                <h1 className="text-[2rem] weight-700 text-[white] pt-[4.15625rem]">경주의 밤 🌲</h1>
                <div className="flex gap-[1.371875rem] pt-[2.401875rem] pb-[2.1575rem] weight-700 text-[#FFA500]">
                    <button
                        className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
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
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                        onClick={() => router.push('/reservationAuth')}>예약 조회
                    </button>
                </div>
            </div>

                <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[0.9375rem] bg-white">
                    <div className='flex justify-center'>
                        <div
                            className='flex flex-col rounded-[0.9125rem] py-[1.75rem] w-[57.375rem]'>
                            {/* 상단 카테고리, 글쓰기 */}
                            <div className='flex justify-between pb-8'>
                                <div className='flex justify-between gap-[1.1519rem]'>
                                    <div
                                        className={`flex 
                                        flex-col 
                                        justify-center 
                                        max-w-[8.25rem] 
                                        px-[.9063rem] 
                                        py-[0.25rem] 
                                        text-[.875rem] 
                                        border-2 
                                        border-solid 
                                        rounded-lg 
                                        hover:bg-[#FFEECE]
                                        cursor-pointer
                                        ${
                                            selectedCategory=="ACCOMMODATION_VISIT"?
                                            "text-[#F18304] border-[#F18304] bg-[#FFEECE]":
                                            "text-[#6C6C6C] hover:text-[#F18304] hover:border-[#F18304] border-[#6C6C6C]"
                                        }`}
                                        onClick={()=>{setSelectedCategory("ACCOMMODATION_VISIT")}}>숙소 방문 인증
                                    </div>
                                    <div
                                        className={`flex 
                                        flex-col 
                                        justify-center 
                                        max-w-[8.25rem] 
                                        px-[.9063rem] 
                                        py-[0.25rem] 
                                        text-[.875rem] 
                                        border-2 
                                        border-solid 
                                        rounded-lg 
                                        hover:bg-[#FFEECE]
                                        cursor-pointer
                                        ${
                                            selectedCategory=="WASTE_DISPOSAL"?
                                            "text-[#F18304] border-[#F18304] bg-[#FFEECE]":
                                            "text-[#6C6C6C] hover:text-[#F18304] hover:border-[#F18304] border-[#6C6C6C]"
                                        }`}
                                        onClick={()=>{setSelectedCategory("WASTE_DISPOSAL")}}>쓰레기 처리 인증
                                    </div>
                                </div>
                                <div
                                    className='border-2 border-solid border-[#000] rounded-lg text-[#000] py-1 px-4 cursor-pointer'
                                    onClick={() => router.push('/certificationBoard')}>글작성
                                </div>
                            </div>

                            {/* 후기글들 */}
                            {data && data.snsAuthPosts.length > 0 ? (
                                    data.snsAuthPosts.map(postdata => (
                                        <div key={postdata.id}>
                                            <div className='flex justify-between w-full gap-2 cursor-pointer'
                                                 onClick={() => router.push(`/certificationBoardDetail/${postdata?.id}`)}>
                                                <div className='flex gap-7'>
                                                    <div
                                                        className='flex flex-col justify-center text-[#FFA500]'>{postdata?.postType == "ACCOMMODATION_VISIT" ? "숙소 방문 인증" : "쓰레기 처리 인증"}</div>
                                                    <div className='flex justify-start w-auto'>
                                                        <div className='flex flex-col'>
                                                            <div className='flex gap-2'>
                                                                <div className='flex flex-col justify-center'>
                                                                    <p className="weight-600">{postdata?.title}</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className='text-[0.8rem] text-[#404040] w-max-[25rem]'>
                                                                {postdata?.contents?.length > 50
                                                                    ? `${postdata.contents.slice(0, 50)}...`
                                                                    : postdata.contents}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className='flex flex-col justify-center pr-[1.25rem] text-[#878787]'>
                                                    {new Date(postdata?.createdAt).toLocaleDateString().replaceAll(" ", "")}
                                                </div>
                                            </div>
                                            <div className='flex flex-col justify-center py-[1.375rem]'>
                                                <hr/>
                                            </div>
                                        </div>
                                ))) : (
                                <div className="flex flex-col items-center p-10">작성된 글이 없습니다.</div>
                                )}

                            <div className='flex justify-center gap-2 cursor-pointer'>
                                {Array.from({length: data?.totalPages}).map((_, index) => (
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
        </>
    )
}