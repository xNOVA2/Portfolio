"use client"
import Typewriter from 'typewriter-effect';

export default function TypeWriter() {
    const texts = ['Desginer!', 'FullStack Engineer!', 'java Developer!'];
  return (
    <Typewriter
    options={{
      strings:  texts,
      loop: true,
      autoStart: true,
      cursor: '',
      deleteSpeed: 'natural',
      pauseFor: 2500,
      onLoop: (loopCount) => {
        if (loopCount === texts.length) {
          console.log('All texts were displayed');
        }
      },
    }}
  />
  )
}
