// Modules
import { useParams } from 'react-router-dom';

export function usePresentationId() {
  const { presentationId } = useParams();

  const presentationIdNumber = +presentationId;

  const isInRangeOfPossibleIds = [
    presentationIdNumber >= 0,
    presentationIdNumber <= 6,
  ].every(Boolean);

  return isInRangeOfPossibleIds
    ? presentationId
    : '0';
}

export default usePresentationId;
