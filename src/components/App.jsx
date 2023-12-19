import { Suspense } from 'react';

export const App = () => {
  return (
  <>
    <div style={{display:"flex"}}>
      <Suspense fallback={'Loading...'}>
        <main>
        </main>
      </Suspense>
    </div>
  </>
  );
};
