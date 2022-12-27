import { useParams } from 'react-router-dom';

const usePortalId = (): string => {
  const { portalId } = useParams<{ portalId: string }>();

  return portalId || '33434';
};

export default usePortalId;
