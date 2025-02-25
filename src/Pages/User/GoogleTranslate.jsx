import React, { useEffect, useState } from 'react';
import { CiGlobe } from 'react-icons/ci';

const GoogleTranslate = () => {
  const [showTranslate, setShowTranslate] = useState(false);
  const [languageOptions] = useState([
    { code: 'en', label: 'ENG' },
    { code: 'de', label: 'German' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
    { code: 'it', label: 'Italian' }
  ]);

  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = function () {
      if (!window.googleTranslateInitialized) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,es,fr,de,it',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
        window.googleTranslateInitialized = true;
      }
    };

    loadGoogleTranslateScript();
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;

    const googleTranslateElement = window.google.translate.TranslateElement;
    if (googleTranslateElement) {
      const instance = googleTranslateElement.getInstance();
      instance?.setLanguage(selectedLanguage); // Set the language directly
    }
  };

  const toggleTranslateVisibility = () => {
    setShowTranslate((prev) => !prev);
  };

  return (
    <div data-aos="fade-down">
      <div className="item" style={{ display: 'none' }}>
        <CiGlobe className="icon" onClick={toggleTranslateVisibility} />
        <div id="language-selector">
          <select className="select-language" onChange={handleLanguageChange}>
            {languageOptions.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        id="google_translate_element"
      ></div>
    </div>
  );
};

export default GoogleTranslate;
