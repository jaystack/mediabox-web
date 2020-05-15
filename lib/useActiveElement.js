import React from 'react';

export const useActiveElement = () => {
  const [active, setActive] = React.useState(null);
  const handleFocusIn = () => setActive(document.activeElement);
  React.useEffect(() => {
    if (document !== undefined) document.addEventListener('focusin', handleFocusIn);
    return () => document !== undefined && document.removeEventListener('focusin', handleFocusIn);
  }, []);

  return active;
};
