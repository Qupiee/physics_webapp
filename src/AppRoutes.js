import Account from "./Components/MenuItems/Account";
import Authorization from "./Components/Access/Authorization";
import Registration from "./Components/Access/Registration";
import Main from "./Components/MenuItems/Main";
import Tasks from "./Components/MenuItems/Tasks";
import Theory from "./Components/MenuItems/Theory";
import ChooseTheory from "./Components/MenuItems/ChooseTheory";
import VibrationsWaves from "./Components/Theory/VibrationsWaves/VibrationsWaves";
import MechanicalPhenomena from "./Components/Theory/MechanicalPhenomena/MechanicalPhenomena";
import BasicConceptsKinematics from "./Components/Theory/MechanicalPhenomena/BasicConceptsKinematics";
import ConstantMotion from "./Components/Theory/MechanicalPhenomena/ConstantMotion";
import OscillatoryMotionCharacteristics from "./Components/Theory/VibrationsWaves/OscillatoryMotionCharacteristics";
import DynamicsOscillatoryMotion from "./Components/Theory/VibrationsWaves/DynamicsOscillatoryMotion";

const AppRoutes = [
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/choose-theory',
        element: <ChooseTheory />
    },
    {
        path: '/theory',
        element: <Theory />
    },
    {
        path: '/tasks',
        element: <Tasks />
    },
    {
        path: '/account',
        element: <Account />
    },
    {
        path: '/authorization',
        element: <Authorization />
    },
    {
        path: '/registration',
        element: <Registration />
    },
    {
        path: '/vibrations-waves',
        element: <VibrationsWaves />
    },
    {
        path: '/vibrations-waves/oscillatory-motion-characteristics',
        element: <OscillatoryMotionCharacteristics />
    },
    {
        path: '/vibrations-waves/dynamics-oscillatory-motion',
        element: <DynamicsOscillatoryMotion />
    },
    {
        path: '/mechanical-phenomena',
        element: <MechanicalPhenomena />
    },
    {
        path: '/mechanical-phenomena/basic-concepts-kinematics',
        element: <BasicConceptsKinematics />
    },
    {
        path: '/mechanical-phenomena/constant-motion',
        element: <ConstantMotion />
    }
]

export default AppRoutes;
