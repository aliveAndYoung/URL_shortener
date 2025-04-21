const isNotShortenedUrl = (url) => {
    try {
        const urlObj = new URL(url);

        const isShortened =
            urlObj.hostname === "localhost" &&
            urlObj.port === "3000" &&
            urlObj.pathname === "/myapp/" &&
            urlObj.searchParams;

        return !isShortened;
    } catch (error) {
        return true;
    }
};

module.exports = {
    isNotShortenedUrl,
};
