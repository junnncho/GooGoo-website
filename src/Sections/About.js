import Part from "../Components/Part";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const state = [
  {
    srcs: ["./assets/logo.png"],
    style: {
      width: "100%",
      objectFit: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    head: "Why Hobby to Earn",
    reverse: true,
  },
  {
    srcs: ["./assets/main.png"],
    style: {
      width: "73%",
      objectFit: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    head: "HOBBIES APP",
    reverse: false,
  },
  {
    srcs: ["./assets/shop.png", "./assets/lock.png"],
    style: {
      width: "50%",
      objectFit: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    head: "ETC Page",
    reverse: true,
  },
];

function About() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id="about">
      <Part {...state[0]}>
        스니커즈 앱은 운동과 건강 그리고 리워드를 함께 즐길 수 있는 Walk To Earn
        플랫폼입니다.
        <br />
        <br />
        스테미나 만큼 걷고 뛰면서 수익을 만들고 GPS, 가속도 센서 등 나의 운동
        정보를 통해 높은 칼로리 소모를 위한 다양한 동기부여를 제공합니다.
        <br />
        <br />
        SNKRZ와 함께 목표를 달성하고 더욱 즐겁게 달려보세요.
      </Part>
      <Part {...state[1]}>
        스니커즈 앱을 통해 NFT를 착용하고 걸을 때마다 $SKZ가 적립됩니다.
        <br />
        <br />
        가지고 있는 SNKRZ 능력치에 따라 받는 리워드의 수량이 결정됩니다.
        <br />
        <br />
        유저는 자신의 SNKRZ NFT를 앱 내 또는 오픈 시 등 마켓플레이스를 통해서
        가지고 있는 신발을 판매할 수도 있고
      </Part>
      <Part {...state[2]}>
        스니커즈 앱을 통해 NFT를 착용하고 걸을 때마다 $SKZ가 적립됩니다.
        <br />
        <br />
        가지고 있는 SNKRZ 능력치에 따라 받는 리워드의 수량이 결정됩니다.
        <br />
        <br />
        유저는 자신의 SNKRZ NFT를 앱 내 또는 오픈 시 등 마켓플레이스를 통해서
        가지고 있는 신발을 판매할 수도 있고
      </Part>
    </div>
  );
}

export default About;
