import React, { useEffect } from "react";
import { useStoreon } from "storeon/react";

export function Test(): JSX.Element {
  const { dispatch, testData } = useStoreon("testData");

  useEffect(() => {
      console.log(testData);
  }, [testData])

  return (
    <div>
      {/*{count}*/}
      {/*<button onClick={() => dispatch("inc")}>increment</button>*/}
      {/*<button onClick={() => dispatch("dec")}>decrement</button>*/}
        <button onClick={() => dispatch("dawaj-koty")}>dawaj kota</button>
        {
            !!testData?.webpurl ? <img src={testData.webpurl} /> : null
        }
    </div>
  );
}
