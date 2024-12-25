export const getApiUrl = (): string => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}${localStorage.getItem("lang") || 'en'}`;
    return `${baseUrl}`;
};
