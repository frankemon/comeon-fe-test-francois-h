import { CircularProgress } from '@mui/material'


const Loader = () => {
    return (
        <>
            <div className='flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-300px)] text-center'>
                <CircularProgress size={"2rem"} />
                <div className='mt-4'>Loading...</div>
            </div>
        </>
    )
}

export default Loader