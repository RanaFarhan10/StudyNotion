import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ProtectedRoute({ isloggedIn, children }) {
  useEffect(() => {
    if (!isloggedIn) {
      toast.error("Please login to continue")
    }
  }, [isloggedIn])

  if (!isloggedIn) {
    return <Navigate to="/Login" replace />
  }
  return children
}

export default ProtectedRoute
