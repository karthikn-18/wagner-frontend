import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Function to load the Google Translate script
    const loadGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate when the script is loaded
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Default language of your website
          includedLanguages: 'en,es,fr,de,it', // List of languages you want to support
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, // Choose the layout
        },
        'google_translate_element' // Container for the Google Translate widget
      );
    };

    loadGoogleTranslateScript();
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;
