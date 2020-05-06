import React, { FC, useState } from "react";
import "./style.css";

type PageComponentProps = {
  onBtnClick?: Function;
};

const Page: FC<PageComponentProps> = (props) => {
  let { onBtnClick = () => {} } = props;
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(++count);
          onBtnClick(count);
        }}
      >
        click on me
      </button>
    </div>
  );
};

export default Page;
