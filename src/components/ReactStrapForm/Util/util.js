export const addEventListenerToElement = (targetElementId, eventType, listener) => {
    document.getElementById(targetElementId)
        .addEventListener(eventType, listener);
};
