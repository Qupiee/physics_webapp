import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";

function VibWavesTabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            <h2>Механические колебания</h2>
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            <h2>Электромагнитные колебания</h2>
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            <h2>Механические волны</h2>
          </button>
        </div>
  
        <div className="content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
              <Link className="tabs-link" to="/vibrations-waves/oscillatory-motion-characteristics">1. Колебательное движение и его характеристики</Link>
              <Link className="tabs-link" to="/vibrations-waves/dynamics-oscillatory-motion">2. Динамика колебательного движения</Link>
              3. Зависимость периода свободных колебаний от параметров колебательной системы<br/>
              4. Скорость и ускорение при гармонический колебаниях
          </div>
  
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
              1. Колебательный контур<br/>2. Математическое описание процессов в колебательном контуре<br/>
              3. Затухающие электромагнитные колебанияа<br/>4. Генератор переменного электрического тока<br/>
              5. Конденсатор и катушка индуктивности в цепи переменного тока
          </div>
  
          <div className={toggleState === 3 ? "content  active-content" : "content"}>
              1. Механические волны. Математическое описание бегущей волны<br/>2. Фазовая скорость волны. Скорость поперечной волны в струне<br/>
              3. Скорость продольной волны в стержне. Скорость звука в жидкостях и газах<br/>4. Стоячие волны<br/>
              5. Колебания струн, стержней и воздушных столбов<br/>6. Звук и его характеристики
          </div>
        </div>
      </div>
    );
  }

  export default VibWavesTabs;
