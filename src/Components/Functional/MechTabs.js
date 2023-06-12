import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";

function MechTabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            <h2>Кинематика</h2>
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            <h2>Законы динамики</h2>
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            <h2>Законы сохранения</h2>
          </button>
        </div>
  
        <div className="content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
              <Link className="tabs-link" to="/mechanical-phenomena/basic-concepts-kinematics">1. Основные понятия кинематики</Link>
              <Link className="tabs-link" to="/mechanical-phenomena/constant-motion">2. Равномерное прямолинейное движение</Link>
              3. Равноускоренное движение<br/>4. Криволинейное и вращательное движение
          </div>
  
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
              1. Законы Ньютона<br/>2. Сила в природа<br/>3. Статика<br/>
              4. Применение законов динамики<br/>5. Динамика вращательного движения
          </div>
  
          <div className={toggleState === 3 ? "content  active-content" : "content"}>
              1. Импульс и момент импульса<br/>2. Работа и энергия<br/>3. Движение жидкостей и газов
          </div>
        </div>
      </div>
    );
  }

export default MechTabs;
