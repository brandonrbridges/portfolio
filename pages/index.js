// Next
import Link from 'next/link'

// Components
import Button from '@/components/Button'

// Modules
import Count from 'react-countup'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <main>
      <div className='grid grid-cols-9 h-screen'>
        <div className='col-span-5 flex flex-col items-center justify-center pt-8'>
          <div className='mb-auto space-x-6 text-left w-10/12'>
            <Link href='/'>Home</Link>
            <Link href='/'>Projects</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
          </div>
          <div className='text-left w-10/12'>
            <TypeAnimation
              sequence={[
                'Design.', // Types 'One'
                1000, // Waits 1s
                'Design. Develop.', // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                'Design. Develop. Deliver.', // Types 'Three' without deleting 'Two'
                () => {
                  console.log('Done typing!') // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper='h1'
              cursor={true}
              style={{ fontSize: '2em' }}
            />
            <p className='my-6 text-slate-700 tracking-wide'>
              Let&apos;s work together and take a blank white page to the website of your dreams.
            </p>
            <Button>Get Started</Button>

            <div className='gap-4 grid grid-cols-2 mt-12'>
              <div>
                <Count start={0} end={42} suffix='+' className='font-bold text-xl' />
                <motion.p
                  initial={{
                    opacity: 0,
                    translateX: 40,
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  Satisfied clients
                </motion.p>
              </div>
              <div>
                <Count start={0} end={128} prefix='~' className='font-bold text-xl' />
                <motion.p
                  initial={{
                    opacity: 0,
                    translateX: 40,
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                  }}
                >
                  Projects completed
                </motion.p>
              </div>
              <div>
                <p className='font-bold text-xl'>Contact</p>
                <motion.p
                  initial={{
                    opacity: 0,
                    translateX: 40,
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 1,
                  }}
                >
                  brandonrbridges@outlook.com
                </motion.p>
              </div>
            </div>
          </div>
          <div className='bg-black mt-auto py-8 w-full'>
            <div className='mx-auto text-left text-white w-10/12'>
              <h2>Project Statistics</h2>
            </div>
          </div>
        </div>
        <div className='col-span-4 gradient-vitalocean'></div>
      </div>
    </main>
  )
}
