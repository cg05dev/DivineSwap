# DivineSwap Frontend

A decentralized exchange (DEX) built on Solana with a modern, user-friendly interface.

## Backend Integration Guide

### API Structure

The frontend is prepared for backend integration with the following structure:

1. **Types** (`src/types/api.ts`):
   - Contains all TypeScript interfaces for API responses
   - Defines data structures for tokens, pools, swaps, etc.

2. **API Configuration** (`src/config/api.ts`):
   - API endpoints configuration
   - Timeouts and cache durations
   - Environment-specific settings

3. **API Services** (`src/services/api.ts`):
   - Organized API calls for different features
   - Handles token, swap, pool, and market data

### Required Backend Endpoints

1. **Token Endpoints**:
   - `GET /api/v1/tokens` - List all tokens
   - `GET /api/v1/tokens/:id` - Get token details
   - `GET /api/v1/tokens/:id/price` - Get token price
   - `GET /api/v1/tokens/:id/history` - Get price history

2. **Swap Endpoints**:
   - `POST /api/v1/swap/quote` - Get swap quote
   - `POST /api/v1/swap/execute` - Execute swap

3. **Pool Endpoints**:
   - `GET /api/v1/pools` - List all pools
   - `GET /api/v1/pools/:id` - Get pool details

4. **Market Endpoints**:
   - `GET /api/v1/market/overview` - Get market overview
   - `GET /api/v1/market/hot-pairs` - Get trending pairs

### Data Models

Refer to `src/types/api.ts` for detailed TypeScript interfaces of all data models.

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   ```
   VITE_API_BASE_URL=your_backend_url
   ```
4. Start development server: `npm run dev`

### Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Solana Web3.js
- Axios for API calls

### Backend Requirements

- RESTful API following the defined endpoints
- JSON responses matching the TypeScript interfaces
- CORS enabled for frontend domain
- Rate limiting and security measures
- WebSocket support for real-time updates (optional)

For detailed API specifications and response formats, refer to the TypeScript interfaces in `src/types/api.ts`.
