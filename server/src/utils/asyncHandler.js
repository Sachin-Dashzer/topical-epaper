export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        if (!res.headersSent) {
            next(error); 
        } else {
            console.error("Error occurred after response was sent:", error);
        }
    }
};
