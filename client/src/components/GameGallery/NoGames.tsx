const NoGames = () => {
    return (
        <div className='flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-300px)] text-center'>
            <h1 className="text-3xl lg:text-5xl">No games available</h1>
            <p>
                Please check back later or contact support for more information.
            </p>

        </div>
    )
}

export default NoGames