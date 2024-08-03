import React, { useEffect } from 'react'
import { setIsAuth } from '../../store/features/ui/uiSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { ui } = useAppSelector(state => state);


  useEffect(() => {
    if (ui.isAuth == true) {
      navigate("/home")
    }
  }, [ui.isAuth])

  return (
    <div>Login
      <br />
      <div>
        {
          ui.isAuth === true ? "isAuth = true" : "isAuth = false"
        }
      </div>
      <br />
      <button onClick={() => {
        dispatch(setIsAuth(true))
      }}>Giriş</button>
    </div>
  )
}

export default Login