import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({item}) => {
    return (
                <div>
                    <Link to={item?.link}>
                    <div className="flex items-center pb-5">
                    <div className="flex items-center text-xl">
                    <ion-icon name={item.icon}></ion-icon>
                    </div>
                    <span className="text-[15px] mx-4 font-medium">{item.title}</span>
                    </div>
                    </Link>
                </div>
    );
};

export default SidebarItem;