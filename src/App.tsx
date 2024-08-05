import { useState } from "react";
import FullpageContainer from "./components/Container";
import FullpageSection from "./components/Section";

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <FullpageContainer
      transitionDuration={700}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      topScrollOnChange={false}
      // onBeforeChange={(beforeIndex, afterIndex) => {
      //   console.log('before', beforeIndex, afterIndex);
      // }}
      // onAfterChange={(beforeIndex, afterIndex) => {
      //   console.log('after', beforeIndex, afterIndex);
      // }}
      // onAfterLoad={(container) => {
      //   console.log('afterLoad', container);
      // }}
    >
      <FullpageSection name="first">
        <div
          className="first-section"
          style={{ width: "100%", height: "100vh", backgroundColor: "red" }}
        >
          <div>First Section</div>
        </div>
      </FullpageSection>
      <FullpageSection name="second">
        <div
          className="first-section"
          style={{ width: "100%", height: "100vh", backgroundColor: "blue" }}
        >
          <div>Second Section</div>
        </div>
      </FullpageSection>
      <FullpageSection name="third">
        <div
          className="first-section"
          style={{ width: "100%", height: "100vh", backgroundColor: "green" }}
        >
          <div>Third Section</div>
        </div>
      </FullpageSection>
    </FullpageContainer>
  );
}

export default App;
