import React from 'react';
import Main from '../Components/Main';
import Row from '../Components/Row';
import Requests from '../constants/Urls';

const Home = () => {
  console.log("home come");
  return (
    <>
      <Main />
      <Row title='Up Coming' fetchUrl={Requests.trending} />
      <Row title='Comedy Movies' fetchUrl={Requests.ComedyMovies} />
      <Row title='Action Movies' fetchUrl={Requests.ActionMovies} />
      <Row title='Horror Movies' fetchUrl={Requests.HorrorMovies} />
      <Row title='Romance Movies' fetchUrl={Requests.Documentaries} />
    </>
  );
};

export default Home;
