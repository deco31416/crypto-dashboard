"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Clock, Activity } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Datos simulados para demostración
const cryptoData = {
  coins: [
    {
      symbol: "BTC",
      name: "Bitcoin",
      coinmarketcap: { price: 43250.5, change24h: 2.45, volume24h: 28500000000 },
      coingecko: { price: 43180.25, change24h: 2.38, volume24h: 28200000000 },
      cryptocompare: { price: 43320.75, change24h: 2.52, volume24h: 28800000000 },
      chartData: [
        { time: "00:00", cmc: 42800, cg: 42750, cc: 42900 },
        { time: "04:00", cmc: 42950, cg: 42900, cc: 43050 },
        { time: "08:00", cmc: 43100, cg: 43050, cc: 43200 },
        { time: "12:00", cmc: 43200, cg: 43150, cc: 43300 },
        { time: "16:00", cmc: 43250, cg: 43180, cc: 43320 },
      ],
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      coinmarketcap: { price: 2650.8, change24h: 3.25, volume24h: 15200000000 },
      coingecko: { price: 2645.5, change24h: 3.18, volume24h: 15100000000 },
      cryptocompare: { price: 2658.9, change24h: 3.32, volume24h: 15300000000 },
      chartData: [
        { time: "00:00", cmc: 2580, cg: 2575, cc: 2590 },
        { time: "04:00", cmc: 2610, cg: 2605, cc: 2620 },
        { time: "08:00", cmc: 2630, cg: 2625, cc: 2640 },
        { time: "12:00", cmc: 2645, cg: 2640, cc: 2655 },
        { time: "16:00", cmc: 2650, cg: 2645, cc: 2658 },
      ],
    },
  ],
  altcoins: [
    {
      symbol: "ADA",
      name: "Cardano",
      coinmarketcap: { price: 0.485, change24h: -1.25, volume24h: 420000000 },
      coingecko: { price: 0.482, change24h: -1.32, volume24h: 415000000 },
      cryptocompare: { price: 0.488, change24h: -1.18, volume24h: 425000000 },
      chartData: [
        { time: "00:00", cmc: 0.492, cg: 0.489, cc: 0.495 },
        { time: "04:00", cmc: 0.49, cg: 0.487, cc: 0.493 },
        { time: "08:00", cmc: 0.488, cg: 0.485, cc: 0.491 },
        { time: "12:00", cmc: 0.486, cg: 0.483, cc: 0.489 },
        { time: "16:00", cmc: 0.485, cg: 0.482, cc: 0.488 },
      ],
    },
    {
      symbol: "DOT",
      name: "Polkadot",
      coinmarketcap: { price: 7.85, change24h: 4.12, volume24h: 180000000 },
      coingecko: { price: 7.82, change24h: 4.05, volume24h: 178000000 },
      cryptocompare: { price: 7.88, change24h: 4.18, volume24h: 182000000 },
      chartData: [
        { time: "00:00", cmc: 7.55, cg: 7.52, cc: 7.58 },
        { time: "04:00", cmc: 7.65, cg: 7.62, cc: 7.68 },
        { time: "08:00", cmc: 7.75, cg: 7.72, cc: 7.78 },
        { time: "12:00", cmc: 7.8, cg: 7.77, cc: 7.83 },
        { time: "16:00", cmc: 7.85, cg: 7.82, cc: 7.88 },
      ],
    },
  ],
  stablecoins: [
    {
      symbol: "USDT",
      name: "Tether",
      coinmarketcap: { price: 1.0001, change24h: 0.01, volume24h: 45000000000 },
      coingecko: { price: 0.9999, change24h: -0.01, volume24h: 44800000000 },
      cryptocompare: { price: 1.0002, change24h: 0.02, volume24h: 45200000000 },
      chartData: [
        { time: "00:00", cmc: 1.0, cg: 0.9998, cc: 1.0001 },
        { time: "04:00", cmc: 1.0001, cg: 0.9999, cc: 1.0002 },
        { time: "08:00", cmc: 1.0, cg: 0.9999, cc: 1.0001 },
        { time: "12:00", cmc: 1.0001, cg: 0.9999, cc: 1.0002 },
        { time: "16:00", cmc: 1.0001, cg: 0.9999, cc: 1.0002 },
      ],
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      coinmarketcap: { price: 1.0, change24h: 0.0, volume24h: 8500000000 },
      coingecko: { price: 0.9999, change24h: -0.01, volume24h: 8480000000 },
      cryptocompare: { price: 1.0001, change24h: 0.01, volume24h: 8520000000 },
      chartData: [
        { time: "00:00", cmc: 1.0, cg: 0.9999, cc: 1.0001 },
        { time: "04:00", cmc: 1.0, cg: 0.9999, cc: 1.0001 },
        { time: "08:00", cmc: 1.0, cg: 0.9999, cc: 1.0001 },
        { time: "12:00", cmc: 1.0, cg: 0.9999, cc: 1.0001 },
        { time: "16:00", cmc: 1.0, cg: 0.9999, cc: 1.0001 },
      ],
    },
  ],
}

