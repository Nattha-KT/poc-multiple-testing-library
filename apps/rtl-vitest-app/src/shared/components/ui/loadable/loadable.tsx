/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Loadable.tsx
import { Suspense } from 'react';

const Loadable = (Component: React.LazyExoticComponent<any>) => {
  return (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
