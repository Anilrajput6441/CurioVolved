import Image from 'next/image'
import React from 'react'

const FooterInfo = () => {

   const data = [
    {
        icon: "/Icons/placeholder.png",
        text: "Plot No 19/20,IIMT LBF 1st Floor,Greater Noida, UP, 201310",
        type: "address"
    },
    {
        icon: "/Icons/mail.png",
        text: "codemap2024@gmail.com",
        type: "email"
    },
    {
        icon: "/Icons/phone-call.png",
        text: "+91 758582862 / 9382993983",
        type: "phone"
    },
  
   ];   

  return (
    <>
     <div className="footer-info w-[98vw] mt-5">
        <div className="flex flex-wrap w-full justify-center items-center">
            {
                data.map((item, index) => (
                    <div key={index} className="mt-7 lg:mt-8 w-[98vw] lg:w-[32vw] flex flex-col items-center">
                        <Image src={item.icon} alt="Icon" width={75} height={75} />
                        {
                            item.type === 'address' && 
                            <p className='text-sm text-center mt-4 w-4/5'>{item.text}</p>

                        }
                        {
                            item.type === 'email' && 
                            <a href={`mailto:${item.text}`} className='text-sm text-center mt-4 w-4/5'>Email: {item.text}</a>
                        }
                       {
                            item.type === 'phone' && 
                            <a href={`tel:${item.text}`} className='text-sm text-center mt-4 w-4/5'>Phone: {item.text}</a>
                       }
                    </div>
                ))
            }
        </div>
     </div>
    </>
  );
}

export default FooterInfo;