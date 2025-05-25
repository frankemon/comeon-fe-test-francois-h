import { useAuth } from '../../context/Auth'
import ProfileImg from "./ProfileImg"

const Profile = () => {
  const { player } = useAuth()
  return (
    <div className='flex justify-center items-center'>
      {/* User username instead of real name */}
      <ProfileImg img={player?.avatar} username={player?.username ?? ""} />
      <div className='flex flex-col ml-4 leading-5'>
        <div className='font-bold'>{player?.username ?? "PlayerOne"}</div>
        <div className='italic'>{player?.event ?? "Ready to win!"}</div>
      </div>
    </div>
  )
}

export default Profile