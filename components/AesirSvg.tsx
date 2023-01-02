'use client';

import {useEffect, useRef} from "react";

export default function AesirSvg({multiplicator}: { multiplicator: number }) {
    const aesirRef = useRef();

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const MAX_MOVEMENT = 50;
            // calculate percentage distance from mouse to center of img

            const currentImageFocus = aesirRef.current
            const aesirParent = document.getElementById("aesirContainer")
            if (currentImageFocus && aesirParent) {
                const centerXOfScreen = aesirParent.getBoundingClientRect().width / 2
                const centerYOfScreen = aesirParent.getBoundingClientRect().height / 2
                const totalMovementX = (event.clientX - centerXOfScreen) / 1000;
                const totalMovementY = (event.pageY - centerYOfScreen) / 1000;

                console.log(event.pageY)

                currentImageFocus.style.transform = `translate(${MAX_MOVEMENT * totalMovementX * multiplicator}px, ${MAX_MOVEMENT * totalMovementY * multiplicator}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return <img alt={"aesir logo"} src={"/aesir.svg"} width={"300px"} height={"300px"} ref={aesirRef} style={{
        "position": "absolute",
        "top": "calc(50% - 150px)",
        "left": "calc(50% - 150px)",
    }}/>
}