import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <>

      <div className='text' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://www.github.com/mavisly/'>
          Maria Vitória
        </a>
      </div>

    </>
  )
}
export default Footer;
