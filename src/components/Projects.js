import OwlCarousel from 'react-owl-carousel2';
import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';
import project4 from '../assets/img/project4.png';
import 'react-owl-carousel2/src/owl.carousel.css';
import { useEffect, useRef, useState } from 'react';
let listProjects= require('../assets/data/projects.json');

const imgProject = {project1,project2,project3,project4};
const options = {
    items: 1,
    // nav: true,
    center: true,
    rewind: true,
    autoplay: true,
    loop: true
};
export function Projects() {
    const myref = useRef(null);
    const[projects,setProject]=  useState([])
    useEffect(()=>{
        listProjects = listProjects.map(item=>{
            const img = imgProject[item.img];
            return {...item, img};
        })
        setProject(listProjects);
    },[]);

    const events = {
        onDragged: function(event) {
            // console.log(event);
        },
        onChanged: function(event) {
            // console.debug(event)
        }
    };
    return (
        <section id="projects">
            <div className="justify-center p-4 pb-6 bg-gray-100  text-gray-700">
                <div className="items-center mx-auto py-6">
                    <h2 className="text-center  font-sans text-3xl mx-auto justify-self-center">MY PROJECTS</h2>
                </div>  
                <div className="">
                    <OwlCarousel
                        ref={myref} 
                        options={options} 
                        events={events}
                    >
                        {projects.map((item, index)=>{
                            return (
                                <div key={index}>
                                    <div className=" p-4 ">
                                        <div className="flex p-2">
                                            <div className="flex-1">
                                                <div className="flex justify-center">
                                                    <img src={item.img} className="h-4/5" alt="carousel"></img>
                                                </div>
                                            </div>
                                            <div className="flex-1 ">
                                                <div className="flex justify-center">
                                                <article className=" px-2 ">
                                                    <h1 className="text-center text-3xl">{item.title}</h1>
                                                    <p className="mt-2 text-center text-lg">
                                                        {item.text}
                                                    </p>
                                                    <div className="mt-6 flex items-center justify-center">
                                                    <a href={item.link} className="block px-4 py-2  border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-900 md:text-lg md:px-10">
                                                        Demo
                                                    </a>
                                                    </div>
                                                </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </section>
   ) 
}