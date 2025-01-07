
export const getApiUrl = (): string => {
    const lang = localStorage.getItem("lang") || "en";
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}${lang}`;
    return baseUrl;
};
