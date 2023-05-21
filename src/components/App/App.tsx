import classNames from 'classnames';

import reactLogo from 'assets/react.svg';

import cl from './App.module.css';

import Card from 'components/Card';

function App() {
  const imgStyles = classNames(cl.logo, cl.react);

  return (
    <>
      <div className={cl.app}>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className={imgStyles} alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Card />
      <p className={cl.readTheDocs}>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
