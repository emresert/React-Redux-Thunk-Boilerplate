import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { getUsers, setIsAuth } from '../../store/features/ui/uiSlice';



//import './styles/main.scss';

const App: React.FC = () => {
  const { ui } = useAppSelector(state => state);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUsers());
  }, [])


  return (
    <div className="app-container">

      <div>
        {
          ui.isAuth === true ? "isAuth = true" : "isAuth = false"
        }
      </div>

      <br />


      {
        ui.users.map((uItem: any) => {
          return (
            <div>
              {uItem.name}
            </div>
          )
        })
      }


      <br />
      <button onClick={() => {
        dispatch(setIsAuth(false))
      }}>Çıkış</button>

    </div>
  );
};

export default App;