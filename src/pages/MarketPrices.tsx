import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

export default function MarketPrices() {
  const marketData = [
    { name: 'Jan', wheat: 300, corn: 200, soybeans: 400 },
    { name: 'Feb', wheat: 320, corn: 210, soybeans: 380 },
    { name: 'Mar', wheat: 310, corn: 220, soybeans: 390 },
    { name: 'Apr', wheat: 340, corn: 230, soybeans: 410 },
    { name: 'May', wheat: 350, corn: 240, soybeans: 420 },
    { name: 'Jun', wheat: 330, corn: 225, soybeans: 400 },
  ];

  const marketNews = [
    {
      title: "Global Wheat Prices Surge",
      date: "March 15, 2024",
      summary: "International wheat prices increased by 5% due to supply chain disruptions."
    },
    {
      title: "Corn Demand Rising",
      date: "March 14, 2024",
      summary: "Growing demand from ethanol producers drives corn prices higher."
    },
    {
      title: "Soybean Market Update",
      date: "March 13, 2024",
      summary: "Favorable weather conditions in South America impact global soybean prices."
    }
  ];

  const volumeData = [
    { name: 'Wheat', volume: 15000 },
    { name: 'Corn', volume: 20000 },
    { name: 'Soybeans', volume: 18000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Prices</h1>
            <p className="text-xl text-gray-600">Real-time agricultural commodity prices and market insights</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {['Wheat', 'Corn', 'Soybeans'].map((crop) => (
              <div key={crop} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{crop}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current Price</span>
                  <span className="text-2xl font-bold">$340/ton</span>
                </div>
                <div className="mt-4 text-sm text-green-600">↑ 2.5% from last week</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Price Trends</h2>
              <LineChart width={600} height={300} data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="wheat" stroke="#8884d8" />
                <Line type="monotone" dataKey="corn" stroke="#82ca9d" />
                <Line type="monotone" dataKey="soybeans" stroke="#ffc658" />
              </LineChart>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Trading Volume</h2>
              <BarChart width={600} height={300} data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="volume" fill="#8884d8" />
              </BarChart>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Market News</h2>
                <div className="space-y-6">
                  {marketNews.map((news, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h3 className="font-semibold text-gray-900">{news.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                      <p className="text-gray-600">{news.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black text-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Market Alerts</h2>
              <p className="mb-6">Get real-time price alerts and market updates delivered to your inbox.</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 mb-4"
              />
              <button className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-100">
                Subscribe to Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}