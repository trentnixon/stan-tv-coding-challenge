import React, { Suspense, ComponentType } from "react";

interface WithSuspenseProps {
  fallback: React.ReactNode;
}

const withSuspense =
  <P extends object>(
    WrappedComponent: ComponentType<P>,
    { fallback }: WithSuspenseProps
  ): React.FC<P> =>
  (props) =>
    (
      <Suspense fallback={fallback}>
        <WrappedComponent {...props} />
      </Suspense>
    );

export default withSuspense;
