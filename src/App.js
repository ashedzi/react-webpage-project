import Header from './components/Header';
import Banner from './components/Banner';

function App() {
let title = 'Revolve';
let heroText = 'Relive the Magic of Movies';
let heroSubtext = 'Dive into a world of unforgettable stories, iconic characters, and cinematic masterpieces.';
let isLoggedIn = false;

const navLinks = [
  { index: 0, name: 'About us', url: 'https://'},
  { index: 1, name: 'The team', url: 'https://'},
  { index: 2, name: 'Our services', url: 'https://'},
  { index: 3, name: 'Contact us', url: 'https://'}
]

// const movies = [
//     {
//       id: 1001,
//       title: 'Jurassic Park',
//       poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg'
//     },
//     {
//       id: 1002,
//       title: 'The Lion King',
//       poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-lion-king.jpg'
//     },
//     {
//       id: 1003,
//       title: 'Avengers: Infinity War',
//       poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/avengers-infinity-war.jpg'
//     },
//     {
//       id: 1004,
//       title: 'The Shining',
//       poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-shining.jpg'
//     }
// ]

  return (
    <>
    <Header title={title} navLinks={navLinks}/>
    <main>
      <div className='container'>
        <Banner heroText={heroText} heroSubtext={heroSubtext} isLoggedIn={isLoggedIn}/>
      </div>
    </main>
    <footer></footer>
    </>
  );
}

export default App;
