# CERO-13 Web Demo

A small public-facing web app for testing the CERO-13 care-ethics reasoning overlay.

## Run locally
1. Install Node.js 20+.
2. In this folder run `npm install`.
3. Copy `.env.example` to `.env` and insert your OpenAI API key.
4. Load the environment variables in your host/shell and run `npm start`.
5. Open `http://localhost:3000`.

## Put it online
Deploy this folder to a Node-compatible host, add `OPENAI_API_KEY` as a server-side environment variable, and start with `npm start`.

Important: never put the API key into `public/index.html` or other browser code. The included server keeps it server-side.

The app uses OpenAI's Responses API. API usage is billed to the API account associated with the key.
