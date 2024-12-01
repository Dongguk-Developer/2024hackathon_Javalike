import {useEffect, useState, useRef} from 'react';
import {router} from 'next/client';
import axios from 'axios';

export default function analyzingPage() {
    // 분석 진행 단계
    const steps = [
        { title: "데이터를 수집 중이에요", description: "사용자의 선호도와 취향을 반영하기 위해 데이터를 모으고 있어요." },
        { title: "맞춤형 분석을 진행하고 있어요", description: "최적의 식사를 추천하기 위해 AI가 데이터를 열심히 분석 중이에요." },
        { title: "재료 옵션을 생성 중이에요", description: "다양한 메뉴 후보를 만들고 있어요. 조금만 더 기다려 주세요!" },
        { title: "최적의 식사 메뉴를 선정 중이에요", description: "여러 옵션 중에서 가장 적합한 메뉴를 찾고 있어요." },
        { title: "맞춤형 메뉴 추천이 거의 완성되었어요!", description: "곧 메뉴를 추천해드릴게요. 잠시만 기다려 주세요!" },
    ];

    // 현재 진행중 단계
    const [currentStep, setCurrentStep] = useState(0);
    const [menuResult, setMenuResult] = useState(null);
    const currentStepRef = useRef(currentStep);
    

    const getResult = async() => {
        const { selected1, selected2, selected3, selected4 } = router.query;
        const result = await axios.get(`http://localhost:8060/predict?material=${selected1}&soup=${selected2}&like_taste=${selected3}&cook_level=${selected4}`);
        console.log(result);
        setMenuResult(result)
    }


    useEffect(()=>{
        getResult()
    },[router])
    // 현재 진행중 단계 업데이트 (currentStep 업데이트 시 ref 동기화)
    useEffect(() => {
        currentStepRef.current = currentStep;
    }, [currentStepRef]);

    // 다음 단계로 전환
    useEffect(() => {
        const timeIntervals = [2000, 8000, 3000, 6000];

        // 마지막 단계일 경우 5초 기다리고 분석 완료 페이지로 이동
        if (currentStep === steps.length - 1) {
            setTimeout(() => {
                router.push({pathname:`/analysisComplete/${menuResult?.data?.recommended_menu_number}`,
                    number: menuResult?.data?.recommended_menu_number
                })
            }, 5000);
            return;
        }

        // 단계별 시간에 따라 다음 단계로 전환
        const timeout = setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
        }, timeIntervals[currentStep]);

        return () => clearInterval(timeout);
    }, [currentStep]);

    return(
        <div className="flex flex-col items-center bg-[#FFA500] h-screen min-w-[76.6875rem] justify-items-center content-center">
            <div className="w-[76.6875rem]">
                <div className="flex flex-col items-center gap-20">
                    <div className="flex flex-col gap-8 w-[76.6875rem] pt-[6rem] items-center">
                        <div className="flex flex-col gap-[0.625rem]">
                            <p className="text-center text-[2.75rem] weight-700 text-white">
                                설문 완료!
                            </p>
                            <p className="text-center weight-500 text-white text-[1.3125rem]">
                            AI가 맞춤형 식사 메뉴를 열심히 분석중이에요.<br/>조금만 기다려주세요!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-screen bg-white rounded-t-3xl pt-20"
                         style={{minHeight: 'calc(100vh - 19.6875rem)', minWidth: '76.6875rem'}}>
                        <div className="flex gap-10 justify-between pl-[3.375rem]">
                            <div>
                                <div className="h-[22.8rem] w-[0.4375rem] bg-[#FFEFD3] mt-[0.8125rem] ml-[1.2rem] z-0"/>

                                <div className="relative z-30">
                                    <img
                                        className="w-[2.8125rem] transition-transform duration-700 ease-in-out"
                                        style={{
                                            transform: `translateY(${(-373) + currentStep * 83}px)`,
                                            left: '-30px',
                                        }}
                                        src="/images/icon/progress_emoji.png"
                                    />
                                </div>

                                <div>
                                    <img className="w-[1.375rem] relative top-[-25.6875rem] left-[0.6875rem] z-20"
                                         src={`${currentStep > 0 ? "/images/icon/waiting_circle_after.png" : "/images/icon/waiting_circle_before.png"}`}/>
                                    <img className="w-[1.375rem] relative top-[-21.9375rem] left-[0.6875rem] z-20"
                                         src={`${currentStep > 1 ? "/images/icon/waiting_circle_after.png" : "/images/icon/waiting_circle_before.png"}`}/>
                                    <img className="w-[1.375rem] relative top-[-17.8125rem] left-[0.6875rem] z-20"
                                         src={`${currentStep > 2 ? "/images/icon/waiting_circle_after.png" : "/images/icon/waiting_circle_before.png"}`}/>
                                    <img className="w-[1.375rem] relative top-[-13.6875rem] left-[0.6875rem] z-20"
                                         src={`${currentStep > 3 ? "/images/icon/waiting_circle_after.png" : "/images/icon/waiting_circle_before.png"}`}/>
                                    <img className="w-[1.375rem] relative top-[-9.6875rem] left-[0.6875rem] z-20"
                                         src={`${currentStep > 4 ? "/images/icon/waiting_circle_after.png" : "/images/icon/waiting_circle_before.png"}`}/>
                                </div>

                                <div className="h-0">
                                    <div className="relative w-[0.4375rem] bg-[#FFA500] z-10 top-[-32.5rem] left-[1.1875rem] transition-all duration-700"
                                         style={{
                                             height: `${(currentStep * 83) + 2}px`
                                         }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-8">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex flex-col gap-1">
                                    <p className={`weight-700 transition-colors duration-800 ${
                                            currentStep === index ? 'text-[#2C2C2C]' : 'text-[#C8C8C8]'}`}>
                                            {step.title}
                                        </p>
                                        <p className={`weight-500 transition-colors duration-500 whitespace-pre-wrap ${
                                            currentStep === index ? 'text-[#2C2C2C]' : 'text-[#C8C8C8]'}`}>
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}