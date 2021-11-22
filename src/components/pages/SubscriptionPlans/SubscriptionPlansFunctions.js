function scrollPlansHorizontally(reference, side) {
    if (side === 'left') {
        reference.current.scrollLeft -= reference.current.clientWidth;
    } else {
        reference.current.scrollLeft += reference.current.clientWidth;
    }
}

function startNewSubscription(newSubscriptionData, setNewSubscriptionData, plan, navigate) {
    setNewSubscriptionData({ ...newSubscriptionData, plan });
    navigate('/new-subscription');
}

export {
    scrollPlansHorizontally,
    startNewSubscription,
};
