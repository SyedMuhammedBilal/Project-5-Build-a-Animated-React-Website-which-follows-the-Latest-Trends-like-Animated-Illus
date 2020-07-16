import React from 'react'
import { useSpring, animated } from 'react-spring'
import pic from '../images/maintenance.png'
import "./content.css"

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Content3() {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="container">
          <section class="text-gray-700 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-6xl mb-4 font-medium text-gray-900">Bonus/Extra Project 5 
                <br class="hidden lg:inline-block"/> 
              </h1>
              <p class="mb-8 leading-relaxed">Our eyes are hardwired to notice movement. Historically, it’s helped to keep us alive. And, in 2020, web designers are capitalizing on this default human setting. Animated illustrations are one of the newest trends being used to direct viewer attention within web designs. You’ll see these petite animations on sites all over the web. Some animated illustrations are merely still graphics that jiggle, while other illustrated animations are more thoughtful and complex.</p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
              </div>
            </div>
            <animated.div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            >
              <img class="object-cover object-center rounded" alt="hero" src={pic}/>
            </animated.div>
          </div>
        </section>
        </div>
    )
}