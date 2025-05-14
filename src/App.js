import Header from './components/Header';
import Banner from './components/Banner';

function App() {
let title = 'Revolve';
let isLoggedIn = false;

const navLinks = [
  { index: 0, name: 'About us', url: 'https://'},
  { index: 0, name: 'About us', url: 'https://'},
  { index: 0, name: 'About us', url: 'https://'},
  { index: 0, name: 'About us', url: 'https://'}
]

const movies = [
    {
      id: 1001,
      title: 'Jurassic Park',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg'
    },
    {
      id: 1002,
      title: 'The Lion King',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-lion-king.jpg'
    },
    {
      id: 1003,
      title: 'Avengers: Infinity War',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/avengers-infinity-war.jpg'
    },
    {
      id: 1004,
      title: 'The Shining',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-shining.jpg'
    }
]

  return (
    <>
    <Header />
    <main>
      <div className='container'>
        {/* <Banner/> */}
      </div>
    </main>
    <footer></footer>
    </>
  );
}

export default App;
