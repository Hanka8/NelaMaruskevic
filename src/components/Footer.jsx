import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-5 footer'>
        <div className='flex-center g-1 mb-1 footer-icons'>
            <a className='ico-link' href='phone:+420723479133'><ion-icon name="call-outline"></ion-icon></a>
            <a className='ico-link' href="mailto:nela.maruskevic@gmail.com"><ion-icon name="mail-outline"></ion-icon></a>
            <a className='ico-link' href="https://www.instagram.com/nela_maruskevic/"><ion-icon name="logo-instagram"></ion-icon></a>
        </div>
        <p className='text-center'>© 2024 Nela Maruškevičová</p>
    </footer>
  )
}
