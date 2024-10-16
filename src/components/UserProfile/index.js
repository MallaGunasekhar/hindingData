import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role, deleteUser,uniqueNo} = userDetails
  const onDelte = () => deleteUser(uniqueNo)
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button className="delete-button" onClick={onDelte} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="crossed"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default UserProfile
