export const Heros = () => {
    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'> </div>
                    </div>

                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>
                                The library team would love to hear what you have been reading lately.
                                Wheteaver your book is a classic, a bestseller or a hidden gem, let us know.
                            </p>
                            <a type='button' className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className='col-5 col-md-4 container d-flex
                        justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Our collection is always changing</h1>
                            <p className='lead'>
                                Try to check back often to see what's new - you never know what you might find!
                                We work non-stop to bring you the latest and greatest in literature, so there's always something fresh
                            </p>
                            <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'> </div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros*/}
            <div className='container'>
                <div className='mt-2'>
                    <div className='col-image-left'></div>
                    <div className='mt-2'>
                        <h1>Our collection is always changing</h1>
                        <p className='lead'>
                            Try to check back often to see what's new - you never know what you might find!
                            We work non-stop to bring you the latest and greatest in literature, so there's always something fresh
                        </p>
                        <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                    </div>
                </div>
                <div className='m-2'>
                    <div className='col-image-right'></div>
                    <div className='mt-2'>
                        <h1>Our collection is always changing</h1>
                        <p className='lead'>
                            Try to check back often to see what's new - you never know what you might find!
                            We work non-stop to bring you the latest and greatest in literature, so there's always something fresh
                        </p>
                        <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}