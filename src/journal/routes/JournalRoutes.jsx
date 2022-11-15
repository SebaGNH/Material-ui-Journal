import { Routes, Route, Navigate } from 'react-router-dom' 
import  JournalPage  from '../pages/JournalPage'

const JournalRoutes = () => {
  return (
    <>
      <Routes>
        <Route to='/' elements={ <JournalPage />} />
        <Route to='/*' elements={ <Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default JournalRoutes