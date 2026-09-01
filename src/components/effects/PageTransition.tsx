import React, { useEffect, useState } from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};

function PageTransition({ children }: PageTransitionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`page-transition ${visible ? "is-visible" : ""}`.trim()}>
      {children}
    </div>
  );
}

export default PageTransition;
