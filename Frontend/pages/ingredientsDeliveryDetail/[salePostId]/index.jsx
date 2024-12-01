import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, {useEffect, useState, useRef} from "react";
import axios from "axios";

export default function ingredientsDeliveryDetailPage() {
    const router = useRouter();
    const { salePostId } = router.query;

    // 상태 관리
    const [openModal, setModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    /**
     * 데이터 반환
     */
    const fetchSalePostData = async () => {
        const response = await axios.get(`http://localhost:8081/sale/posts/${router.query.salePostId}`);
        return response.data;
      };

    // 구매 API 호출
    const handlePurchaseRequest = async () => {
        try {
            const response = await axios.post(`http://localhost:8081/sale/posts/${salePostId}/purchase`, {
                "phoneNumber": phoneNumber,
                "email": email,
                "price": data.price,
                "quantity": quantity
            });
            alert("구매가 완료되었습니다.  구매 현황을 조회하고 싶으신 경우, 예약/구매 조회 메뉴에서 확인해주세요!");
            setModal(false);
        } catch (error) {
            console.error("구매 중 오류 발생: ", error);
            alert("구매 중 오류가 발생했습니다. 다시 시도해주세요.");
        }

    }

    // UseQuery
    const { data, error, isLoading } = useQuery({
        queryKey: ['salePosts', salePostId],
        queryFn: fetchSalePostData,
        enabled: !!salePostId,
        select: (data) => data.data,
        onSuccess: (data) => {
            setTotalPrice(data.price * quantity);
        }
    });

    // 수량 변경 시 총 가격 변경
    useEffect(() => {
        if (data) {
            setTotalPrice(data.price * quantity);
        }
    }, [quantity, data]);

    /**
     * 이벤트 핸들러
     */
    // 입력값 유효성 검증
    const validateInputs = () => {
        if (!phoneNumber || !email) {
            setErrorMessage("전화번호와 이메일을 모두 입력해주세요.");
            return false;
        }
        setErrorMessage("");
        return true;
    }

    // 제출 입력 폼 유효성 검증
    const handleSubmit = () => {
        if (validateInputs()) {
            handlePurchaseRequest();
        }
    }

    // 수량 감소
    const handleMinusClick = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }

    // 수량 증가
    const handlePlusClick = () => {
        setQuantity((prev) => prev + 1);
    }

    // 모달 토글
    const toggleModal = () => {
        setModal(!openModal);
    }
    
    return (
        <div className="w-full">
            {openModal &&
                <div
                    className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
                    onClick={toggleModal}>
                    <div
                        className='w-[40rem] h-[30rem] bg-white shadow-lg border border-black rounded-[0.875rem]
                        flex flex-col items-center justify-center gap-6 px-[10.421875rem] pb-8'
                        onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <p className="weight-700 text-[1.375rem]">구매 요청</p>
                            {errorMessage && (
                                <p className="text-red-500 text-[0.875rem]">{errorMessage}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-3 mb-8">
                            <div className="flex flex-col">
                                <label className="text-[1rem] weight-700 pb-1">전화번호</label>
                                <input type="text"
                                       className="rounded-[0.7rem] w-[21.4878125rem] h-[2.8rem] bg-[#F1F1F1] px-[1.205rem]"
                                       placeholder="전화번호를 입력해주세요"
                                       value={phoneNumber}
                                       onChange={(e) => setPhoneNumber(e.target.value)}
                                ></input>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[1rem] weight-700 pb-1">이메일</label>
                                <input type="text"
                                       className="rounded-[0.7rem] w-[21.4878125rem] h-[2.8rem] bg-[#F1F1F1] px-[1.205rem]"
                                       placeholder="이메일을 입력해주세요"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                ></input>
                            </div>
                        </div>

                        <button
                            className="rounded-[0.5rem] weight-700 px-[7rem] py-[0.8rem] bg-[#FFA500] text-[1rem] text-[white]"
                            onClick={handleSubmit}>
                            구매하기
                        </button>
                    </div>
                </div>
            }

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
                <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[4rem] bg-white">
                    <div className='flex gap-16'>
                        <img src={data?.thumbnailPath} alt='campingDetail'
                             className='w-[25rem] h-[25rem] rounded-[0.875rem]'/>

                        <div className='flex flex-col justify-center gap-4'>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2.5">
                                        <p className="text-[1.5rem] weight-700">{data?.name}</p>
                                        <p className="text-[1.125rem] weight-600">⭐ ️{data?.rating}</p>
                                    </div>
                                    <p className="weight-500 text-[#404040] whitespace-pre-line">{data?.shortDescription}</p>
                                </div>

                                <div className="flex justify-between w-full items-end">
                                    <p className="weight-700 text-[1.25rem]">{totalPrice.toLocaleString()}원</p>

                                    <div className="flex justify-between items-center rounded-[0.6rem] border-[#989898] border w-[6rem]">
                                        <div className="cursor-pointer py-[0.3125rem] px-[0.7rem]"
                                            onClick={handleMinusClick}>
                                            <p className="weight-600 text-[#727B8B]">-</p>
                                        </div>
                                        <div className="flex gap-0.5">
                                            <p className="weight-600">{quantity}</p>
                                            <p className="text-[#727B8B] weight-500">개</p>
                                        </div>
                                        <div className="cursor-pointer py-[0.3125rem] px-[0.7rem]"
                                            onClick={handlePlusClick}>
                                            <p className="weight-500 text-[#727B8B]">+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center pb-[1rem]'>
                                <hr/>
                            </div>

                            <div className="flex flex-col gap-1 mb-[20px]">
                                <p className="text-[1.2rem] weight-700">상품 정보</p>
                                <p className="weight-500 text-[#404040] whitespace-pre-wrap">{data?.detailedDescription}</p>
                            </div>

                            <div className="flex flex-col gap-1 mb-[20px]">
                                <p className="text-[1.2rem] weight-700">판매자</p>
                                <p className="weight-500 text-[#404040]">{data?.sellerName}</p>
                            </div>

                            <button
                                className="rounded-[8px] weight-700 w-full py-[1rem] bg-[#FFA500] text-[white] text-[1.2rem]"
                                onClick={() => {
                                    toggleModal();
                                }}
                            >
                                구매하기
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}