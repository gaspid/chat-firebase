import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/rout'
import Main from './Main'

const AppRouter = () => {
  const users = true
  //const [user] = useAuthState()
  return users ? (
    <Routes>
      <Route path="/" element={<Main />}>
        {privateRoutes.map((Link) => (
          <Route
            path={Link.path}
            key={Link.path}
            element={<Link.Component />}
          />
        ))}
        <Route path="/*" element={<Navigate to={CHAT_ROUTE} />} />
        <Route path="/" element={<Navigate to={CHAT_ROUTE} />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Main />}>
        {publicRoutes.map((Link) => (
          <Route
            path={Link.path}
            key={Link.path}
            element={<Link.Component />}
          />
        ))}
        <Route path="/*" element={<Navigate to={LOGIN_ROUTE} />} />
        <Route path="/" element={<Navigate to={LOGIN_ROUTE} />} />
      </Route>
    </Routes>
  )
}

export default AppRouter