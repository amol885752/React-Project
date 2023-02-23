import React from "react";

//from react-router-dom 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import Welcome from "./components/day3/Welcome";
import Greet from './components/day3/Greet'
import HelloComponet from './components/day4/HelloComponenet'
import JsxComponent from './components/day5/JsxComponent'
import PropsComponent from './components/day5/PropsComponent'
import PropsClassComponent from './components/day6/PropsClassComponent'
import PropsDestructuringFunctionalCompName from './components/day6/PropsDestructuringFunctionalComp';
import PropsDestructuingClassComp from './components/day6/PropsDestructuingClassComp';
import StateReactComp from './components/day6/StateReactComp';
import EventHandling from './components/myPractice/EventBind';
//import ParentComp from './components/myPractice/ParentComp';
import ReactStateInClassComp from './components/day7/ReactStateInClassComp';
import  EventBinding from './components/day7/EventBinding';
import ConditionalRending from './components/myPractice/ConditionalRending';
//import ListRendering from './components/myPractice/ListRendering';
import ParentComp from './components/day8/ParentComp';
import ConditinalRenderingInReact from './components/day8/ConditinalRenderingInReact';
import ListRendering from './components/day8/ListRendering';
import Stylesheets from './components/myPractice/Stylesheets';
//import FormBasics from './components/myPractice/FormBasics';
import CompStyling from './components/day9/CompStyling';
import FormBasics from './components/day9/FormBasics';
import './App.css'
import LifeCycleMethods from './components/myPractice/LifeCycleMethods';
//import PureComp from "./components/myPractice/PureComp";
import ClassCompLifeCycleMethod from './components/day10/ClassCompLifeCycleMethod';
import Ref from './components/myPractice/Ref';
import PureComp from './components/day11/PureComp';
import RefsInClassComp from './components/day11/RefsInClassComp';
import PropsDrilling from './components/myPractice/propsDrilling';


import PropsDrillingInReact from './components/day12/PropsDrillingInReact';
import Hooks from './components/myPractice/Hooks';
import ReactHooks from './components/day13/ReactHooks';
import ReactClassComp from './components/day13/ReactClassComp';
import HooksInReact from './components/day14/HooksInReact';
import UseEffectHook from './components/day14/UseEffectHook';
import Component1 from './components/day14/UseContextHook';
import UseRefHook from './components/day15/UseRefHook';

//Routing
import Home from './components/day15/Home'
import Aboutus from './components/day15/Aboutus';
import Services from './components/day15/Services';
import Contactus from './components/day15/Contactus'
function App() {
  let usersData= [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]
  return (  
    <>
      {/* <Welcome/>
       <Greet/> 
       <HelloComponet/> 
      <JsxComponent/> 
      <PropsComponent user={usersData} name={'Ramesh'}/> 
      <PropsClassComponent message={"this is props passed from app comp"}/>
      <PropsDestructuringFunctionalCompName name={'Ramesh' } city={'pune'} company={'PWC'}/> 
      <PropsDestructuingClassComp name={'Ramesh' } city={'pune'} company={'PWC'}/> 
      <StateReactComp/>
      <EventHandling/>
        <ParentComp/>
        <ReactStateInClassComp/>
          <EventBinding/>
           <ConditionalRending/>
           <ListRendering/>
           <ConditinalRenderingInReact/>
           <ListRendering/>
           <FormBasics/>
          <Stylesheets/>
          <CompStyling/>
          <FormBasics/>
          <Ref/>
          <LifeCycleMethods msg={"Farewell"}/>
          <ClassCompLifeCycleMethod msg={"FareWell"}/>
           <RefsInClassComp/>
            <PropsDrillingInReact/>
            <Hooks/>
               <Component1/>
   <UseRefHook/>
     */}
     

     <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/service">Services</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            
          </ul>
          <Routes>
            <Route exact  path="/"  element={<Home/>}></Route>
            <Route exact  path="/about" element = {<Aboutus/>}></Route>
            <Route exact  path="/service" element={<Services/>}></Route>
            <Route exact  path="/contact" element={<Contactus/>}></Route>
          </Routes>
        </div>

     </Router>
 
    </>
  
   );
}

export default App;


//comp communtion always from parent to child