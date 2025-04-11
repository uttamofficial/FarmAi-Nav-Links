import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
  const cropData = [
    { name: 'Wheat', current: 85, target: 90 },
    { name: 'Corn', current: 75, target: 80 },
    { name: 'Soybeans', current: 95, target: 90 },
  ];

  const weatherData = [
    { day: 'Mon', temp: 75, rainfall: 0 },
    { day: 'Tue', temp: 78, rainfall: 0.2 },
    { day: 'Wed', temp: 76, rainfall: 0.5 },
    { day: 'Thu', temp: 74, rainfall: 0.1 },
    { day: 'Fri', temp: 77, rainfall: 0 },
  ];

  const resourceUsage = [
    { name: 'Water', value: 400 },
    { name: 'Fertilizer', value: 300 },
    { name: 'Pesticides', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Farm Dashboard</h1>
            <p className="text-xl text-gray-600">Monitor your farm's performance and AI recommendations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">Total Yield</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">2,450 tons</p>
              <p className="text-sm text-green-600 mt-1">↑ 12% from last season</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">Resource Efficiency</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">89%</p>
              <p className="text-sm text-green-600 mt-1">↑ 5% improvement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">Crop Health Index</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">8.5/10</p>
              <p className="text-sm text-green-600 mt-1">Above average</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Crop Health</h2>
              <BarChart width={500} height={300} data={cropData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="current" fill="#82ca9d" name="Current Health" />
                <Bar dataKey="target" fill="#8884d8" name="Target Health" />
              </BarChart>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Weather Forecast</h2>
              <LineChart width={500} height={300} data={weatherData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#8884d8" name="Temperature (°F)" />
                <Line yAxisId="right" type="monotone" dataKey="rainfall" stroke="#82ca9d" name="Rainfall (in)" />
              </LineChart>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Resource Usage</h2>
              <PieChart width={300} height={300}>
                <Pie
                  data={resourceUsage}
                  cx={150}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {resourceUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">AI Recommendations</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-800">Irrigation Schedule</h3>
                    <p className="text-green-600">Increase watering by 15% this week due to forecasted dry conditions</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800">Pest Control</h3>
                    <p className="text-blue-600">Monitor for corn borers in the next 2 weeks</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="font-semibold text-yellow-800">Fertilization</h3>
                    <p className="text-yellow-600">Apply nitrogen-rich fertilizer to wheat fields</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold text-purple-800">Market Insight</h3>
                    <p className="text-purple-600">Consider harvesting soybeans early due to favorable market conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}