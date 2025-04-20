import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


interface CardProps{
    key: number;
    item:{
        id:number;
        icon: string;
        title: string;
        link: string;
    },
}

const CMSDashboardCard:React.FC<CardProps> = (props) => {


    const {key, item} = props;
       return (
        <div className="flex justify-center items-center gap-4 pt-[1vmin] pb-[1vmin] p-[2vmin] m-[5vmin] flex-wrap">
      
                <div
                    key={key}
                    className="bg-white  p-2 rounded-lg shadow-lg w-[55vmin] pb-10 lg:w-[40vmin] lg:h-[45vmin] flex flex-col items-center ">
                     {
                        item.id === 11 ? (
                            <Image
                                className=""
                                src="/icons/manageblog.jpg"
                                alt={item.title} 
                                width={190}
                                height={190}
                                />
                        ) : item.id === 12 ? (
                            <Image
                                className=""
                                src="/icons/manageadmin.jpg"
                                alt={item.title} 
                                width={200}
                                height={200}
                                />
                        ) :<Image
                        className=""
                        src={item.icon}
                        alt={item.title} 
                        width={190}
                        height={190}
                        />
                     }
                   

                   <p className='mt-5 font-medium'>{item.title}</p>
                    <button className="mt-[2.5vmin] lg:mt-[5vmin] px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      <Link href={`/${item.link}`} className="text-white">
                      Click me </Link>
                    </button>
                </div>
           
        </div>
    );
};

export default CMSDashboardCard;