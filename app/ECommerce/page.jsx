import React from 'react'
import Image from 'next/image'
import Store1 from '../../public/StorePic.png'
import Store2 from '../../public/StorePic2.png'
import javascript from '../../public/javascript.jpg'
import react from '../../public/react.jpg'
import redux from '../../public/redux.jpg'
import nodejs from '../../public/nodejs.jpg'
import tailwind from '../../public/tailwind.jpg'

export default function page() {
  return (
    <main>
        <div className='mx-10 my-10 w-80'>
        <Image  src={Store1 } width={300} height={300}/>
        <br />
        <Image  src={Store2 } width={300} height={300}/>

        </div>
        <div className='my-5 mx-10 '>
  <h1 className='text-4xl text-indigo-500'>E-Commerce Store</h1>
<p>With a focus on user experience, I designed an intuitive and user-friendly interface that allows customers to navigate through the store effortlessly. The clean and modern design, coupled with attention to detail, ensures that visitors to the website have a seamless and enjoyable browsing experience.</p>

</div>
<h1 className=' mx-10 my-10 text-4xl text-indigo-500'>Tools i used</h1>

        <div className='mx-10 my-10 w-80 flex gap-5 flex-wrap'>
        <Image src={javascript} width={60} height={50} />
        <Image src={tailwind} width={60} height={50} />
        <Image src={react} width={60} height={50} />
        <Image src={redux} width={60} height={50} />
        <Image src={nodejs} width={60} height={50} />
        </div>
    </main>
  )
}
