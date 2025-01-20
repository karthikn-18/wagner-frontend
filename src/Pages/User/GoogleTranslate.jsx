import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {

    const loadGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };


    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,it',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    loadGoogleTranslateScript();
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;
