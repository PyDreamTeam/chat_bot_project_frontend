import { useEffect, useRef, RefObject } from "react";

export const InfiniteScroll = ({ onLoadMore }: {onLoadMore: () => void;}) => {
    const observerRef: RefObject<HTMLDivElement | null | undefined> = useRef();

    useEffect(() => {
        const options = {
            threshold: 1,
            rootMargin: "100px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    onLoadMore();
                }
            });
        }, options);

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [onLoadMore]);

    //@ts-ignore
    return <div ref={observerRef} />;
};