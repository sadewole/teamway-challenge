import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DispatchQuestionContext } from '../context/QuestionProvider';
import http from '../common/http';
import PrivateRoute from '../components/PrivateRoute';
import NotFoundPage from '../views/NotFoundPage';
import FeedbackPage from '../views/FeedbackPage';
import HomePage from '../views/HomePage';
import ErrorHandler from './ErrorHandler';

const App = () => {
  const questionDispatch = useContext(DispatchQuestionContext);

  useEffect(() => {
    http.get('questions').then(([questions]) => {
      questionDispatch({
        action: 'set',
        payload: questions,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <ErrorHandler>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='feedback'
            element={<PrivateRoute component={<FeedbackPage />} />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </ErrorHandler>
    </BrowserRouter>
  );
};

export default App;
