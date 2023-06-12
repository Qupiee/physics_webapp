import React from "react";
import formula1 from "../../../Images/kinematics/kinematics-formula1.png";
import formula2 from "../../../Images/kinematics/kinematics-formula2.gif";
import formula3 from "../../../Images/kinematics/kinematics-formula3.gif";
import formula4 from "../../../Images/kinematics/kinematics-formula4.gif";
import formula5 from "../../../Images/kinematics/kinematics-formula5.gif";
import formula6 from "../../../Images/kinematics/kinematics-formula6.gif";
import formula7 from "../../../Images/kinematics/kinematics-formula7.gif";
import pic1 from "../../../Images/kinematics/kinematics-pic1.gif";
import pic2 from "../../../Images/kinematics/kinematics-pic2.gif";
import pic3 from "../../../Images/kinematics/kinematics-pic3.gif";
import pic4 from "../../../Images/kinematics/kinematics-pic4.gif";
import "../../Functional/Content.css";

function BasicConceptsKinematics() {
    return(
        <div className="kinematics">
            <h1 className="">Основные понятия кинематики</h1>
            <em>Механическое движение</em> – изменение положения тела в пространстве относительно других тел с течением времени. 
            Тело, относительно которого рассматривается движение, называется <em>началом отсчета.</em> Покой и движение – понятия относительные. 
            Для определения положения тела в пространстве через начало отсчета проводятся три взаимно перпендикулярные координатные оси, с одинаковыми масштабами по осям. 
            Совокупность начала отсчета и координатных осей называется системой координат. Система координат и часы, измеряющие время, составляют систему отсчета. 
            <em>Материальной точкой</em> называется тело, размерами которого в данных условиях можно пренебречь. 
            Траекторией материальной точки называется линия, которую она описывает при движении относительно начала отсчета. 
            Положение материальной точки в пространстве в любой момент времени можно определить при помощи зависимости координат от времени: <img src={formula1} alt="formula1"></img>
            Радиус-вектор <img src={formula2} alt="formula2"></img> – это вектор, соединяющий начало отсчета с положением материальной точки в текущий момент времени, 
            т. е. вектор с проекциями по осям (x, y, z). 
            <em> Перемещение</em> – это вектор, проведенный из начального положения материальной точки в конечное. 
            <em> Путь</em> – это длина участка траектории, пройденного материальной точкой за данный промежуток времени. 
            В отличие от перемещения путь – это скалярная величина.<br/><img src={pic1} alt="pic1" className="pic-center"></img><p className="text-center" id="i1">Рис. 1 Путь и перемещение</p><br/>
            <em>Скоростью</em> (мгновенной скоростью) движения называется векторная величина, равная отношению малого перемещения к бесконечно малому промежутку времени, 
            за которое это перемещение производится: <img src={formula3} alt="formula3"></img>
            Модуль скорости тела можно определить графически – это тангенс угла наклона графика зависимости модуля перемещения тела s от времени t. 
            По графику скорости можно узнать перемещение тела. Его значение равно площади фигуры, ограниченной графиком скорости, координатной осью и прямыми t = t1 и t = t2.<br/> 
            <img src={pic2} alt="pic2" className="pic-center" id="i2"></img><p className="text-center">Рис. 2 Скорость и перемещение</p><br/>
            Иногда в механике также рассматривается средняя скорость, равная отношению пройденного пути ко времени, которое движется тело:
            <img src={formula4} alt="formula4"></img><br/>
            Понятие средней скорости оказывается полезным в технике. 
            Если система отсчета K’ движется относительно системы отсчета K со скоростью v0 и проходит при этом расстояние s0, 
            то перемещение s и скорость v в системе отсчета K связаны с перемещением s’ и скоростью v’ в системе K’ следующими формулами:
            <br/><img src={formula5} alt="formula5"></img><br/><img src={formula6} alt="formula6"></img><br/>
            <img src={pic3} alt="pic3" className="pic-center" id="i3"></img><p className="text-center">Рис. 3 Сложение перемещений относительно разных систем отсчета</p><br/>
            Ускорением называется векторная величина, равная отношению малого изменения скорости к малому промежутку времени, за который происходило это изменение:<br/>
            <img src={formula7} alt="formula7"></img><br/>При равноускоренном прямолинейном движении ускорение может быть определено по наклону графика скорости.<br/>
            <img src={pic4} alt="pic4" className="pic-center" id="i4"></img><p className="text-center">Рис. 4 Ускорение и скорость</p><br/>
        </div>
    )
}

export default BasicConceptsKinematics;
