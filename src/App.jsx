import React from "react";
import Test from "./components/exercice1/Test";
import SomComTest from "./components/exercice2/SomComTest";
import Profile from './components/Exercice3/Profile'
import TaskList from './components/Exercice4/TaskList'
import Appel from './components/Tp2/Exercice1/Appel'
import LivreOr from "./components/Tp3/Exercice1/LivreOr";
import ThemeProvider from "./components/Tp4/Exercice1/ThemeProvider";



export default function App() {
  const Tasks=[
    {id:1,text:"faire des cours",completed:false },
    {id:2,text:"Apprendre react",completed:true },
    {id:3,text:"faire des exercice",completed:false }
  ]
  return (
    <>
         <h1 className="container-sm bg-info-subtle text-center my-3 rounded-3 p-2">Réaliser par Lamfarrad Elarbi</h1>
      <div className="container bg-light my-5 rounded-3 py-5" style={{ border: '2px dashed red' }}>
        <h1 className="border-bottom border-black bg-info text-center"> TP1</h1>
       
        <h4 className="text-bg-success w-25 rounded-1 p-1">Exercice 1 :</h4>
        <Test></Test>
        <hr/>
        <h4 className="text-bg-success w-25 rounded-1 p-1">Exercice 2 :</h4>
        <SomComTest></SomComTest>
        <hr/>
        <h4 className="text-bg-success w-25 rounded-1 p-1">Exercice 3 :</h4>
        <Profile></Profile>
        <hr/>
        <h4 className="text-bg-success w-25 rounded-1 p-1">Exercice 4 :</h4>
        <TaskList tasks={Tasks}></TaskList>
      </div>
      <div className="container bg-light my-5 rounded-3 py-5" style={{ border: '2px dashed green' }}>
      <h1  className="border-bottom border-black bg-info text-center"> TP2</h1>
     
        <h4 className="text-bg-success w-25 rounded-1 p-1">Exercice 1 :</h4>
        <Appel></Appel>
      </div>
      <div className="container bg-light my-5 rounded-3 py-5" style={{ border: '2px dashed black' }}>
      <h1  className="border-bottom border-black bg-info text-center"> TP3</h1>
    
        <h4 className="text-bg-success w-25 rounded-1 p-1">Exercice 1 :</h4>
        <LivreOr></LivreOr>
      </div>
      
      <div className="container bg-light my-5 rounded-3 py-5" style={{ border: '2px dashed orange' }}>
      <h1  className="border-bottom border-black bg-info text-center"> TP4</h1>
    
        <h4 className="text-bg-success w-25 rounded-1 p-1">Exercice 1 :</h4>
       <ThemeProvider></ThemeProvider>
      </div>
    </>
  );
}
