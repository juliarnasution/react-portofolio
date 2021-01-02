import { useEffect, useState } from "react"
import {icons} from '../assets/icon/icons';
const mySkills = require('../assets/data/skills.json');


export function Skill() {
    const [skills, setSkill] =useState([]);
    useEffect(()=>{
        if(Array.isArray(mySkills)){
            let newArrSkill = mySkills.map((value,index)=>{
                const foundIcon = icons.find(icon=>icon.name === value.key);
                if (foundIcon) {
                    return {...foundIcon,...value}
                }
                return value;
            });
            // console.log(newArrSkill);
            setSkill(newArrSkill);
        }
    },[])
    return (
        <section id="skill">
            <div className="justify-center p-4 pb-6 text-gray-700">
                <div className="items-center w-1/3 mx-auto p-6">
                    <h2 className="text-center  font-sans text-3xl mx-auto justify-self-center">MY SKILLS</h2>
                </div>
                <div className=" flex justify-center">
                    <div className="w-1/2 grid grid-flow-col grid-cols-4 grid-rows-4 gap-4">
                        {skills.map((item, index)=>{
                            return (
                                <div key={index} className="items-center justify-center">
                                    <div className="shadow h-32 w-46 rounded-md flex items-center justify-center text-white text-2xl font-extrabol bg-blue-50 " >
                                        <div>
                                            <img src={item.icon} alt="icon skill"></img>
                                        </div>                                        
                                    </div>
                                    <p className="text-gray-600 flex justify-center">{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
   ) 
}