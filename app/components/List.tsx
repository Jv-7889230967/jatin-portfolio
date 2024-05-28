import Image from 'next/image';
import React from 'react';

interface ListProps {
  images: string[];
}

const List: React.FC<ListProps> = ({ images }) => {
  return (
    <div className='flex h-full w-full overflow-x-auto'>
      <div className='flex flex-row justify-start gap-[4rem] h-full w-[83rem]'>
        {images.map((image, index) => (
          <Image className='profiles-image' key={index} src={image} alt={`Image ${index}`} width={200} height={200} />
        ))}
      </div>
    </div>
  );
};

export default List;
