import React, { useEffect, useState } from "react";
import * as MINT from "./Mint/mintfunc";
import "./Mint/Minting.css";
import Nav from "../Components/Nav";

function Minting() {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", async function (event) {
      const accounts = await window.klaytn.enable();
      if (!accounts) {
        alert("KaiKas 확장 프로그램을 활성화 해주세요!");
      }
      MINT.check_status();
    });
  }, []);
  const min = 1;
  const max = 100;
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
  };
  return (
    <div className="mint-main">
      <Nav />
      <div className="mint">
        <div className="col-left">
          <h2>MINTING INFO</h2>

          <p id="blockNubmer">현재 블록: #00000000</p>
          <p id="mintStartBlockNumber">민팅 시작 블록: #00000000</p>
          <p id="mintPrice">민팅 가격: 0 KLAY</p>
          <p id="mintLimitPerBlock">트랜잭션당 최대 수량: 0개</p>
          <br />
          <br />
          <br />
          <a href="https://scope.klaytn.com/">
            <img src={"/assets/klaytnscope-logo.svg"} />
          </a>
          <br />
          <a href="https://klayswap.com/">
            <img src={"/assets/klayswap-logo.svg"} />
            klayswap
          </a>
        </div>
        <div className="col-right">
          <div className="first">
            <h2>MY WALLET</h2>
            <button className="btn1" onClick={MINT.connect}>
              카이카스 지갑연결
            </button>
            <p id="myWallet">지갑주소: 연결되지 않음</p>
            <p id="myKlay">잔액: 연결되지 않음</p>
          </div>
          <div className="second">
            <h2>MINT</h2>
            <p id="mintCnt">0 / 0</p>
            <label for="amount">민팅 수량 &nbsp; </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={value}
              onChange={handleChange}
            />
            <br />
            <button className="btn2" onClick={MINT.publicMint}>
              민팅
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Minting;
