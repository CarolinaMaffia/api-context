import './App.css';
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import C1 from './components/c1';
function App() {
  const [theme, setTheme] = useState('light');

  const handleClick = () => {
    setTheme('dark');
  }

  const handleCallback = () => {
    setTheme('light');
  }

  const themeValue = {
    theme: theme,
    handleCallback: handleCallback
  }

  console.log(theme);
  return (
    <ThemeProvider value={themeValue}>
      <button onClick={handleClick}>Cambiar Tema</button>
      <p>En App el valor del theme es: {theme}</p>
        <C1/>
    </ThemeProvider>
  );
}

export default App;
