import React from 'react'
import Image from 'next/image'

// IMAGES
import spainBook from '@/app/Assets/spainBook.jpg'

const TrackCard: React.FC = () => {
    return (
        <div className='bg-white mx-8 my-4 rounded-lg grid grid-col-4 grid-row-4 drop-shadow-lg'>
            <div className='ml-4 my-4 self-center col-start-1 row-start-1 row-span-2'>
                <Image src={spainBook} alt='track title' height={70} />
            </div>
            <h3 className='col-start-2 mt-4 font-bold'>Title of the track</h3>
            <h4>1:42</h4>
            <div className='row-start-3 col-start-1 col-span-2 mx-4'>
                <div className='flex mb-1 font-bold'>
                    <h4>Exam Boards:</h4>
                </div>

                <div className='flex'>
                    <p className='px-2 pb-4'>#ABRSM</p>
                    <p className='px-2 pb-4'>#MTB</p>
                    <p className='px-2 pb-4'>#TrinityCollege</p>
                </div>
            </div>
        </div>
    )
}

export default TrackCard
