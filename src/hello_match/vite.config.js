import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                "resources/scss/app.scss",
                "resources/scss/header.scss",
                "resources/js/app.jsx",
            ],
            refresh: true,
        }),
    ],
});
