import { useEffect } from "react";

const TARGETS = ".btn-primary, .btn-secondary, .btn-light, .icon-button, .social-links a, .segmented .nav-link";

// Drops a ripple into the pressed button. One listener on the document covers every button,
// including ones rendered later. Skipped entirely for people who prefer reduced motion.
const spawn = (el, x, y) => {
    const { width, height } = el.getBoundingClientRect();
    const size = 2 * Math.hypot(Math.max(x, width - x), Math.max(y, height - y));
    const dot = document.createElement("span");
    dot.className = "ripple";
    dot.setAttribute("aria-hidden", "true");
    Object.assign(dot.style, { width: `${size}px`, height: `${size}px`, left: `${x - size / 2}px`, top: `${y - size / 2}px` });
    el.appendChild(dot);
    const remove = () => dot.remove();
    dot.addEventListener("animationend", remove);
    setTimeout(remove, 1000);
};

const useRipple = () => {
    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onPointerDown = (e) => {
            const el = e.button === 0 && !reduced.matches && e.target.closest(TARGETS);
            if (!el) return;
            const r = el.getBoundingClientRect();
            spawn(el, e.clientX - r.left, e.clientY - r.top);
        };
        // Keyboard presses (Enter/Space) fire click with detail 0: ripple from the centre.
        const onClick = (e) => {
            const el = e.detail === 0 && !reduced.matches && e.target.closest(TARGETS);
            if (!el) return;
            const r = el.getBoundingClientRect();
            spawn(el, r.width / 2, r.height / 2);
        };
        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("click", onClick);
        };
    }, []);
};

export default useRipple;
