import React from 'react'

const ProfileBio = ({currentProfile}) => {
  return (
   <div>
     <div>
      {
        currentProfile?.tags.length !== 0 ? (
            <div>
                <h1>Tags Watched</h1>
                {
                    currentProfile?.tags.map((tag)=>{
                        return (
                            <p key={tag}>{tag}</p>
                        )
                    })
                }
            </div>
        ):(<p>0 tags Watched</p>)
      }
    </div>
    <div>
        {
            currentProfile?.about ? (
                <>
                <h4> About</h4>
                <p> {currentProfile?.about}</p>
                </>
            ):(<><p>No bio found</p></>)
        }
    </div>
   </div>
  )
}

export default ProfileBio
