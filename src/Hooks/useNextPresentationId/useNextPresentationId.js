// Hooks
import usePresentationId from 'Hooks/usePresentationId';

export function useNextPresentationId() {
  const presentationId = usePresentationId();

  const presentationIdNumber = +presentationId;

  return presentationIdNumber === 6
    ? null
    : presentationIdNumber + 1;
}

export default useNextPresentationId;
