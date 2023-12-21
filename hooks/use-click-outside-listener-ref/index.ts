import { useEffect } from 'react';

type UseOutsideClickHandler = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void
) => () => void;

const useOutsideClickHandler: UseOutsideClickHandler = (
  customRef,
  callback
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      customRef.current &&
      !customRef.current.contains(event.target as Node)
    ) {
      callback();
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [customRef, callback]);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEscapeKey);
  };
};

export default useOutsideClickHandler;
