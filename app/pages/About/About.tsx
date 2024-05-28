"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const About = () => {
    return (
        <div className='small-about-container sm:about-container'>
            <div className='small-profile-links sm:profile-links'>
                <Link href={'https://www.linkedin.com/in/jatin-verma-b0b41b18b/'}>
                    <Image src={'/assets/linkedin.svg'} alt='logo' width={100} height={100} className='profiles-image' />
                </Link>

                <Link href={'https://github.com/Jv-7889230967?tab=repositories'}>
                    <Image src={'/assets/github.png'} alt='logo' width={100} height={100} className='profiles-image' />
                </Link>

                <Link href={'https://www.instagram.com/accounts/edit/'}>
                    <Image src={'/assets/instagram.svg'} alt='logo' width={100} height={100} className='profiles-image' />
                </Link>
            </div>
            <div className='small-name-container sm:name-container'>
                <div className='flex flex-col justify-center gap-4 h-full w-[20rem]'>
                    <p className='text-xl font-bold'>Software Developer</p>
                    <p className='text-xl font-bold'>Jatin Verma</p>
                    <p className='text-lg font-medium'><span><Image src={'/assets/location.png'} alt='icon' width={30} height={30} /></span>Mohali,Punjab</p>
                </div>
                <div>
                    <Image src={'/assets/picture.jpg'} width={270} height={260} alt='picture' className='rounded-full' />
                </div>

            </div>
        </div>
    )
}

export default About