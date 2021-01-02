import { useEffect, useState } from "react"
const data = require('../../assets/data/menu.json');
export function MainMenu() {
    const [listMenu, setMenu] = useState([])
    useEffect(()=>{
        setMenu(data);
    },[listMenu])
    return (
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {listMenu.map((menu,index)=>{
                return (
                    <a href={menu.url} key={index} target={menu.target} className="font-medium text-gray-500 hover:text-gray-900">{menu.title}</a>
                )
                
            })}
        </div>
    )
}