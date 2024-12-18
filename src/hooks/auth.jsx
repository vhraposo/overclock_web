import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ name, email, password }) {
    try {
      const response = await api.post('/sessions', { name, email, password })
      const { user, token } = response.data

      const { isAdmin } = user
      localStorage.setItem('@overclock:name', user.name)
      localStorage.setItem('@overclock:user', JSON.stringify(user))
      localStorage.setItem('@overclock:token', token)
      localStorage.setItem('@overclock:isadmin', String(isAdmin))

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setData({ user, token, isAdmin })
    } catch (e) {
      if (e.response) {
        toast(e.response.data.message)
      } else {
        toast.error('Não foi possível realizar o login')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@overclock:name')
    localStorage.removeItem('@overclock:token')
    localStorage.removeItem('@overclock:user')
    localStorage.removeItem('@overclock:isadmin')

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    localStorage.getItem('@overclock:user')
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)
        const response = await api.patch(`users/avatar`, fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@overclock:user', JSON.stringify(user))

      setData({ user, token: data.token, userAvatar: user.avatar })
      toast('Perfil atualizado com sucesso')
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message)
      } else {
        toast('Não foi possível atualizar o perfil')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@overclock:user')
    const token = localStorage.getItem('@overclock:token')
    const isAdmin = localStorage.getItem('@overclock:isadmin')
    const userAvatar = localStorage.getItem('@overclock:user')
      ? JSON.parse(localStorage.getItem('@overclock:user')).avatar
      : ''
    setData({ ...data, userAvatar })
    console.log('@overclock:user.avatar', userAvatar)

    if (token && user && isAdmin) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
        isAdmin: parseInt(isAdmin, 10) === 1,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        userName: data.user ? data.user.name : '',
        userAvatar: data.user ? data.user.avatar : '',
        isAdmin: data.isAdmin,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
