import {useRouter} from 'next/router';
import { RiImageAddLine } from "@react-icons/all-files/ri/RiImageAddLine"
import { TiDelete } from "@react-icons/all-files/ti/TiDelete";
import {useState,useRef,React} from 'react';
import axios from "axios";

export default function quoteTalkPage() {

    const [placeholder, setPlaceholder] = useState(true);
    const inputRef = useRef(null);
    const router = useRouter();


    const handleTextarea = (e)=>{
        setPlaceholder(false);
        inputRef.current.focus();
    }

    const [phoneNumber,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");
    const [title,setTitle] = useState("");
    const [text,setText] = useState("");

    const isFormValid = () => {
        return phoneNumber && email && title && text;
    }

    const fetchQuoteTalk = async () => {
        if (!isFormValid()) return;
        try {
            const response = await axios.post(
                `http://localhost:8081/estimate-talk/posts`,
                {
                    "phoneNumber": phoneNumber,
                    "email": email,
                    "title": title,
                    "contents": text
                }
            );

            await router.push(`/quoteTalkDetail/${response.data.data.id}`);
        } catch (error) {
            alert("견적톡 작성에 실패했습니다.");
            throw error;
        }
    }

    const handleRequestClick = () => {
        if (!isFormValid()) {
            alert("모든 항목을 입력해주세요.");
            return;
        }
        fetchQuoteTalk();
    }


    return (
        <div className="flex flex-col bg-[#FFA500]">
        {/* 상단 메뉴 */}
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
            <div className="rounded-t-3xl flex flex-col items-center w-full min-h-screen pt-[2.539375rem] bg-white px-1.5">
                <div className="flex flex-col gap-7 max-w-[860px]">
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">전화번호</label>
                        <input type="text" className="rounded-[0.914375rem] w-[21.4878125rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="전화번호를 입력해주세요" onInput={(e) => {setPhoneNumber(e.target.value)}}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">이메일</label>
                        <input type="text" className="rounded-[0.914375rem] w-[21.4878125rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="이메일을 입력해주세요" onInput={(e) => {setEmail(e.target.value)}}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">제목</label>
                        <input type="text" className="rounded-[0.914375rem] w-[33.6240625rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="제목을 입력해주세요" onInput={(e) => {setTitle(e.target.value)}}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">조건</label>
                        <div className={`relative bottom-[-1.5rem] left-[1rem] text-[#C3C3C3] ${placeholder?"z-20":"invisible"} pl-2`} onClick={handleTextarea}>
                            <ul className='list-outside pl-1'>
                                <li>원하는 조건을 입력해주세요.</li>
                                <li>예시: 숙소는 A, 재료는 고기, 감자 정도 필요합니다. 견적 알려주세요~</li>
                            </ul>
                        </div>
                        <textarea type="text" 
                        className="relative bottom-[3rem] rounded-[0.914375rem] w-[53.69875rem] h-[21.7371875rem] bg-[#F1F1F1] px-[19px] py-[19px] resize-none"
                        ref={inputRef}
                        onFocus={()=>{setPlaceholder(false)}}
                        onBlur={()=>{setPlaceholder(text=="")}}
                        onChange={(e)=>{setText(e.target.value)}}>
                            {text}
                        </textarea>
                    </div>
                    <button className="self-center mt-10 mb-[19.239375rem] rounded-[0.914375rem] w-[18.2875rem] h-[4.15625rem] bg-[#FFA500] text-[1.49625rem] text-white weight-700  hover:bg-[#F18304]"
                    onClick={handleRequestClick}>
                        견적 요청!
                    </button>
                </div>
            </div>
            
        </div>
    );
}