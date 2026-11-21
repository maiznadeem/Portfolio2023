import { useLayoutEffect, useRef } from "react";

// A gradient pill that slides to whichever option of its parent .segmented control is active.
// It watches the options' classes, so it works with react-bootstrap tabs and plain buttons alike.
const SegmentedIndicator = () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        const pill = ref.current;
        const group = pill.parentElement;
        let first = true;

        const place = () => {
            const active = group.querySelector(".nav-link.active");
            if (!active) return;
            const g = group.getBoundingClientRect();
            const a = active.getBoundingClientRect();
            Object.assign(pill.style, {
                transition: first ? "none" : "",
                width: `${a.width}px`,
                height: `${a.height}px`,
                transform: `translate(${a.left - g.left - group.clientLeft}px, ${a.top - g.top - group.clientTop}px)`,
            });
            first = false;
        };

        place();
        group.classList.add("has-indicator");
        const classes = new MutationObserver(place);
        classes.observe(group, { subtree: true, attributes: true, attributeFilter: ["class"] });
        const size = new ResizeObserver(place);
        size.observe(group);
        return () => {
            classes.disconnect();
            size.disconnect();
            group.classList.remove("has-indicator");
        };
    }, []);

    return <span ref={ref} className="segmented__indicator" aria-hidden="true" />;
};

export default SegmentedIndicator;
