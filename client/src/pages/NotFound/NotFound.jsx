import { useNavigate } from 'react-router-dom';
import React from 'react';
import error from '../../assets/error.jpg';

const NotFound = () => {

    const [timer, setTimer] = React.useState(7);
    const navigate = useNavigate();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    const timeout = setTimeout(() => {
        navigate('/', { replace: true })
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);



  return (
    <div className='container-fluid not-found-container'>
      <div className='imgDiv text-center'>
        <img className='error-image' src={error} alt='Error' />
      </div>
      <div className='textDiv text-center'>
        <h1>No Result Found</h1>
        <p className='description'>
            File Doesn't Exists
        </p>
        
        <h5 className="small_heading fontWeight600">Redirected to Homepage within &nbsp; <span className='text-primary'>{timer} sec...</span> </h5>
      </div>
    </div>
  );
};

export default NotFound;
