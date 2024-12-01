import React, {useCallback, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * 숙소 예약 상세 페이지
 * @author 권민지
 */
export default function AccommodateReservationDetailPage() {
    const router = useRouter();
    const { accommodationId } = router.query;

    // 상태 관리
    const [openModal, setModal] = useState(false);
    const [checkinDate, setCheckinDate] = useState(new Date());
    const [checkoutDate, setCheckoutDate] = useState(new Date());
    const [totalPrice, setTotalPrice] = useState(0);
    const [availableRooms, setAvailableRooms] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // 최신 상태 관리용 Ref
    const checkinDateRef = useRef(checkinDate);
    const checkoutDateRef = useRef(checkoutDate);

    /**
     * 유틸리티 함수
     */
    // 날짜를 시간 없이 처리
    const resetTime = (date) => {
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    };

    // 날짜 형식 변환
    const formatDate = (date) => {
        return date.toLocaleDateString('en-CA');
    }

    // 입력값 유효성 검증
    const validateInputs = () => {
        if (!phoneNumber || !email) {
            setErrorMessage("전화번호와 이메일을 모두 입력해주세요.");
            return false;
        }
        setErrorMessage("");
        return true;
    }

    /**
     * 데이터 반환
     */
    // 숙소 예약 상세 데이터 반환
    const fetchAccommodateReservationDetail = useCallback(async () => {
        if (!accommodationId) return Promise.resolve(null);

        try {
            const response = await axios.get(
                `http://localhost:8081/reservation/accommodations/${accommodationId}`
            );

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }, [accommodationId]);

    // 남은 방 수 조회 데이터 반환
    const fetchAvailableRooms = async () => {
        if (!accommodationId || !checkinDate || !checkoutDate) return Promise.resolve(null);

        try {
            const response = await axios.get(
                `http://localhost:8081/reservation/accommodations/${accommodationId}/available-rooms`, {
                    params: {
                        checkInDate: formatDate(checkinDate),
                        checkOutDate: formatDate(checkoutDate)
                    }
                }
            );
            setAvailableRooms(response.data.data);
        } catch (error) {
            console.error("남은 방 수 조회 오류:", error);
        }
    }

    // 예약 API 호출
    const handleReservationRequest = async () => {
        try {
            const response = await axios.post(
                `http://localhost:8081/reservation/accommodations/${accommodationId}`, null, {
                    params: {
                        checkInDate: formatDate(checkinDateRef.current),
                        checkOutDate: formatDate(checkoutDateRef.current),
                        phoneNumber: phoneNumber,
                        totalPrice: totalPrice
                    }
                }
            );
            alert("숙소 예약이 완료되었습니다.  예약 현황을 조회하고 싶으신 경우, 예약 조회 메뉴에서 확인해주세요!");
            setModal(false);
        } catch (error) {
            console.error("예약 요청 오류:", error);
            alert("예약 요청에 실패했습니다.");
        }
    }

    const {data, error, isLoading} = useQuery({
        queryKey: ['accommodateReservationDetail', accommodationId],
        queryFn: fetchAccommodateReservationDetail,
        enabled: !!accommodationId,
        select: (data) => data.data,
    });

    // 초기 날짜 설정
    useEffect(() => {
        const today = resetTime(new Date());
        setCheckinDate(today);

        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        setCheckoutDate(resetTime(tomorrow));
    }, []);

    // 날짜 변경 시 최신 상태 Ref 업데이트
    useEffect(() => {
        checkinDateRef.current = checkinDate;
        checkoutDateRef.current = checkoutDate;
    }, [checkinDate, checkoutDate]);

    // 체크인/체크아웃 변경 시 남은 방 수 재조회
    useEffect(() => {
        if (checkinDate && checkoutDate && accommodationId) {
            fetchAvailableRooms();
        }
    }, [fetchAvailableRooms, checkinDate, checkoutDate, accommodationId]);

    // 숙박일수에 따라 금액 계산
    useEffect(() => {
        if (data) {
            const days = Math.floor(
                (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)
            );
            const calculatedPrice = days * data.price;
            setTotalPrice(calculatedPrice);
        }
    }, [checkinDate, checkoutDate, data]);

    /**
     * 이벤트 핸들러
     */
    // 체크인 날짜 변경 시
    const handleCheckinDateChange = (date) => {
        const newCheckinDate = resetTime(date);
        setCheckinDate(newCheckinDate);

        // 체크아웃 날짜가 체크인 날짜와 같거나 이전인 경우
        if (newCheckinDate >= checkoutDate) {
            const newCheckoutDate = new Date(newCheckinDate);
            newCheckoutDate.setDate(newCheckoutDate.getDate() + 1);
            setCheckoutDate(resetTime(newCheckoutDate));
        }
    };

    // 체크아웃 날짜 변경 시
    const handleCheckoutDateChange = (date) => {
        setCheckoutDate(resetTime(date));
    };

    // 제출 입력 폼 유효성 검증
    const handleSubmit = () => {
        if (validateInputs()) {
            handleReservationRequest();
        }
    }

    // 예약 신청 토글 함수
    const toggleModal = () => {
        setModal(!openModal);
    }

    return (
        <div className="w-full">
            {openModal &&
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={toggleModal}>
                    <div
                        className='w-[40rem] h-[30rem] bg-white shadow-lg border border-black rounded-[0.875rem]
                        flex flex-col items-center justify-center gap-6 px-[10.421875rem] pb-8'
                        onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <p className="weight-700 text-[1.375rem]">숙소 예약</p>
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
                            예약요청
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
                            className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
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

                {/* 컨텐츠 영역 */}
                <div
                    className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[2.5rem] pb-[7rem] bg-white">
                    <div className='flex flex-col justify-center gap-4'>
                        <img src={data?.thumbnailPath} alt='accommodateReservationDetail'
                             className='w-[46.875rem] h-[28.125rem] rounded-[0.875rem]'/>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2.5">
                                <p className="text-[1.5rem] weight-700">{data?.name}</p>
                                <p className="text-[1.125rem] weight-600">⭐ ️{data?.rating}</p>
                            </div>
                            <p className="weight-500 text-[#404040]">{data?.location}</p>
                        </div>

                        <div className='flex flex-col justify-center py-[1rem]'>
                            <hr/>
                        </div>

                        <div className="flex flex-col gap-1 mb-[20px]">
                            <p className="text-[1.2rem] weight-700">기본 정보</p>
                            <p className="weight-500 text-[#404040] whitespace-pre-wrap">
                                {data?.description}
                            </p>
                        </div>

                        <div
                            className="flex flex-col rounded-[1.375rem] border border-[#989898] py-[1.34rem] px-[1.875rem]">
                            <div className="flex flex-col gap-2.5">
                                <div>
                                    <p className="weight-600 text-[1rem]">
                                        숙박
                                    </p>
                                    <p className="weight-500 text-[#404040]">
                                        체크인 15:00 ~ 체크아웃 11:00
                                    </p>
                                </div>

                                <div>
                                    <p className="weight-600 text-[1rem]">
                                        체크인 날짜
                                    </p>
                                    <div className="flex items-center gap-2.5 py-[0.375rem]">
                                        <div className="flex items-center gap-1.5">
                                            <div
                                                className="rounded-[0.5rem] border border-[#404040] px-[0.9375rem] py-[0.15rem]">
                                                <DatePicker
                                                    selected={checkinDate}
                                                    onChange={handleCheckinDateChange}
                                                    dateFormat="yyyy.MM.dd"
                                                    minDate={new Date()}
                                                    className="weight-500 text-[#404040] w-[5.2rem] text-center"
                                                />
                                            </div>

                                            <p className="weight-500 text-[#404040]">-</p>

                                            <div
                                                className="rounded-[0.5rem] border border-[#404040] px-[0.9375rem] py-[0.15rem]">
                                                <DatePicker
                                                    selected={checkoutDate}
                                                    onChange={handleCheckoutDateChange}
                                                    dateFormat="yyyy.MM.dd"
                                                    minDate={checkinDate}
                                                    className="weight-500 text-[#404040] w-[5.2rem] text-center"
                                                />
                                            </div>
                                        </div>
                                        <p className="weight-500 text-[#404040]">
                                            {Math.floor(
                                                (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)
                                            )}
                                            박
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="weight-600 text-[1rem]">
                                        남은 방
                                    </p>
                                    <p className="weight-500 text-[#404040]">
                                        {availableRooms}개
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-1 items-end">
                                <p className="txt-[1.125rem] weight-800">
                                    {totalPrice.toLocaleString()}원
                                </p>
                                <button
                                    className={`rounded-[8px] weight-700 px-[25px] py-[0.27rem] ${
                                        availableRooms === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-[#FFA500] text-[white]"
                                    }`}
                                    onClick={()=>{toggleModal();}}
                                    disabled={availableRooms === 0}
                                >
                                    예약하기
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}