import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/button';
import thumbnail from '@/public/images/thumbnail.png'

const page = () => {
    return (
        <main className='mt-10'>
            <div>Our Mission</div>
            <Image placeholder='blur' src={thumbnail} alt='' />
            <Button />
        </main>
    );
};

export default page;