import { useEffect, useState } from "react";
import {useRouter} from "next/router";

export default function kioskMainPage() {
    const router = useRouter();
    const [MoveEvent,setEvent] = useState(false);
    const [SelectedImage,setSelectedImage] = useState(2);
    
    const [Images,setImages] = useState(
        [
            "/images/kiosk/thumb1.png",
            "/images/kiosk/thumb2.png",
            "/images/kiosk/thumb3.png",
            "/images/kiosk/thumb4.png",
            "/images/kiosk/thumb5.png"]);
    const nextImage = () => {
        setEvent(true)
        setSelectedImage((SelectedImage+1)%(Images.length))
        setTimeout(()=>{
            setEvent(false);
            setImages((prevArray) => {
            const last = prevArray[prevArray.length - 1];
            const rest = prevArray.slice(0, -1);
            return [last, ...rest];
          });},500)

        
    }
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();

        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, [Images,SelectedImage]);

    return (
        <div className="flex flex-col items-center bg-gradient-to-b from-[#FFA50088] from-0% to-[#FF4D0188] to-100% bg-[#FFA500] pt-[106.4px] pb-[35px] px-[40px] min-w-[1280px] min-h-screen">

            <div className="flex flex-col text-[#FFF] text-center pb-[60px]">


                    <div className="flex flex-col w-[905.5px] h-[101.8px]">
                        <div className="relative bottom-[0%] z-20 w-[905.5px] h-[101.8px]">
                            <div className="flex flex-col justify-center">
                                <div className="flex justify-center gap-[22px] text-[66.5px] font-extrabold leading-[152%]" style={{textShadow:'0px 3.325px 2.66px rgba(0, 0, 0, 0.30)'}}>
                                    <p>나에게</p>
                                    <p className="text-[#3E2B0A] text-[79.8px] font-black">딱!</p>
                                    <p>맞는</p>
                                    <p className="text-[#000000] text-[79.8px] font-black">여행지</p>
                                    <p>다녀오고</p>
                                </div>
                            </div>
                        </div>
                        <img src="/images/icon/stress_line.png" className="relative bottom-[100%] left-[354.25px] w-[342.5px] h-[101.8px] px-[5px] py-[5px] resize-none"/>
                    </div>



                <div className="flex justify-center gap-[22px] text-[66.5px] font-extrabold leading-[152%]" style={{textShadow:'0px 3.325px 2.66px rgba(0, 0, 0, 0.30)'}}>
                    <p>지역페이</p>
                    <p className="text-[#3E2B0A] text-[79.8px] font-black">경품</p>
                    <p>받아가자!</p>
                </div>
            </div>
            <div className="flex flex-col w-[75rem] rounded-[0.914375rem] bg-[#FFB020] pt-[1.25rem] px-[1.875rem] pb-[2rem]">
                <div className="flex justify-start pb-[20px]">
                    <div className="text-[#FFF] text-[26.6px] font-extrabold">
                        여행지 미리보기
                    </div>
                </div>

                <div className="flex gap-2 justify-center h-[480px]">
                    {
                        Images.map((data,index)=>{
                            return (
                                <div className="flex flex-col items-center justify-center">
                                    <img class={`box box${index} ${MoveEvent?`effect${index}`:""}`} src={data}/>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="flex gap-2 justify-center text-[#FFF] pt-7">
                    {
                        Images.map((data,index)=>{
                            return (
                                <div>{SelectedImage==index?"●":"○"}</div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="flex flex-col gap-[60px] justify-center w-[75rem] rounded-[0.914375rem] bg-[#FFF] pt-[6rem] pb-[8rem] px-[100px] mt-[25px]">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center gap-2 text-[2.9375rem]">
                        <p>🎁</p>
                        <p className="weight-700">아래 QR 코드를 통해</p>
                        <p className="text-[#FF6102] weight-800">이벤트</p>
                        <p className="weight-700">참여하고</p>
                    </div>
                    <div className="flex justify-center gap-2 text-[2.9375rem]">
                        <p className="text-[#FF6102] weight-800">지역페이</p>
                        <p className="weight-700">경품 받아가세요!</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-[250px] h-[250px]" src="/images/kiosk/qr_icon.png"/>
                </div>
            </div>
        </div>
    );
}