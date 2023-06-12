import React, {useState } from "react";
import "./Tabs.css";
import IIStudent from "./Student/IIStudent";
import AAStudent from "./Student/AAStudent";
import EEStudent from "./Student/EEStudent";
import KKStudent from "./Student/KKStudent";

function AccTabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            <h2>Иванов Иван</h2>
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            <h2>Антонов Антон</h2>
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            <h2>Еленова Елена</h2>
          </button>
          <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
            <h2>Кристинова Кристина</h2>
          </button>
        </div>
  
        <div className="content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <IIStudent/>
          </div>
  
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <AAStudent />
          </div>
  
          <div className={toggleState === 3 ? "content  active-content" : "content"}>
            <EEStudent />
          </div>

          <div className={toggleState === 4 ? "content  active-content" : "content"}>
            <KKStudent />
          </div>
        </div>
      </div>
    );
  }

export default AccTabs;