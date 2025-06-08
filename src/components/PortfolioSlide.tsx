import React from 'react'

const PortfolioSlide = () => {
  return (
    <section className="min-h-screen">
        {/* Container */}
        <div className="mx-auto w-full h-full max-w-full px-5 py-16 md:px-10 md:py-24 lg:py-32">
            {/* Component */}
            <div className="relative pt-60 h-full">
            {/* Item */}
            <div className="sticky bottom-60 z-[3] -mt-48 mb-36 grid items-center gap-8 rounded-xl bg-[#494849] px-5 py-10 sm:px-12 lg:grid-cols-2 lg:gap-20 border border-black">
                <div className="max-w-3xl lg:grid lg:gap-32">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:m-0">Digital Web & Mobile Development Agency</h2>
                <p className="max-w-md text-sm text-[#f7f7f7] sm:text-base">A digital company called expandly, i built a full-stack web development platform which can allow clients to request a digital branding and platform through a booking appointment system and contact us form using vite framework, reacts, javascript, tailwindcss, RESTAPI, and firebase</p>
                <p className="hidden text-2xl font-bold lg:block">// 01</p>
                </div>
                <div className="flex h-[480px] w-full items-center justify-center text-[#858585]">
                <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.1582 45.5C59.0577 45.5 61.4082 43.1495 61.4082 40.25C61.4082 37.3505 59.0577 35 56.1582 35C53.2587 35 50.9082 37.3505 50.9082 40.25C50.9082 43.1495 53.2587 45.5 56.1582 45.5Z" fill="#858585"></path>
                    <path d="M91 14H21C19.1435 14 17.363 14.7375 16.0503 16.0503C14.7375 17.363 14 19.1435 14 21V77V91C14 92.8565 14.7375 94.637 16.0503 95.9497C17.363 97.2625 19.1435 98 21 98H91C92.8565 98 94.637 97.2625 95.9497 95.9497C97.2625 94.637 98 92.8565 98 91V21C98 19.1435 97.2625 17.363 95.9497 16.0503C94.637 14.7375 92.8565 14 91 14V14ZM78.4438 49C77.1259 47.7015 75.3501 46.9736 73.5 46.9736C71.6499 46.9736 69.8741 47.7015 68.5562 49L49 68.5562L39.9438 59.5C38.6259 58.2015 36.8501 57.4736 35 57.4736C33.1499 57.4736 31.3741 58.2015 30.0562 59.5L21 68.5562V21H91V61.5562L78.4438 49Z" fill="currentColor"></path>
                </svg>
                </div>
                <p className="block text-2xl font-bold lg:hidden">// 01</p>
            </div>
            {/* Item */}
            <div className="sticky bottom-36 top-auto z-[2] -mt-24 mb-12 grid items-center gap-8 rounded-xl bg-[#494849] px-5 py-10 sm:px-12 lg:grid-cols-2 lg:gap-20 border border-black">
                <div className="max-w-3xl lg:grid lg:gap-32">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:m-0">full-Stack Mobile Development</h2>
                <p className="max-w-md text-sm text-[#f7f7f7] sm:text-base">Built a full stack ecommerce & learning management production ready mobile application, which enables customers to join a learning program and buy certain available outsourced items to help procceed with the program, using Next.js, React native expo, Typescript, Tailwindcss, Supabase, Postman API, Zustand and Supabase, Postgres </p>
                <p className="hidden text-2xl font-bold lg:block">// 02</p>
                </div>
                <div className="flex h-[480px] w-full items-center justify-center text-[#858585]">
                <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.1582 45.5C59.0577 45.5 61.4082 43.1495 61.4082 40.25C61.4082 37.3505 59.0577 35 56.1582 35C53.2587 35 50.9082 37.3505 50.9082 40.25C50.9082 43.1495 53.2587 45.5 56.1582 45.5Z" fill="#858585"></path>
                    <path d="M91 14H21C19.1435 14 17.363 14.7375 16.0503 16.0503C14.7375 17.363 14 19.1435 14 21V77V91C14 92.8565 14.7375 94.637 16.0503 95.9497C17.363 97.2625 19.1435 98 21 98H91C92.8565 98 94.637 97.2625 95.9497 95.9497C97.2625 94.637 98 92.8565 98 91V21C98 19.1435 97.2625 17.363 95.9497 16.0503C94.637 14.7375 92.8565 14 91 14V14ZM78.4438 49C77.1259 47.7015 75.3501 46.9736 73.5 46.9736C71.6499 46.9736 69.8741 47.7015 68.5562 49L49 68.5562L39.9438 59.5C38.6259 58.2015 36.8501 57.4736 35 57.4736C33.1499 57.4736 31.3741 58.2015 30.0562 59.5L21 68.5562V21H91V61.5562L78.4438 49Z" fill="currentColor"></path>
                </svg>
                </div>
                <p className="block text-2xl font-bold lg:hidden">// 02</p>
            </div>
            {/* Item */}
            <div className="sticky bottom-12 top-auto mb-12 grid items-center gap-8 rounded-xl bg-[#494849] px-5 py-10 sm:px-12 lg:grid-cols-2 lg:gap-20 border border-black">
                <div className="max-w-3xl lg:grid lg:gap-32">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:m-0">AI/ML Symtom Checker</h2>
                <p className="max-w-md text-sm text-[#f7f7f7] sm:text-base">Full stack python, Django, symtom checker which identifies the type of symtom the user has on audio, scanning and typing decription of the symtom </p>
                <p className="hidden text-2xl font-bold lg:block">// 03</p>
                </div>
                <div className="flex h-[480px] w-full items-center justify-center text-[#858585]">
                <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.1582 45.5C59.0577 45.5 61.4082 43.1495 61.4082 40.25C61.4082 37.3505 59.0577 35 56.1582 35C53.2587 35 50.9082 37.3505 50.9082 40.25C50.9082 43.1495 53.2587 45.5 56.1582 45.5Z" fill="#858585"></path>
                    <path d="M91 14H21C19.1435 14 17.363 14.7375 16.0503 16.0503C14.7375 17.363 14 19.1435 14 21V77V91C14 92.8565 14.7375 94.637 16.0503 95.9497C17.363 97.2625 19.1435 98 21 98H91C92.8565 98 94.637 97.2625 95.9497 95.9497C97.2625 94.637 98 92.8565 98 91V21C98 19.1435 97.2625 17.363 95.9497 16.0503C94.637 14.7375 92.8565 14 91 14V14ZM78.4438 49C77.1259 47.7015 75.3501 46.9736 73.5 46.9736C71.6499 46.9736 69.8741 47.7015 68.5562 49L49 68.5562L39.9438 59.5C38.6259 58.2015 36.8501 57.4736 35 57.4736C33.1499 57.4736 31.3741 58.2015 30.0562 59.5L21 68.5562V21H91V61.5562L78.4438 49Z" fill="currentColor"></path>
                </svg>
                </div>
                <p className="block text-2xl font-bold lg:hidden">// 03</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PortfolioSlide
