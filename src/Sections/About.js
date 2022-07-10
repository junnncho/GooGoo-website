import Part from "../Components/Part";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const state = [
  {
    srcs: ["./assets/logo_skate.png"],
    style: {
      width: "100%",
      objectFit: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    head: "Free to Earn(F2E)란?",
    name: "state1",
  },
  {
    srcs: ["./assets/charactor.png"],
    style: {
      width: "73%",
      objectFit: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    head: "HOBBIES 앱",
    name: "state2",
  },
  {
    srcs: [
      "./assets/phone/phone1.png",
      "./assets/phone/phone2.png",
      "./assets/phone/phone3.png",
    ],
    style: {
      width: "50%",
      objectFit: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    head: "앱 구성",
    name: "state3",
  },
];

function About() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="about">
      <Part {...state[0]}>
        HOBBIES는 스마트폰을 끄고 본인만의 건강한 취미생활을 하면서 리워드를
        받을 수 있는 Web3 라이프 스타일 어플 입니다.
        <br />
        <br /> 나날이 늘어나는 현대인들의 스마트폰 의존성을 줄이고 본인에게 맞는
        취미생활을 찾을 수 있는 기회를 줍니다.
      </Part>
      <Part {...state[1]}>
        HOBBIES NFT를 구매한 후 스마트폰을 끄기만 하면 자동으로 HOBBIES 토큰을
        수령할 수 있습니다. <br />
        <br />
        스마트폰의 화면을 끄면 어플 내 캐릭터가 해당 NFT에 맞는 취미활동을
        시작합니다.
      </Part>
      <Part {...state[2]}>
        HOBBIES 앱에서 시작버튼을 클릭을 하면 화면이 꺼지고 해당 NFT의 능력만큼
        $HOBB가 적립됩니다.
        <br />
        <br />
        능력치는 NFT마다 세분화되어 있고 NFT는 앱 내 자체 상점에서 판매 혹은
        구매가 가능합니다.
        <br />
        <br />
        시작버튼을 누르면 화면이 꺼지고 잠금화면을 키면 현재 적립된 $HOBB가
        표시됩니다.
      </Part>
    </div>
  );
}

export default About;
