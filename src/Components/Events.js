import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Event(props) {
  useEffect(() => {
    AOS.init();
  });
  const img = "eimg " + props.fit;
  return (
    <div
      className={`events ${props.banner ? "event-banner" : ""}`}
      data-aos="zoom-out-up"
      data-aos-offset="-20"
    >
      <div className="eimgdesc">
        <img className={img} src={props.img} alt={props.name} />
        <div className="img-overlay">
          <div className="edesc">{props.desc}</div>
        </div>
      </div>
      <div className="ename">{props.name}</div>
    </div>
  );
}

function Events() {
  return (
    <div className="d-flex event-container">
      <Event
        img="./assets/Percent/10.png"
        fit="fit"
        name="민팅 시작"
        desc="Walk To Earn 가동 (IOS/AOS)
        앱 내 자체 마켓플레이스 도입
        신발 브리딩 시스템 개발
        신규유저, NFT 홀더간 렌탈 시스템 개발"
      />
      <Event
        img="./assets/Percent/20.png"
        fit="fit"
        name="파트너쉽"
        desc="Walk To Earn 가동 (IOS/AOS)
        앱 내 자체 마켓플레이스 도입
        신발 브리딩 시스템 개발
        신규유저, NFT 홀더간 렌탈 시스템 개발"
      />
      <Event
        img="./assets/Percent/30.png"
        fit="fit"
        name="어플 런칭"
        desc="Walk To Earn 가동 (IOS/AOS)
        앱 내 자체 마켓플레이스 도입
        신발 브리딩 시스템 개발
        신규유저, NFT 홀더간 렌탈 시스템 개발"
      />
      <Event
        img="./assets/Percent/40.png"
        fit="fit"
        name="취미 오프라인 이벤트"
        desc="Walk To Earn 가동 (IOS/AOS)
        앱 내 자체 마켓플레이스 도입
        신발 브리딩 시스템 개발
        신규유저, NFT 홀더간 렌탈 시스템 개발"
      />
      <Event
        img="./assets/Percent/50.png"
        fit="fit"
        name="토큰 발행"
        desc="Walk To Earn 가동 (IOS/AOS)
        앱 내 자체 마켓플레이스 도입
        신발 브리딩 시스템 개발
        신규유저, NFT 홀더간 렌탈 시스템 개발"
      />
      <Event
        img="./assets/Percent/60.png"
        fit="fit"
        name="토큰 상장"
        desc="Walk To Earn 가동 (IOS/AOS)
        앱 내 자체 마켓플레이스 도입
        신발 브리딩 시스템 개발
        신규유저, NFT 홀더간 렌탈 시스템 개발"
      />
      <Event
        img="./assets/Percent/70.png"
        fit="fit"
        name="취미 세분화"
        desc="Walk To Earn 가동 (IOS/AOS)
        앱 내 자체 마켓플레이스 도입
        신발 브리딩 시스템 개발
        신규유저, NFT 홀더간 렌탈 시스템 개발"
      />
      <Event
        img="./assets/Percent/80.png"
        fit="fit"
        name="추가 어플 런칭"
        desc="The secret to getting ahead is getting started. The earlier you learn about establishing your startup, the more likely of you becoming an entrepreneur. Business and beyond is a series of interactive sessions that help you know of the essential topics you need to get started with your entrepreneurial journey."
      />
      {/* <Event img="./assets/Logos/udaan.png" fit="fit" name="Udaan" desc="Udaan is a business ecosystem simulation where partakers get to learn about the intricacies behind businesses, which are beyond obvious. Students get to devise business plans which are financially sustainable while being efficient with processes involving legalities, compliance and managing CXOs to facilitate company's scalability." /> */}
      <Event
        img="./assets/Percent/90.png"
        fit="fit"
        name="토큰 상장"
        desc="The driving passion of an entrepreneur cannot be learnt, but you can definitely learn everything else there is to business and economic trends. E-Cell Scribbles is our very own Medium publication that provides thorough insights on various domains by our club members. Develop a firm grasp of the basics by discovering the many facets of being in the business line."
      />
      {/* <Event img="./assets/Logos/alumni_talk.png" fit="fit" name="Alumni Talk" desc="There's no better teacher than experience and no better preacher than the experienced. Expand the horizons of your knowledge and learn the best ways to deal with obstacles from people who have already been in your shoes in the past." /> */}
    </div>
  );
}

export default Events;
