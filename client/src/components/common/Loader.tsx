import { CircularProgress } from '@mui/material'


const Loader = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <CircularProgress size={"2rem"} />
                <div className='mt-4'>Loading...</div>
            </div>
        </>
    )
}

export default Loader