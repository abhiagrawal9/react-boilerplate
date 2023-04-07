import { FC, Suspense } from 'react';

import CircularLoader from '../components/shared/Loader/CircularLoader';

type Props = {
  children: React.ReactNode;
};

// Suspense requires a Fallback
const Fallback: FC = () => <CircularLoader />;

const LazyLoaded: FC<Props> = ({ children }) => {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
};

export default LazyLoaded;
