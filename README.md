![deco31416](https://github.com/deco31416/deco31416/blob/main/public/31416-white.svg)

# 🚀 Crypto & Fiat Price Dashboard

[![Next.js](https://img.shields.io/badge/built%20with-Next.js-000?logo=nextdotjs)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/styled%20with-TailwindCSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/components-Radix%20UI-8b5cf6?logo=radixui)](https://www.radix-ui.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

> **Author**: deco31416  
> A full-featured module for managing real-time fiat and crypto prices, including multi-provider monitoring and advanced alerting features.

---

## 📊 Overview

The **Crypto & Fiat Price Dashboard** is a Next.js 15 module that enables real-time monitoring of cryptocurrency and fiat prices, consolidating data from multiple trusted providers (such as CoinGecko, CoinMarketCap, CryptoCompare, and forex APIs).

Key features include:

✅ Consolidated price and volume tracking  
✅ Price discrepancies and volatility detection  
✅ Alerts on out-of-range prices or suspicious volumes  
✅ A fiat-to-crypto converter  
✅ Full extensibility to manage coins, altcoins, stablecoins, and any fiat currency  
✅ Modern UI built with Tailwind and Radix UI  
✅ Accessible and responsive design

---

## 🏗️ Features

- Real-time crypto and fiat price tracking
- Consolidated data from CoinGecko, CoinMarketCap, CryptoCompare, XE, Fixer, etc.
- Provider discrepancy validation
- Alerts system for price or volume anomalies
- Market capitalization and volatility metrics
- Volume analysis over multiple timeframes
- Responsive charts with Recharts
- Modular architecture (Next.js App Router + TypeScript)
- Secure roles and permissions for managing providers
- Built-in dark mode theming
- Fiat–crypto conversion tool

---

## 📂 Project Structure (recommended)

/app
  /dashboard
    page.tsx
    /components
      PriceCard.tsx
      PriceChart.tsx
      VolumeChart.tsx
      AlertPanel.tsx
      Converter.tsx
  /api
    /prices
      coingecko.ts
      coinmarketcap.ts
      fixer.ts
/lib
  /providers
    priceProvider.ts
  /utils
    math.ts
    formatter.ts

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build production
npm run build && npm run start
```

---

## 🌐 Tech Stack

- **Next.js 15 App Router**
- **TypeScript 5**
- **TailwindCSS**
- **Radix UI**
- **Recharts**
- **React Hook Form + Zod**
- **SWR or React Query**
- **Deployed on Vercel**

---

## 📈 Roadmap

- [x] Core crypto price cards (BTC, ETH, ADA, DOT, USDT, USDC)
- [x] Provider comparison
- [x] Price/volume alerts
- [x] Fiat conversion tool
- [ ] Historical price storage
- [ ] Advanced user roles
- [ ] Multi-language support
- [ ] Real-time WebSocket streams

---

## 🔒 License

**MIT** — Developed by [deco31416](https://github.com/deco31416) with ❤️

---

📬 **Contact:**
- **Email:** [contacto@deco31416.com](mailto:contacto@deco31416.com)
- **Website:** [https://www.deco31416.com/](https://www.deco31416.com/)

[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white)](https://www.facebook.com/deco31416)
[![Medium](https://img.shields.io/badge/Medium-%2312100E.svg?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@deco31416)
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://x.com/deco31416)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=Discord&logoColor=white)](https://discord.com/invite/4vwQFmd2)
---
