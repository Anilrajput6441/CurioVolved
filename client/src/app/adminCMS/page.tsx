import React from 'react'
import CMSHeader from '../Components/CMS/CMSHeader'
import Footer from '../Components/MainPage/Footer'

const page = () => {
  return (
    <>
     <header>
      <CMSHeader/>
      </header>
      <main>
        <div className="bodyArea pt-3 pb-3 lg:pt-10 lg:pb-20 border-2 border-gray-300 bg-gray-100 rounded-md shadow-md">
            
        </div>
      </main>
      <footer>   
      <Footer/>
      </footer> 
    
    
    </>
  )
}

export default page