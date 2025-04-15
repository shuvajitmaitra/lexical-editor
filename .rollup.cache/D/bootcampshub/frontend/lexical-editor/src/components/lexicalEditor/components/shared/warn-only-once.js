export function warnOnlyOnce(message) {
    if (process.env.NODE_ENV === 'production') {
        return;
    }
    let run = false;
    return () => {
        if (!run) {
            console.warn(message);
        }
        run = true;
    };
}
//# sourceMappingURL=warn-only-once.js.map