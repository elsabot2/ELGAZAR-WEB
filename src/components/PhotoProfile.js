import React from 'react';

const PhotoProfile = (
    {name, imageUrl, alt, role}
) => {
    return (
        <div className='photo-profile'>
            <img name={name} src={imageUrl} alt={alt} role={role}  className='
            w-32
            rounded-full
            border-4
            border-gray-400
            hover:scale-110
            transition
            duration-300
            ease-in-out
            '/>
        </div>
    );
}

export default PhotoProfile;

