import {useRouter} from 'next/router';
import { RiImageAddLine } from "@react-icons/all-files/ri/RiImageAddLine"
import { TiDelete } from "@react-icons/all-files/ti/TiDelete";
import {useState,useRef,React} from 'react';
import axios from "axios";

export default function certificationBoardPage() {

    const [certMode, setCertMode] = useState("room");
    const [placeholder, setPlaceholder] = useState(true);
    const inputRef = useRef(null);
    const router = useRouter();
    const [files, setFiles] = useState([]);

    const handleTextarea = (e)=>{
        setPlaceholder(false);
        inputRef.current.focus();
    }
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const [snsUserName,setSnsUserName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");
    const [title,setTitle] = useState("");
    const [text,setText] = useState("");

    const isFormValid = () => {
        return snsUserName && phoneNumber && email && title && text;
    }
    
    const SubmitCertification = async() => {
        if(files.length!==0){
            const formData = new FormData();
            Array.from(files).forEach((file) => {
                formData.append("files", file);
            });
            const response = await axios.post("http://localhost:8081/images", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            const res = await axios.post("http://localhost:8081/sns-auth/posts",{
                "postType" : certMode=="room"?"ACCOMMODATION_VISIT":"WASTE_DISPOSAL",
                "snsUserName": snsUserName,
                "phoneNumber": phoneNumber,
                "email": email,
                "title": title,
                "contents": text,
                "imagePathList": response?.data?.data
                })
            if(res.status!=200){
                alert("게시글 등록에 실패했습니다")
            }
            else{
                router.push(`/certificationBoardDetail/${res.data.data.id}`);
            }
        }
        else{
            const res = await axios.post("http://localhost:8081/sns-auth/posts",{
                "postType" : certMode=="room"?"ACCOMMODATION_VISIT":"WASTE_DISPOSAL",
                "snsUserName": snsUserName,
                "phoneNumber": phoneNumber,
                "email": email,
                "title": title,
                "contents": text,
                "imagePathList": []
                })
            if(res.status!=200){
                alert("게시글 등록에 실패했습니다")
            }
            else{
                router.push(`/certificationBoardDetail/${res.data.data.id}`);
            }
        }
    }

    const handleSubmitClick = () => {
        if (!isFormValid()) {
            alert("모든 항목을 입력해주세요.");
            return;
        }
        SubmitCertification();
    }

    return (
        <div className="flex flex-col bg-[#FFA500]">
        {/* 상단 메뉴 */}
            <div className="flex flex-col items-center">
                <h1 className="text-[2rem] weight-700 text-[white] pt-[4.15625rem]">경주의 밤 🌲</h1>
                <div className="flex gap-[1.371875rem] pt-[2.401875rem] pb-[2.1575rem] weight-700 text-[#FFA500]">
                    <button
                        className="rounded-[0.914375rem] weight-700 w-[10rem] py-[0.595rem] bg-[#F18304] text-[white]"
                        onClick={() => router.push('/accommodateReservation')}>SNS 인증게시판
                    </button>

                    <button
                        className="rounded-[0.914375rem] weight-700 bg-[white] w-[10rem] py-[0.595rem] hover:bg-[#F18304] hover:text-[white]"
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
                        <label className="text-[1.49625rem] weight-700 pb-[1.4375rem]">유형</label>
                        <div className='flex gap-[1.1519rem]'>
                            <label>
                                {certMode === "room"?
                                    <div className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#F18304] rounded-lg text-[#F18304] bg-[#FFEECE] cursor-pointer'>숙소 방문 인증</div>:
                                    <div className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>숙소 방문 인증</div>
                                }
                                
                                <input
                                    className='hidden'
                                    type="radio"
                                    name="certMode"
                                    value="room"
                                    checked={certMode === "room"}
                                    onChange={(e) => setCertMode(e.target.value)}
                                />
                            </label>
                            <label>
                                {certMode === "tresh"?
                                    <div className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#F18304] rounded-lg text-[#F18304] bg-[#FFEECE] cursor-pointer'>쓰레기 처리 인증</div>:
                                    <div className='px-[1.6875rem] py-[0.25rem] border-2 border-solid border-[#6C6C6C] rounded-lg text-[#6C6C6C] hover:text-[#F18304] hover:bg-[#FFEECE] hover:border-[#F18304] cursor-pointer'>쓰레기 처리 인증</div>
                                }
                                <input
                                    className='hidden'
                                    type="radio"
                                    name="certMode"
                                    value="tresh"
                                    checked={certMode === "tresh"}
                                    onChange={(e) => setCertMode(e.target.value)}
                                />
                            </label>
                            
                            
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">인스타 닉네임</label>
                        <input type="text" className="rounded-[0.914375rem] w-[21.4878125rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="인스타 user name을 입력해주세요" onInput={(e)=>{setSnsUserName(e.target.value)}}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">전화번호</label>
                        <input type="text" className="rounded-[0.914375rem] w-[21.4878125rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="전화번호를 입력해주세요" onInput={(e)=>{setPhoneNumber(e.target.value)}}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">이메일</label>
                        <input type="text" className="rounded-[0.914375rem] w-[21.4878125rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="이메일을 입력해주세요" onInput={(e)=>{setEmail(e.target.value)}}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">제목</label>
                        <input type="text" className="rounded-[0.914375rem] w-[33.6240625rem] h-[3.0340625rem] bg-[#F1F1F1] px-[1.205rem]" placeholder="제목을 입력해주세요" onInput={(e)=>{setTitle(e.target.value)}}></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">인스타그램 계정 인증</label>
                        <div className={`relative bottom-[-3rem] left-[1rem] text-[#C3C3C3] ${placeholder?"z-20":"invisible"} pl-2`} onClick={handleTextarea}>
                            <p>개인 인스타임을 증명할 수 있는 사진을 올려주세요 (ex. 본인의 인스타그램 게시물 캡쳐 사진)</p>
                            <ul className='list-disc list-outside pl-5'>
                                <li>숙소 방문 인증의 경우, 경주의 밤 플랫폼에서 제공하는 숙소에 한해 방문 인증 사진을 찍어주세요.</li>
                                <li>쓰레기 처리 인증의 경우, 분리수거를 완료한 인증 사진을 찍어주세요.</li>
                            </ul>
                        </div>
                        <textarea type="text" 
                        className="relative bottom-[3rem] rounded-[0.914375rem] w-[53.69875rem] h-[21.7371875rem] bg-[#F1F1F1] px-[19px] py-[19px] resize-none"
                        ref={inputRef}
                        onFocus={()=>{setPlaceholder(false)}}
                        onBlur={()=>{setPlaceholder(text=="")}}
                        onInput={(e)=>{setText(e.target.value)}}>
                            {text}
                        </textarea>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[1.49625rem] weight-700 pb-1">사진 첨부</label>
                        <input id="file" className="hidden" type="file" multiple onChange={handleFileChange}></input>
                        <div className="flex gap-[0.5625rem] flex-wrap">
                            <label htmlFor='file'>
                                <RiImageAddLine className="w-[1.875rem] h-[1.875rem] cursor-pointer mr-[0.375rem]">
                                </RiImageAddLine>
                            </label>
                            {files&&Array.from(files).map((value,index)=>{
                                return(
                                    <div key={index} className="flex items-center justify-between gap-[0.0625rem] w-[142px] pl-[20px] pr-[0.125rem] py-[0.3125rem] rounded-[0.625rem] border-[0.0625rem] border-solid border-[#bdbdbd]">
                                        <div
                                        className="cursor-pointer text-[0.875rem] overflow-hidden text-ellipsis whitespace-nowrap max-w-[90px]"
                                         title={value.name}>{value.name}</div>
                                <TiDelete className="w-[22px] h-[22px] cursor-pointer text-[gray]"></TiDelete>
                            </div>)
                            })}
                        </div>
                    </div>
                    <button className="self-center mt-10 mb-[19.239375rem] rounded-[0.914375rem] w-[18.2875rem] h-[4.15625rem] bg-[#FFA500] text-[1.49625rem] text-white weight-700  hover:bg-[#F18304]"
                            onClick={handleSubmitClick}>
                        인증하기
                    </button>
                </div>
            </div>
            
        </div>
    );
}