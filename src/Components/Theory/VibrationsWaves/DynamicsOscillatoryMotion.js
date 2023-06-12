import React from "react";
import formula1 from "../../../Images/dynamic/dynamic-formula1.png";
import formula2 from "../../../Images/dynamic/dynamic-formula2.png";
import formula3 from "../../../Images/dynamic/dynamic-formula3.png";
import formula4 from "../../../Images/dynamic/dynamic-formula4.png";
import formula5 from "../../../Images/dynamic/dynamic-formula5.png";
import pic20 from "../../../Images/dynamic/dynamic-pic20.png";
import "../../Functional/Content.css";

function DynamicsOscillatoryMotion() {
    return(
        <div>
            <h1 className="">Динамика колебательного движения</h1>
            В соответствии со вторым законом Ньютона <img src={formula1} alt="formula1"></img> (то есть <img src={formula2} alt="formula2"></img>), имеем
            <img src={formula3} alt="formula3"></img>, а период колебаний <img src={formula4} alt="formula4"></img>. Коэффициент k играет роль своеобразного коэффициента упругости. 
            Уравнение колебаний (в одномерном случае) в дифференциальной форме имеет вид <img src={formula5} alt="formula5"></img>, где <img src={formula2} alt="formula2"></img> Любое колебание может быть представлено 
            в виде суммы элементарных (гармонических) колебаний, вполне определенных амплитуд, частот и фаз (рис. 20)<br/><br/>
            <img src={pic20} alt="pic20" className="text-center" id="i7"></img><br/><br/>
            Поэтому гармонические колебания играют исключительную роль не только в физике, но и во всех проявлениях природы. 
            Теория гармонических колебаний является первым шагом к исследованию всех периодических процессов. 
            Кроме того, любая колебательная система (в качестве таковой может представляться и клетка биообъекта) резонирует на гармонические колебания, 
            частота которых близка к частоте собственных колебаний системы.<br/><br/>
            Основополагающую роль в механике колебательного движения играют понятия физического и математического маятников. 
            Выведем формулы для вычисления периода колебаний этих систем.

        </div>
    )
}

export default DynamicsOscillatoryMotion;
