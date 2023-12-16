// Modules
import { useCallback, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

// Components
import Button from 'Components/Button';
import CodeEditorWindow from './CodeEditorWindow';
import CodeInput from './CodeInput';
import LanguagesDropdown from './LanguagesDropdown';
import OutputDetails from './OutputDetails';
import OutputWindow from './OutputWindow';
import ThemeDropdown from './ThemeDropdown';
import Title from './Title';

// Constants
import { DEFAULT_PIECE_OF_CODE } from 'Screens/LiveCode/Constants/defaultPieceOfCode';
import { LANGUAGE_OPTIONS } from 'Screens/LiveCode/Constants/languageOptions';

// Hooks
import useIsKeyPressed from 'Screens/LiveCode/Hooks/useIsKeyPressed';

// Library
import { defineTheme } from 'Screens/LiveCode/Library/defineTheme';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import s from './Main.module.scss';

export function Main() {
  const [codeInput, setCodeInput] = useState('');

  const [theme, setTheme] = useState('cobalt');

  const [code, setCode] = useState(DEFAULT_PIECE_OF_CODE);

  const [outputDetails, setOutputDetails] = useState(null);

  const [processing, setProcessing] = useState(null);

  const [language, setLanguage] = useState(LANGUAGE_OPTIONS[0]);

  const enterPress = useIsKeyPressed('Enter');

  const ctrlPress = useIsKeyPressed('Control');

  const onSelectChange = (sl) => setLanguage(sl);

  const onChange = useCallback((action, data) => {
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('Така умова не може бути оброблена.', action, data);
      }
    }
  }, []);

  const checkStatus = useCallback(async (token) => {
    const options = {
      headers: {
        'X-RapidAPI-Key': '6d9b49f912msh57272c86c87caaap178507jsn38041eb22164',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      method: 'GET',
      params: {
        base64_encoded: 'true',
        fields: '*',
      },
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
    };

    try {
      const response = await axios.request(options);
      const statusId = response.data.status?.id;

      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast('Успішно скомпілювалося!');
        return;
      }
    } catch (err) {
      setProcessing(false);
      showErrorToast();
    }
  }, []);

  const handleCompile = useCallback(() => {
    setProcessing(true);

    const formData = {
      language_id: language.id,
      source_code: btoa(code),
      stdin: btoa(codeInput),
    };

    const options = {
      data: formData,
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '6d9b49f912msh57272c86c87caaap178507jsn38041eb22164',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      method: 'POST',
      params: {
        base64_encoded: 'true',
        fields: '*',
      },
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
    };

    axios.request(options)
      .then((response) => {
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        const status = err.response.status;

        if (status === 429) {
          showErrorToast('Перевищено квоту в 100 запитів за день!', 10000);
        }
        setProcessing(false);
      });
  }, [checkStatus, code, codeInput, language.id]);

  useEffect(() => {
    if (enterPress && ctrlPress) handleCompile();
  }, [ctrlPress, enterPress, handleCompile]);

  function handleThemeChange(th) {
    const theme = th;

    if (['light', 'vs-dark'].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }

  useEffect(() => {
    defineTheme('oceanic-next').then((_) =>
      setTheme({
        label: 'Oceanic Next',
        value: 'oceanic-next',
      })
    );
  }, []);

  const showSuccessToast = (message) => {
    toast.success(message || 'Успішно скомпілювалося!', {
      autoClose: 1000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'top-right',
      progress: undefined,
    });
  };

  const showErrorToast = (message, timer) => {
    toast.error(message || 'Щось пішло не так! Будь ласка, спробуйте ще раз.', {
      autoClose: timer ? timer : 1000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'top-right',
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        autoClose={2000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
      />

      <div className={s['body']}>
        <div className={s['body__code-wrapper']}>
          <CodeEditorWindow
            code={code}
            language={language?.value}
            onChange={onChange}
            theme={theme.value}
          />
        </div>

        <div className={s['body__code-details']}>
          <div className={s['body__code-details__editor-settings']}>
            <Title>Конфігурація редактора</Title>
            <div className={s['body__code-details__editor-settings__options']}>
              <LanguagesDropdown
                onSelectChange={onSelectChange}
              />
              <ThemeDropdown
                handleThemeChange={handleThemeChange}
                theme={theme}
              />
            </div>
          </div>
          <div className={s['body__code-details__controls']}>
            <Title>Ввод та компіляція</Title>
            <div className={s['body__code-details__controls__actions']}>
              <CodeInput
                codeInput={codeInput}
                setCodeInput={setCodeInput}
              />
              <Button
                disabled={!code || processing}
                onClick={handleCompile}
              >
                {processing ? 'Обробка...' : 'Скомпілювати та Виконати'}
              </Button>
            </div>
          </div>
          <OutputWindow
            outputDetails={outputDetails}
          />
          {outputDetails && (
            <OutputDetails
              outputDetails={outputDetails}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
