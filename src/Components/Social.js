import React from "react";

function Social(props) {
  return (
    <div className={`${props.position}`}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/thinkfi_project/"
      >
        <img src={"./assets/icon/twitter.png"} className="icon" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://discord.gg/zUJ8VRAPav/">
        <img src={"./assets/icon/discord.png"} className="icon" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://thinkfi.gitbook.io/hobbies-kor/"
      >
        <img src={"./assets/icon/gitbook.png"} className="icon" />
      </a>
    </div>
  );
}

export default Social;
