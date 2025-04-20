import React from 'react';
import CMSDashboardCard from './CMSDashboardCard';

const CMSDashboard = () => {
    const data = [
        {
            id:11,
            icon: "/icons/manageblog.jpg",
            title: "Manage Blog",
            link:"blogCMS",
        },
        {
            id:12,
            icon: "/icons/manageadmin.jpg",
            title: "Manage Admin",
            link:"adminCMS",
        },
    ];

    return (
        <div className="flex justify-center items-center w-full">

            <div className="flex flex-wrap justify-center items-center w-[90vw] border-2 border-gray-300 bg-gray-100 rounded-md shadow-md">
             {
                data.map((item, index) => (
                    <CMSDashboardCard key={index} item={item} />
                ))}
             
            </div>
        </div>
    );
};

export default CMSDashboard;