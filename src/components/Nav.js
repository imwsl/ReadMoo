import React from 'react'

export default function NavBar({title="ReadMoo Web"}) {
    return (
        <>
            <nav class="flex items-center justify-center flex-wrap bg-teal-500 p-6">
                <p className="font-medium text-center text-white text-2xl">{title}</p>
            </nav>
        </>
    )
}