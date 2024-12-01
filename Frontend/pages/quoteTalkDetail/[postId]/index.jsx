import {useRouter} from 'next/router';
import React, {useCallback, useState} from 'react';
import { CgProfile } from "@react-icons/all-files/cg/CgProfile"
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike"
import axios from "axios";
import {useMutation, useQuery} from "@tanstack/react-query";
/**
 * quoteTalkDetailPage ui
 * @author 김이현
 */
export default function quoteTalkDetailPage() {
    const router = useRouter();
    const { postId } = router.query;
    const [userComment,setUserComment] = useState("");

    const fetchQuoteTalkDetail = useCallback(async (postId) => {
        if (!postId) return Promise.resolve(null);
        try {
            const response = await axios.get(
                `http://localhost:8081/estimate-talk/posts/${postId}`
            );

            return response.data;
        } catch (error) {
            throw error;
        }
    }, [postId]);

    const fetchQuoteTalkComments = useCallback(async (postId) =>{
        if(!postId) return Promise.resolve(null);
        try{
            const response = await axios.get(
                `http://localhost:8081/estimate-talk/posts/${postId}/comments`
            );
            console.log(response)

            return response.data;
        } catch(error){
            throw error;
        }
    }, [postId])

    const {data:CommentsData, errorComments, isLoadingComments,refetch} = useQuery({
        queryKey: ['quoteTalkComments', postId],
        queryFn: () => fetchQuoteTalkComments(postId),
        select: (CommentsData) => CommentsData.data,
    });


    const {data, error, isLoading} = useQuery({
        queryKey: ['quoteTalkDetail', postId],
        queryFn: () => fetchQuoteTalkDetail(postId),
        select: (data) => data.data,
    });

    const createComment = async () => {
        try {
            const response = await axios.post(
                `http://localhost:8081/estimate-talk/posts/${postId}/comments`,
                {
                    "author": "익명",
                    "contents": userComment
                }
            );
        } catch (error) {
            alert("의견 작성에 실패했습니다.");
            throw error;
        }
    }

    const mutation = useMutation(createComment, {
        onSuccess: (e) => {
            setUserComment("");
            refetch();
        },
        onError: (error) => console.error("에러 발생:", error.message),
        onSettled: () => console.log("결과에 관계 없이 무언가 실행됨"),
    });

    return(
        <>

            <div className="flex flex-col gap-[1.28875rem] bg-[#FFA500] min-w-[76.6875rem]">

                <div className="flex flex-col items-center gap-[1.28875rem]">
                    <div className="flex flex-col items-center">
                        <h1 className="text-[2rem] weight-700 text-[white] pt-[4.15625rem]">경주의 밤 🌲</h1>
                        <div className="flex gap-[1.371875rem] pt-[2.401875rem] pb-[2.1575rem] weight-700 text-[#FFA500]">
                            <button
                                className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                                onClick={() => router.push('/accommodateReservation')}>SNS 인증게시판
                            </button>

                            <button
                                className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
                                onClick={() => router.push('/quoteTalkList')}>견적톡
                            </button>
                            <button
                                className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
                                onClick={() => router.push('/certificationBoardList')}>숙소 예약
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
                    <div className="flex flex-col min-h-screen min-w-[925px] w-full gap-[3.11125rem] bg-[#ffffff] rounded-t-[1.33125rem] px-[8.354375rem] pb-[18.370625rem] pt-[3.075625rem]">
                        <div className='flex justify-center'>
                            <div className='flex flex-col rounded-[0.9125rem] px-[2.473125rem] py-[1.75rem] w-full max-w-[925px]'>
                                <div className='flex justify-between gap-2'>
                                    <div className='flex gap-4'>
                                        <div className='flex justify-start w-auto'>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-col justify-center'>
                                                    <div>{data?.title}</div>
                                                </div>
                                                <div className='flex flex-col justify-end'>
                                                    <div className='text-[0.8rem] text-[#878787]'>의견 {CommentsData?.totalElements}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center pr-[1.25rem] text-[#878787] text-[0.7rem]'>{new Date(data?.createAt).toLocaleDateString().replaceAll(" ","")}</div>
                                </div>
                                <div className='flex flex-col justify-center py-[1.375rem]'>
                                    <hr/>
                                </div>

                                <div className='text-[0.9rem] text-[#404040] w-max-[925px] pb-[6.15125rem] whitespace-pre-wrap'>{data?.contents}</div>


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
                                        <div className='text-[0.8rem] text-[#878787]'>{CommentsData?.totalElements}개</div>
                                    </div>
                                </div>

                                {/* 의견 */}

                                {CommentsData?.posts.map((comment, index) => {
                                    return (
                                        <div className='flex gap-3 pt-2'>
                                            <div className='flex flex-col justify-start'>
                                                <img src="/images/icon/profile.png" className='w-6 h-6'/>
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='text-[0.8rem] text-[#878787]'>{new Date(comment.createdAt).toLocaleDateString().replaceAll(" ","")}</div>
                                                <div className='text-[0.8rem] text-[#404040] whitespace-pre-wrap'>{comment.contents}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className='flex gap-2 pt-7 pb-[0.75rem]'>
                                    <div className='flex flex-col justify-center'>
                                        <div>의견작성</div>
                                    </div>
                                </div>
                                <textarea className='bg-[#F4F4F4] rounded-[0.9125rem] p-4 pb-16 resize-none' placeholder='의견을 작성해주세요'
                                          onInput={(e)=>{setUserComment(e.target.value)}} value={userComment}></textarea>
                                <div className='flex justify-end pt-2' onClick={()=>{mutation.mutate();}}>
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