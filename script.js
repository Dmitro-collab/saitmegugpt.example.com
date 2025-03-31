const axios = require("axios");
const settings = {
    customDomain: "saitmegugpt.example.com" // Уточніть правильність домену
};

// API ключ та базовий URL
const API_KEY = "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";
const BASE_URL = "`https://api.openai.com/v1/completions";

// Функція для запиту даних від API
async function getAIResponse(input) {
    try {
        const response = await axios.post(BASE_URL, {
            prompt: input
        }, {
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            }
        });

        return response.data;
    } catch (error) {
        console.error("Помилка запиту:", error);
    }
}

// Виклик функції з прикладом запиту
getAIResponse("Напишіть текст для сайту")
    .then(data => console.log("Результат від AI:", data))
    .catch(err => console.error("Помилка:", err));