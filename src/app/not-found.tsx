import React from 'react'
import "./globals.css";
import sadGIf from "../../public/statics/sad.gif"
import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/Footer/footer'

export default function error404() {
  return (
    <div>
      <div className="error-container">
        <div className="message"> 
          <h1>OOPS!</h1>
          <h2>We can&apos;t seem to find the <br></br> page you&apos;re looking for.</h2>
          <h3>Error Code: 404</h3>
          <Link href="/">Back to Home Page</Link>
        </div>
        <div className="gif">
          <Image src={sadGIf} alt="sad" width={350}/>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
      <Footer />
    </div>
  )
}