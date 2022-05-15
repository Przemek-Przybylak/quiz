export const getWords = async () => {
    const response = await fetch("/quiz/words.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};