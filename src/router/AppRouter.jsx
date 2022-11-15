import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalPage } from '../journal/pages'


export const AppRouter = () => {
  return (
  <>
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />}/>
      <Route path='/*' element={<JournalPage  />}/>
    </Routes>
  </>
  )
}