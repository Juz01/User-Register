
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UsersCard from './components/UsersCard'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [isCloseForm, setIsCloseForm] = useState(true)
  
  const baseUrl = 'https://users-crud.academlo.tech/'
  const [
    users,
    getAllUser,
    createNewUser,
    deleteUserById,
    updateUserById
  ] = useFetch(baseUrl)

  useEffect(() => {
    getAllUser('/users')
  }, [])

  const handleOpenForm = () => {
    setIsCloseForm(false)
  }

  return (
    <div className='app'>
      <div className='app__container'>
        <h1 className='app__title'>Users</h1>
        <button className='app__btn' onClick={handleOpenForm}>
          <h2 className='app__btn-title'>+ New User</h2>
        </button>
      </div>
      
      <div className={`form-container ${isCloseForm && 'form__close'}`}>
        <FormUsers 
          createNewUser={createNewUser}
          updateUserById={updateUserById}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          setIsCloseForm={setIsCloseForm}
        />
      </div>
      <div className="users__card">
        {
          users?.map(user => (
            <UsersCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setIsCloseForm={setIsCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
