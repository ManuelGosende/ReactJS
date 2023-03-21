import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { store } from './store';


export const CalendarApp = () => {
  return (
    // El store se ubica en la parte más alta de nuestra aplicación, para que cualquier componente tenga acceso a él.
    <Provider store={ store }> 
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}
