import { useEffect, useState } from "react"
const data = require('../../assets/data/menu.json');
export function SecondaryMenu() {
    const [listMenu, setMenu] = useState([])
    useEffect(()=>{
        setMenu(data);
    },[listMenu])
    return (
        <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                {listMenu.map((menu,index)=>{
                    return (
                        <a href={menu.url} key={index} target={menu.target} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">{menu.title}</a>
                    )
                    
                })}
            </div>
        </div>
    )
}