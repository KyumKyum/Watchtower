'use client';

import React, {ReactElement, useEffect, useRef, useState} from "react";
import {cls} from "@/logic/utils";

interface ScrollAnimFadeInOutWrapperProps {
    children: React.ReactNode,
    fastRender: boolean
}

export default function ScrollAnimFadeInOutWrapper({children, fastRender}:ScrollAnimFadeInOutWrapperProps): ReactElement {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [viewed, setViewed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(({target, isIntersecting}) => {
                    if(target === divRef.current) setViewed(isIntersecting);
                })
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: fastRender ? 0.2 : 0.5,
            }
        );

        if(divRef.current){ //* If current div is visible
            observer.observe(divRef.current); //* Let observer observe if the target is visible,
        }

        return () => {
            observer.disconnect();
        }
    },[])

    return (
        <div className={cls("transition-all duration-500",
            viewed ? "opacity-100" : "opacity-0")} ref={divRef}>
            {children}
        </div>
    )
}
