import './styles/UsersCard.css'

const UsersCard = ({ user, deleteUserById, setIsCloseForm, setUpdateInfo }) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        setIsCloseForm()
    }


  return (
    <article className="users">
        <div className="users__container">
            <h1 className="users__name">{`${user.first_name} ${user.last_name}`}</h1> <hr className='user__line'/>
            <ul className="users__list">
                <li className="users__item">
                    <span className="users__title">Email</span> <br />
                    <span className="users__info">{user.email}</span>
                </li>
                <li className="users__item">
                    <span className="users__title">Birthday</span> <br />
                    <span className="users__info">{user.birthday}</span>
                </li>
            </ul> <hr className='user__line'/>
            <div className='user__btn-container'>
                <button className='user__btn1' onClick={handleDelete}><i className='bx bx-trash-alt'></i></button>
                <button className='user__btn2' onClick={handleUpdate}><i className='bx bx-message-square-edit'></i></button>
            </div>
        </div>
    </article>
  )
}

export default UsersCard