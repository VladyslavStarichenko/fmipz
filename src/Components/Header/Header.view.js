// Modules
import { memo } from 'react';

// Components
import CodeEditorButton from './Components/CodeEditorButton';
import MainLogo from './Components/MainLogo';
import PresentationsButton from './Components/PresentationsButton';

// Hooks
import useIsLiveCodePage from 'Hooks/useIsLiveCodePage';
import useRedirectToFirstPresentation from 'Hooks/useRedirectToFirstPresentation';

// Styles
import s from './Header.module.scss';

export function HeaderView() {
  const isLiveCodePage = useIsLiveCodePage();

  useRedirectToFirstPresentation();

  return (
    <div className={s['container']}>
      <MainLogo />
      {isLiveCodePage
        ? <PresentationsButton />
        : <CodeEditorButton />
      }
    </div>
  );
}

export default memo(HeaderView);
