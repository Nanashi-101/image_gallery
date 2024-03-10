import React, { useState } from "react"

const ImageSearch = ({ search }) => {
    const [text, setText] = useState('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        search(text);
    };
    return (
        <div className='flex items-center gap-3 justify-between max-w-xl rounded overflow-hidden my-10 mx-auto'>
            <h1 className="text-blue-700 font-bold text-3xl text-center">ImageGal</h1>
            <form onSubmit={handleOnSubmit} className="w-full max-w-xl">
                <div className="flex items-center py-2">
                    <input onChange={e => setText(e.target.value)} className="bg-transparent border-blue-500 border-2 w-full text-black mr-3 py-4 px-3 leading-tight focus:outline-none focus:border-blue-700 rounded-full" type="text" placeholder="Search Image" />
                    <button className="flex-shrink-0 bg-blue-400 hover:bg-blue-700 border-blue-500 hover:border-blue-700 border-4 text-black hover:text-white py-2 px-3 rounded-full transition-all" type="submit">
                        <i className='bx bx-search-alt-2 text-lg'></i>
                    </button>
                </div>
            </form>
            <h3 className="text-gray-400 text-lg text-center">v1.0.0.1</h3>
        </div>
    )
}

export default ImageSearch
