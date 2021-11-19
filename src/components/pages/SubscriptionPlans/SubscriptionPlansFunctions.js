function scrollPlansHorizontally(reference, side) {
    if (side === 'left') {
        reference.current.scrollLeft -= reference.current.clientWidth;
    } else {
        reference.current.scrollLeft += reference.current.clientWidth;
    }
}

export {
    scrollPlansHorizontally,
};
