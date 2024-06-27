'use client';
import React from 'react';
import Link from 'next/link';


export default function Home() {
  
  return (
    <>
      <div className="backgroundHome"style={{position:"fixed",zIndex:-9}}>
      {/* <span className="topleft">👇You are great!</span><span className="bottomleft">👉You are Awesome!</span><span className="bottomright">🎁 You just got the hidden Treasure<a>Hidden</a>!</span> */}
      </div>
      <div className="home">
        <div className="info ">
          <p>Hello,I&apos;m Kaustubh Verma</p>
          <h1>Full Stack Developer and <br></br> Web3 Enthusiast<span>.</span></h1>
          <p>I enjoy creating stuff that envolve Programming,<br></br> and love to built new stuff. </p>
          <br></br>
          <Link className="contact" href="/contact">Let&apos;s Talk</Link><span style={{margin:'2%'}}>or</span>
          <Link className="contact" href="/project">View Work</Link>
        </div>
         <a className="down"><span></span></a>
      </div>
    </>
  );
}
