import React from 'react'
import List from '../../components/List'

const Skills = () => {
  const web = [
    '/assets/react.svg',
    '/assets/nextjs.svg',
    '/assets/html.svg',
    '/assets/tailwind.svg',
    '/assets/typescript.svg',
  ]
  const languages = [
    '/assets/java.png',
    '/assets/javascript.svg'
  ]
  const tools = [
    '/assets/git.svg',
    '/assets/github.svg',
    '/assets/webpack.svg',

  ]
  return (
    <div className='flex flex-col justify-evenly items-center h-screen w-screen gap-[15px]'>
      <h3 className='text-3xl font-bold'>SKILLS</h3>
      <div className='small-skill-container md:skill-container'>
        <p className='m-0 italic text-2xl font-extrabold'>WEBTECH</p>
        <List images={web} />
      </div>
      <div className='small-skill-container md:skill-container'>
        <p className='italic text-2xl font-extrabold'>Languages</p>
        <List images={languages} />
      </div>
      <div className='small-skill-container md:skill-container'>
        <p className='italic text-2xl font-extrabold'>DevTools</p>
        <List images={tools} />
      </div>

    </div>
  )
}

export default Skills