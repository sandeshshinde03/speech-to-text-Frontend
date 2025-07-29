import React, { useEffect, useState } from 'react';
import AudioUploader from './components/AudioUploader';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  // Apply theme class to root html
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition duration-500 ${
      darkMode
        ? 'bg-gray-900 text-white'
        : 'bg-gradient-to-br from-green-100 via-white to-teal-100 text-gray-900'
    }`}>

      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-md bg-purple-600 text-white dark:bg-yellow-400 dark:text-black shadow-md hover:scale-105 transition"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Project Name at the top */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-800 dark:text-purple-300 drop-shadow-sm">
          🗣️🎙️ Speech-to-Text Converter 🔤🧾
        </h1>
        <p className="mt-2 text-lg md:text-xl text-purple-600 dark:text-purple-200 font-medium">
          Convert your voice to text
        </p>
      </header>

      {/* AudioUploader Component */}
      <AudioUploader />
    </div>
  );
}

export default App;
