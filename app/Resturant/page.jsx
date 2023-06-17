import React from 'react'
import Image from 'next/image'
import Store1 from '../../public/resturantPic.png'
import Store2 from '../../public/resturantPic2.png'
import Store3 from '../../public/resturantPic3.png'
import javascript from '../../public/javascript.jpg'
import react from '../../public/react.jpg'
import redux from '../../public/redux.jpg'
import nodejs from '../../public/nodejs.jpg'
import tailwind from '../../public/tailwind.jpg'
import html from '../../public/html.jpg'
import css from '../../public/css.jpg'
import mysql from '../../public/mysql.jpg'

export default function page() {
  return (
    <main>
        <div className='mx-10 my-10 w-80'>
        <Image  src={Store1} width={300} height={300}/>
        <br />
        <div className='flex gap-5'>
        <Image  src={Store2 } width={150} height={300}/>
        <Image  src={Store3 } width={150} height={300}/>

        </div>

        </div>
        <div className='my-5 mx-10 '>
  <h1 className='text-4xl text-indigo-500'>Resturant System </h1>
<p>I proudly present a restaurant system that I developed to streamline operations and enhance the dining experience. This project demonstrates my proficiency in creating efficient and innovative solutions for the restaurant industry.

With a strong focus on customer satisfaction, I designed a user-friendly interface that allows guests to easily make reservations, browse the menu, and place orders online. The system seamlessly integrates with the restaurant's operations, ensuring accurate order management and timely delivery of food.</p>
</div>
<h1 className=' mx-10 my-10 text-4xl text-indigo-500'>Tools i used</h1>

        <div className='mx-10 my-10 w-80 flex gap-5 flex-wrap'>
        <Image src={html} width={60} height={50} />
        <Image src={css} width={60} height={50} />
        <Image src={javascript} width={60} height={50} />
        <Image src={tailwind} width={60} height={50} />
        <Image src={react} width={60} height={50} />
        <Image src={redux} width={60} height={50} />
        <Image src={nodejs} width={60} height={50} />
        <Image src={mysql} width={60} height={50} />

        </div>
    </main>
  )
}
