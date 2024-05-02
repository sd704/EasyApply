import { useRef, useCallback } from 'react';

const useObserve = (increaseOffset) => {
    const observer = useRef();
    const ref = useCallback(element => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                increaseOffset();
            }
        });
        if (element) observer.current.observe(element);
    }, []);

    return ref;
}

export default useObserve;