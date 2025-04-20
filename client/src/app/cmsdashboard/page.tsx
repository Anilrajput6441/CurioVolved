import React from 'react'
import CMSHeader from '../Components/CMS/CMSHeader'
import Footer from '../Components/MainPage/Footer'
import CMSDashboard from '../Components/CMS/CMSDashboard/CMSDashboard'
const page = () => {
    return (
      <div>
          <header>
          <CMSHeader/>
          </header>
          <main>
              <div className="bodyArea pt-3 pb-3 lg:pt-10 lg:pb-10">
                  <CMSDashboard/>
              </div>
          </main>
  
          <footer>
              <Footer/>
          </footer>
      </div>
    )
  }
  
  export default page