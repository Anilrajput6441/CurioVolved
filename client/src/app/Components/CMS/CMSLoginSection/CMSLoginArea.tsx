import React from 'react'
import LoginForm from './LoginForm';
import CMSBrandingLoginLarge from './CMSBrandingLoginLarge';

const CMSLoginArea= () => {
  return (
   <>
    {/* CMS Login Area */}
    <div className="flex justify-center items-center h-[80vh] w-[98vw]  ">
      <div className="flex justify-center items-center h-[60vh] lg:h-[80vh] w-[100vw] lg:w-[80vw]  ">
          <div className=" left w-[50%] bg-white rounded-md shadow-md h-full hidden lg:block">
              {/* CMS Branding area */}
              <CMSBrandingLoginLarge/>
          </div>
          <div className=" right w-[90%] lg:w-[50%] p-10 bg-[#f1eded] shadow-md pb-20 lg:h-full">
              {/* CMS Login Form */}
              <LoginForm />
          </div>
        </div>
    </div>
   </>
  )
}

export default CMSLoginArea;