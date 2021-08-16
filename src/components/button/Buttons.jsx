import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImgArrivals from '../svg/ImgArrivals.jsx';
import ImgDepartures from '../svg/ImgDepartures.jsx';
import './buttons.scss';

const Buttons = () => {
  const [isClassActivity, setIsClassActivity] = useState({
    departures: null,
    arrivals: null,
  });

  const { search, pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/departure') {
      setIsClassActivity({
        departures: 'activity',
        arrivals: false,
      });
    }

    if (pathname === '/arrival') {
      setIsClassActivity({
        departures: false,
        arrivals: 'activity',
      });
    }
  }, [pathname]);

  return (
    <div className="directions">
      <Link
        className={`directions__link departures ${isClassActivity.departures}`}
        to={`/departure${search}`}
      >
        <ImgDepartures />
        Departures
      </Link>
      <Link
        className={`directions__link arrivals ${isClassActivity.arrivals}`}
        to={`/arrival${search}`}
      >
        <ImgArrivals />
        Arrivals
      </Link>
    </div>
  );
};

export default Buttons;
