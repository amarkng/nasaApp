import Main from './components/Main';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import { useEffect, useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  function handleToogleModal() {
    setShowModal(!showModal);
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        'https://api.nasa.gov/planetary/apod' +
        `?api_key=${NASA_KEY}&thumbs=true`;

      const today = new Date().toDateString();
      const localKey = `NASA-sr-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log('Fetched from cache today');
        return;
      }
      localStorage.clear();

      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('Fetched from API today');
      } catch (error) {
        console.log(err.messsage);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className='loadingState'>
          <i className='fa-solid fa-gear'></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToogleModal={handleToogleModal} />
      )}
      {data && <Footer data={data} handleToogleModal={handleToogleModal} />}
    </>
  );
}

export default App;
