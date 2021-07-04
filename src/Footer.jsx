import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <footer className="bg-light text-center">
                <p>©  {date} Animated Site. All rights are reserved | Terms and Condition </p>

            </footer>
        </>
    )
}

export default Footer
