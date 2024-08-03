import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/features/ui/uiSlice';



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
     
        {
          ui.users.map((uItem:any)=>{
            return(
              <div>
                 {uItem.name}
              </div>
            )
          })
        }

    </div>
  );
};

export default App;