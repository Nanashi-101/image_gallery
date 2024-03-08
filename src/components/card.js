import React from 'react'

function card({ image }) {
    const tags = image.tags.split(',');
    return (
        <div>
            <>
                <div className="Card max-w-md h-96 object-cover rounded-md overflow-hidden shadow-lg">
                    <img
                        src={image.webformatURL}
                        alt=""
                        className="card-img w-full"
                    />
                </div>
                <div className="card-content px-6 py-4 shadow-lg rounded-t-xl w-96 -translate-y-8 translate-x-8 bg-white">
                    <p className="font-bold text-xl text-blue-700 text-center">
                        Photo by {image.user}
                    </p>
                    <ul>
                        <li>
                            <strong>views: {image.views}</strong>
                        </li>
                        <li>
                            <strong>Downloads: {image.downloads}</strong>
                        </li>
                        <li>
                            <strong>Likes: {image.likes}</strong>
                        </li>
                    </ul>
                    <div className="px-6 py-5 flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <span className="inline-block bg-gray-200 text-sm text-gray-700 font-semibold rounded-full px-3 py-1 mr-1">
                            #{tag}
                        </span>
                        ))}
                    </div>
                </div>
            </>
        </div>
    )
}

export default card
