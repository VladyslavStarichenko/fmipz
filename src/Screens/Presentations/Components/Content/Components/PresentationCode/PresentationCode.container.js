// Modules
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

// Components
import PresentationCodeView from './PresentationCode.view';

// Hooks
import useIsKeyPressed from 'Screens/LiveCode/Hooks/useIsKeyPressed';
import usePresentation from 'Hooks/usePresentation';

// Library
import { defineTheme } from 'Screens/LiveCode/Library/defineTheme';

// Styles
import 'react-toastify/dist/ReactToastify.css';

export function PresentationCodeContainer() {
  const { selectedPresentation } = usePresentation();

  const [code, setCode] = useState(() => {
    return selectedPresentation?.code;
  });

  const [outputDetails, setOutputDetails] = useState(null);

  const [processing, setProcessing] = useState(null);

  const enterPress = useIsKeyPressed('Enter');

  const ctrlPress = useIsKeyPressed('Control');

  const presentationCodeLanguageId = selectedPresentation?.language?.id;

  const theme = useMemo(() => {
    return {
      label: 'Oceanic Next',
      value: 'oceanic-next',
    };
  }, []);

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
      language_id: presentationCodeLanguageId,
      source_code: btoa(code),
      stdin: btoa(''),
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
  }, [checkStatus, code, presentationCodeLanguageId]);

  useEffect(() => {
    if (enterPress && ctrlPress) handleCompile();
  }, [ctrlPress, enterPress, handleCompile]);

  useEffect(() => {
    defineTheme('oceanic-next').then((_) => _);
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
      <PresentationCodeView
        code={code}
        handleCompile={handleCompile}
        language={selectedPresentation?.language}
        onChange={onChange}
        outputDetails={outputDetails}
        processing={processing}
        theme={theme}
      />
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
    </>
  );
}

export default PresentationCodeContainer;
