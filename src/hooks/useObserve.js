import { useRef, useCallback } from 'react';

const useObserve = (length, increaseOffset) => {
    const observer = useRef();
    const ref = useCallback(element => {
        if (length === 0) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                increaseOffset();
            }
        });
        if (element) observer.current.observe(element);
    }, [length]);

    return ref;
}

export default useObserve;