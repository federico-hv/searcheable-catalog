# Digital Salesman

**Digital Salesman** is an AI-powered shopping assistant that helps users efficiently search across multiple online stores. It acts as a “prefilter” for your shopping experience: you select a store, type your query, and the AI intelligently crafts optimized search instructions to find the best results on that store.

---

## Features

- **Multi-store support**: Choose from various online retailers.
- **AI-powered search assistance**: The AI pre-processes your query to match the store’s search behavior.
- **Smart filtering**: Reduces irrelevant results and helps you find what you need faster.
- **Simple interface**: Search bar + store selector for a smooth experience.

---

## How it works

1. User selects a store.
2. User enters a search query.
3. AI processes the query and adapts it to the selected store’s search format.
4. Relevant results are returned to the user.

---

## Tech Stack

- **Frontend**: Next.js
- **Backend services**: Golang and Python microservices for AI processing and store-specific logic
- **AI**: Integrates with an AI model to prefilter and optimize search queries
- **Containerization**: Docker + Docker Compose for multi-service deployment

---

## Getting Started

### Development

```sh
docker compose -f docker-compose.dev.yml build
docker compose -f docker-compose.dev.yml up
```

- Next.js dev server with hot reload

- Golang service with air for live reloading

### Production

Run the production stack:

```sh
docker compose -f docker-compose.prod.yml up --build
```

- Runs production images
- No volume mounts; optimized builds

## Future Improvements

- Add more stores with custom AI prefilter logic
- Integrate user preferences for personalized search results
- Analytics dashboard for popular queries and trends

## Todo

- [ ] Kit -> Deploy this docker compose with all services working

- [ ] Kit -> Research on user categorization with scores depending on questions
