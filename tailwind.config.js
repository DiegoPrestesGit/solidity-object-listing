/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                LuckiestGuy: "LuckiestGuy",
                Baloo2Regular: "Baloo2-Regular",
                Baloo2Medium: "LuckiestGuy-Medium",
                Baloo2ExtraBold: "Baloo2-ExtraBold",
                BubbleGum: "BubbleGum",
                Londrina: "Londrina",
                Monofett: "Monofett",
                MonomaniacRegular: "Monomaniac-Regular",
                MrDafoe: "MrDafoe",
            },
        },
    },
    plugins: [],
};