const formatPrice = (price: number, symbol: string) => {
  if (symbol === "BTC" || symbol === "ETH") {
    return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }
  if (price < 1) {
    return `$${price.toFixed(4)}`
  }
  return `$${price.toFixed(2)}`
}

const formatVolume = (volume: number) => {
  if (volume >= 1e9) {
    return `$${(volume / 1e9).toFixed(2)}B`
  }
  if (volume >= 1e6) {
    return `$${(volume / 1e6).toFixed(2)}M`
  }
  return `$${(volume / 1e3).toFixed(2)}K`
}

const calculateAverage = (coin: any) => {
  const avgPrice = (coin.coinmarketcap.price + coin.coingecko.price + coin.cryptocompare.price) / 3
  const avgChange = (coin.coinmarketcap.change24h + coin.coingecko.change24h + coin.cryptocompare.change24h) / 3
  const avgVolume = (coin.coinmarketcap.volume24h + coin.coingecko.volume24h + coin.cryptocompare.volume24h) / 3
  return { avgPrice, avgChange, avgVolume }
}

function CryptoCard({ coin }: { coin: any }) {
  const { avgPrice, avgChange, avgVolume } = calculateAverage(coin)

  return (
    <div className="space-y-6">
      {/* Precio Promedio */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <DollarSign className="h-5 w-5 text-blue-600" />
            {coin.name} ({coin.symbol}) - Precio Promedio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-blue-700">{formatPrice(avgPrice, coin.symbol)}</p>
              <div className="flex items-center gap-1 mt-1">
                {avgChange >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${avgChange >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {avgChange >= 0 ? "+" : ""}
                  {avgChange.toFixed(2)}%
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Volumen Promedio 24h</p>
              <p className="text-lg font-semibold text-gray-800">{formatVolume(avgVolume)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proveedores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* CoinMarketCap */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">CoinMarketCap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{formatPrice(coin.coinmarketcap.price, coin.symbol)}</p>
              <div className="flex items-center gap-1">
                {coin.coinmarketcap.change24h >= 0 ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={`text-xs ${coin.coinmarketcap.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {coin.coinmarketcap.change24h >= 0 ? "+" : ""}
                  {coin.coinmarketcap.change24h.toFixed(2)}%
                </span>
              </div>
              <p className="text-xs text-gray-500">Vol: {formatVolume(coin.coinmarketcap.volume24h)}</p>
            </div>
          </CardContent>
        </Card>

        {/* CoinGecko */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">CoinGecko</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{formatPrice(coin.coingecko.price, coin.symbol)}</p>
              <div className="flex items-center gap-1">
                {coin.coingecko.change24h >= 0 ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={`text-xs ${coin.coingecko.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {coin.coingecko.change24h >= 0 ? "+" : ""}
                  {coin.coingecko.change24h.toFixed(2)}%
                </span>
              </div>
              <p className="text-xs text-gray-500">Vol: {formatVolume(coin.coingecko.volume24h)}</p>
            </div>
          </CardContent>
        </Card>

        {/* CryptoCompare */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">CryptoCompare</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{formatPrice(coin.cryptocompare.price, coin.symbol)}</p>
              <div className="flex items-center gap-1">
                {coin.cryptocompare.change24h >= 0 ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={`text-xs ${coin.cryptocompare.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {coin.cryptocompare.change24h >= 0 ? "+" : ""}
                  {coin.cryptocompare.change24h.toFixed(2)}%
                </span>
              </div>
              <p className="text-xs text-gray-500">Vol: {formatVolume(coin.cryptocompare.volume24h)}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfica Comparativa */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Comparación de Precios - Últimas 24h
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={coin.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip
                formatter={(value: any, name: string) => [
                  formatPrice(value, coin.symbol),
                  name === "cmc" ? "CoinMarketCap" : name === "cg" ? "CoinGecko" : "CryptoCompare",
                ]}
              />
              <Line type="monotone" dataKey="cmc" stroke="#8884d8" strokeWidth={2} name="CoinMarketCap" />
              <Line type="monotone" dataKey="cg" stroke="#82ca9d" strokeWidth={2} name="CoinGecko" />
              <Line type="monotone" dataKey="cc" stroke="#ffc658" strokeWidth={2} name="CryptoCompare" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Métricas de Volumen por Intervalos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Registro de Volumen por Intervalos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Clock className="h-6 w-6 mx-auto mb-2 text-gray-600" />
              <p className="text-sm text-gray-600">1 Hora</p>
              <p className="text-lg font-semibold">{formatVolume(avgVolume * 0.042)}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Clock className="h-6 w-6 mx-auto mb-2 text-gray-600" />
              <p className="text-sm text-gray-600">6 Horas</p>
              <p className="text-lg font-semibold">{formatVolume(avgVolume * 0.25)}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Clock className="h-6 w-6 mx-auto mb-2 text-gray-600" />
              <p className="text-sm text-gray-600">12 Horas</p>
              <p className="text-lg font-semibold">{formatVolume(avgVolume * 0.5)}</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Clock className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <p className="text-sm text-blue-600">24 Horas</p>
              <p className="text-lg font-semibold text-blue-700">{formatVolume(avgVolume)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function CryptoDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard de Precios de Criptomonedas</h1>
          <p className="text-gray-600">Seguimiento en tiempo real de precios de múltiples proveedores autorizados</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Consolidado
            </TabsTrigger>
            <TabsTrigger value="coins" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Coins
            </TabsTrigger>
            <TabsTrigger value="altcoins" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Altcoins
            </TabsTrigger>
            <TabsTrigger value="stablecoins" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Stablecoins
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Métricas Generales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-700">Capitalización Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-800">$1.85T</p>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +2.4% (24h)
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-700">Volumen Total 24h</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-800">$98.2B</p>
                  <p className="text-xs text-blue-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +5.1% vs ayer
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-purple-700">Discrepancias Activas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-800">3</p>
                  <p className="text-xs text-purple-600">Alertas de precio</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-orange-700">Volatilidad Promedio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-orange-800">2.8%</p>
                  <p className="text-xs text-orange-600">Últimas 24h</p>
                </CardContent>
              </Card>
            </div>

            {/* Tabla Consolidada */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Resumen Ejecutivo - Comparación de Proveedores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">Asset</th>
                        <th className="text-left p-2 font-medium">Categoría</th>
                        <th className="text-right p-2 font-medium">Precio Promedio</th>
                        <th className="text-right p-2 font-medium">CMC</th>
                        <th className="text-right p-2 font-medium">CoinGecko</th>
                        <th className="text-right p-2 font-medium">CryptoCompare</th>
                        <th className="text-right p-2 font-medium">Discrepancia</th>
                        <th className="text-right p-2 font-medium">Volumen 24h</th>
                        <th className="text-center p-2 font-medium">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...cryptoData.coins, ...cryptoData.altcoins, ...cryptoData.stablecoins].map((coin) => {
                        const { avgPrice } = calculateAverage(coin)
                        const maxPrice = Math.max(
                          coin.coinmarketcap.price,
                          coin.coingecko.price,
                          coin.cryptocompare.price,
                        )
                        const minPrice = Math.min(
                          coin.coinmarketcap.price,
                          coin.coingecko.price,
                          coin.cryptocompare.price,
                        )
                        const discrepancy = ((maxPrice - minPrice) / avgPrice) * 100
                        const category = cryptoData.coins.includes(coin)
                          ? "Coin"
                          : cryptoData.altcoins.includes(coin)
                            ? "Altcoin"
                            : "Stablecoin"

                        return (
                          <tr key={coin.symbol} className="border-b hover:bg-gray-50">
                            <td className="p-2">
                              <div>
                                <p className="font-medium">{coin.symbol}</p>
                                <p className="text-xs text-gray-500">{coin.name}</p>
                              </div>
                            </td>
                            <td className="p-2">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  category === "Coin"
                                    ? "bg-blue-100 text-blue-700"
                                    : category === "Altcoin"
                                      ? "bg-purple-100 text-purple-700"
                                      : "bg-green-100 text-green-700"
                                }`}
                              >
                                {category}
                              </span>
                            </td>
                            <td className="p-2 text-right font-semibold">{formatPrice(avgPrice, coin.symbol)}</td>
                            <td className="p-2 text-right">{formatPrice(coin.coinmarketcap.price, coin.symbol)}</td>
                            <td className="p-2 text-right">{formatPrice(coin.coingecko.price, coin.symbol)}</td>
                            <td className="p-2 text-right">{formatPrice(coin.cryptocompare.price, coin.symbol)}</td>
                            <td className="p-2 text-right">
                              <span
                                className={`font-medium ${
                                  discrepancy > 1
                                    ? "text-red-600"
                                    : discrepancy > 0.5
                                      ? "text-yellow-600"
                                      : "text-green-600"
                                }`}
                              >
                                {discrepancy.toFixed(2)}%
                              </span>
                            </td>
                            <td className="p-2 text-right text-xs">{formatVolume(coin.coinmarketcap.volume24h)}</td>
                            <td className="p-2 text-center">
                              {discrepancy > 1 ? (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">
                                  ⚠️ Alta
                                </span>
                              ) : discrepancy > 0.5 ? (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                                  ⚡ Media
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                  ✅ Normal
                                </span>
                              )}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Alertas y Recomendaciones */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <TrendingDown className="h-5 w-5" />
                    Alertas Críticas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200">
                    <div>
                      <p className="font-medium text-red-800">BTC - Discrepancia Alta</p>
                      <p className="text-sm text-red-600">Diferencia de $140.5 entre proveedores</p>
                    </div>
                    <span className="text-red-700 font-bold">3.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-yellow-200">
                    <div>
                      <p className="font-medium text-yellow-800">ETH - Volumen Anómalo</p>
                      <p className="text-sm text-yellow-600">Volumen 15% superior al promedio</p>
                    </div>
                    <span className="text-yellow-700 font-bold">+15%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-orange-200">
                    <div>
                      <p className="font-medium text-orange-800">USDT - Desviación Precio</p>
                      <p className="text-sm text-orange-600">Precio fuera del rango estable</p>
                    </div>
                    <span className="text-orange-700 font-bold">0.02%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Activity className="h-5 w-5" />
                    Recomendaciones Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-200">
                    <p className="font-medium text-blue-800">✅ Usar CoinGecko para BTC</p>
                    <p className="text-sm text-blue-600">Precio más conservador y estable</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-green-200">
                    <p className="font-medium text-green-800">✅ ETH - Todos los proveedores alineados</p>
                    <p className="text-sm text-green-600">Discrepancia mínima, datos confiables</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-purple-200">
                    <p className="font-medium text-purple-800">⚡ Monitorear ADA</p>
                    <p className="text-sm text-purple-600">Tendencia bajista en los 3 proveedores</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-indigo-200">
                    <p className="font-medium text-indigo-800">📊 DOT - Oportunidad</p>
                    <p className="text-sm text-indigo-600">Tendencia alcista consistente +4%</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Gráfico de Tendencias Generales */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Tendencias del Mercado - Últimas 24h
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={[
                      { time: "00:00", market: 100, coins: 100, altcoins: 100, stablecoins: 100 },
                      { time: "04:00", market: 101.2, coins: 101.5, altcoins: 100.8, stablecoins: 100.01 },
                      { time: "08:00", market: 102.1, coins: 102.3, altcoins: 101.2, stablecoins: 99.99 },
                      { time: "12:00", market: 102.8, coins: 103.1, altcoins: 101.8, stablecoins: 100.01 },
                      { time: "16:00", market: 103.2, coins: 103.5, altcoins: 102.1, stablecoins: 100.02 },
                      { time: "20:00", market: 102.9, coins: 103.2, altcoins: 101.9, stablecoins: 100.01 },
                      { time: "24:00", market: 103.1, coins: 103.4, altcoins: 102.0, stablecoins: 100.01 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[99.5, 104]} />
                    <Tooltip
                      formatter={(value: any, name: string) => [
                        `${value.toFixed(2)}%`,
                        name === "market"
                          ? "Mercado General"
                          : name === "coins"
                            ? "Coins"
                            : name === "altcoins"
                              ? "Altcoins"
                              : "Stablecoins",
                      ]}
                    />
                    <Line type="monotone" dataKey="market" stroke="#6366f1" strokeWidth={3} name="Mercado General" />
                    <Line type="monotone" dataKey="coins" stroke="#3b82f6" strokeWidth={2} name="Coins" />
                    <Line type="monotone" dataKey="altcoins" stroke="#8b5cf6" strokeWidth={2} name="Altcoins" />
                    <Line type="monotone" dataKey="stablecoins" stroke="#10b981" strokeWidth={2} name="Stablecoins" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="coins" className="space-y-8">
            {cryptoData.coins.map((coin) => (
              <CryptoCard key={coin.symbol} coin={coin} />
            ))}
          </TabsContent>

          <TabsContent value="altcoins" className="space-y-8">
            {cryptoData.altcoins.map((coin) => (
              <CryptoCard key={coin.symbol} coin={coin} />
            ))}
          </TabsContent>

          <TabsContent value="stablecoins" className="space-y-8">
            {cryptoData.stablecoins.map((coin) => (
              <CryptoCard key={coin.symbol} coin={coin} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
