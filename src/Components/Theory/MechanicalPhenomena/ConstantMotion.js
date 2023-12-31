import React from "react";
import pic11 from "../../../Images/_constant/constant-pic11.png";
import pic12 from "../../../Images/_constant/constant-pic12.png";
import pic13 from "../../../Images/_constant/constant-pic13.png";
import pic14 from "../../../Images/_constant/constant-pic14.png";
import pic15 from "../../../Images/_constant/constant-pic15.png";
import pic16 from "../../../Images/_constant/constant-pic16.png";
import "../../Functional/Content.css";

function ConstantMotion() {
    return(
        <div className="theory-content">
            <h1 className="">Равномерное прямолинейное движение</h1>
            <em>Равномерное прямолинейное движение</em> — движение, при котором тело за любые равные промежутки времени совершает одинаковые перемещения. 
            Слова «любые равные» означают, что за каждый час, за каждую минуту, за каждые 30 минут, за каждую секунду, за каждую долю секунды тело совершает одинаковые перемещения. 
            <br/><br/>Равномерное движение — идеализация, поскольку практически невозможно создать такие условия, 
            чтобы движение тела было равномерным в течение достаточно большого промежутка времени. 
            Реальное движение может лишь приближаться к равномерному движению с той или иной степенью точности.<br/><br/>
            Изменение положения тела в пространстве при равномерном движении может происходить с разной быстротой. 
            Это свойство движения — его «быстрота» характеризуется физической величиной, называемой скоростью.<br/><br/>
            <em>Скоростью равномерного прямолинейного движения называют векторную физическую величину, равную отношению перемещения ко времени, за которое это перемещение произошло.</em>
            <br/><br/>Если за время t тело совершило перемещение s, то скорость его движения v равна v = s/t.<br/><br/>
            Единица скорости: [v]=[s]/[t]; [v]=1м/1с=1м/с. За единицу скорости принимается 1 м/с — скорость такого равномерного движения, при котором тело за 1 с совершает перемещение 1 м. 
            <br/><br/>Зная скорость равномерного движения, можно найти перемещение за любой промежуток времени: 
            s = v*t. Вектор скорости и вектор перемещения направлены в одну сторону — в сторону движения тела.<br/><br/>
            Поскольку основной задачей механики является определение в любой момент времени положения тела, 
            т.е. его координаты, необходимо записать уравнение зависимости координаты тела от времени при равномерном движении.<br/><br/>
            Пусть s — перемещение тела (рис. 11). Направим координатную ось ОХ по направлению перемещения. 
            Найдем проекцию перемещения на координатную ось ОХ. 
            На рисунке ​x0​ — координата начальной точки перемещения, ​x​ — координата конечной точки перемещения. 
            Проекция перемещения равна разности координат конечной и начальной точек: ​s x=x−x0​. 
            С другой стороны, проекция перемещения равна проекции скорости, умноженной на время, т.е. s(x)=v(x)*t. 
            Откуда ​x−x0=v(x)*t​ или x=x0+v(x)*t. Если начальная координата ​x0​ = 0, то ​x=v(x)*t.<br/><br/>
            <img src={pic11} alt="pic11" className="pic-center"></img><br/><br/>
            Полученная формула позволяет определить координату тела при равномерном движении в любой момент времени, если известны начальная координата и проекция скорости движения. 
            <br/><br/>Проекция скорости может быть как положительной, так и отрицательной. 
            Проекция скорости положительна, если направление движения совпадает с положительным направлением оси ОХ (рис. 12). 
            В этом случае ​x больше x0​. Проекция скорости отрицательна, если тело движется против положительного направления оси ОХ (рис. 12). В этом случае x меньше x0. 
            <br/><br/><img src={pic12} alt="pic12" className="pic-center"></img><br/><br/>Зависимость координаты от времени можно представить графически.<br/><br/>
            Предположим, что тело движется из начала координат вдоль положительного направления оси ОХ с постоянной скоростью. 
            Проекция скорости на ось ОХ равна 4 м/с. Уравнение движения в этом случае имеет вид: ​x​ = 4 м/с*​t​. 
            Зависимость координаты от времени — линейная. Графиком такой зависимости является прямая линия, проходящая через начало координат (рис. 13).<br/><br/>
            <img src={pic13} alt="pic13" className="pic-center"></img><br/><br/>
            Для того чтобы её построить, необходимо иметь две точки: одна из них ​t​ = 0 и ​x​ = 0, а другая ​t​ = 1 с, ​x​ = 4 м. 
            На рисунке приведён график зависимости координаты от времени, соответствующий данному уравнению движения.<br/><br/>
            <img src={pic14} alt="pic14" className="pic-center"></img><br/><br/>
            В том случае, если проекция скорости отрицательна, уравнение движения имеет вид: x​ = 2 м – 4 м/с*​t​. 
            График зависимости координаты такого движения от времени представлен на рисунке 15.<br/><br/>
            <img src={pic15} alt="pic15" className="pic-center"></img><br/><br/>
            Таким образом, движение тела может быть описано аналитически, т.е. с помощью уравнения движения 
            (уравнения зависимости координаты тела от времени), и графически, т.е. с помощью графика зависимости координаты тела от времени.<br/><br/>
            График зависимости проекции скорости равномерного прямолинейного движения от времени представлен на рисунке 16.<br/><br/>
            <img src={pic16} alt="pic16" className="pic-center"></img>
        </div>
    )
}

export default ConstantMotion;
