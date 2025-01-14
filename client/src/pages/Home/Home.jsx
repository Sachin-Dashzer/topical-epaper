import React, { Suspense, lazy } from 'react';

// Lazy load all major components
const HeroBanner = lazy(() => import('./HeroBanner.jsx'));
const LatestUploads = lazy(() => import('./LatestUploads.jsx'));
const CallToAction = lazy(() => import('./CallToAction.jsx'));
const Form = lazy(() => import('./Form.jsx'));
const Textslider = lazy(() => import('./Textslider.jsx'));

// Loading skeleton components for better UX
const LoadingSkeleton = ({ height = 'h-96', className = '' }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${height} ${className}`} />
);

// Component-specific loading states
const loadingStates = {
  HeroBanner: () => <LoadingSkeleton height="h-[70vh]" className="bg-dark" />,
  LatestUploads: () => <LoadingSkeleton height="h-[50vh]" />,
  CallToAction: () => <LoadingSkeleton height="h-48" />,
  Textslider: () => <LoadingSkeleton height="h-24" />,
  Form: () => <LoadingSkeleton height="h-[60vh]" />
};

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Wrap each section in error boundaries and suspense */}
      <section>
        <Suspense fallback={loadingStates.HeroBanner()}>
          <HeroBanner />
        </Suspense>
      </section>

      <section>
        <Suspense fallback={loadingStates.LatestUploads()}>
          <LatestUploads />
        </Suspense>
      </section>

      <section>
        <Suspense fallback={loadingStates.CallToAction()}>
          <CallToAction />
        </Suspense>
      </section>

      <section>
        <Suspense fallback={loadingStates.Textslider()}>
          <Textslider />
        </Suspense>
      </section>

      <section>
        <Suspense fallback={loadingStates.Form()}>
          <Form />
        </Suspense>
      </section>
    </main>
  );
};

// Add display name for better debugging
Home.displayName = 'Home';

export default Home;