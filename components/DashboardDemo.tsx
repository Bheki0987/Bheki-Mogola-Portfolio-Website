
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RefreshCcw, TrendingUp, DollarSign, Users } from 'lucide-react';

const generateData = () => Array.from({ length: 7 }, (_, i) => ({
  name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
  sales: Math.floor(Math.random() * 5000) + 2000,
  visitors: Math.floor(Math.random() * 3000) + 1000,
  conversion: Math.floor(Math.random() * 10) + 2,
}));

const DashboardDemo: React.FC = () => {
  const [data, setData] = useState(generateData());
  const [activeMetric, setActiveMetric] = useState<'sales' | 'visitors'>('sales');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleRefresh = () => {
    setIsAnimating(true);
    setData(generateData());
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        return prev.map(item => ({
          ...item,
          sales: Math.max(1000, item.sales + (Math.random() - 0.5) * 500),
          visitors: Math.max(500, item.visitors + (Math.random() - 0.5) * 300)
        }))
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ title, value, icon: Icon, active }: any) => (
    <div className={`p-4 border transition-all ${active ? 'bg-white text-black border-white' : 'bg-black text-white border-neutral-800 hover:border-neutral-600'}`}>
      <div className="flex justify-between items-start mb-2">
        <span className={`text-sm ${active ? 'text-neutral-600' : 'text-neutral-400'}`}>{title}</span>
        <div className={`p-2 ${active ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <Icon size={16} />
        </div>
      </div>
      <h4 className="text-2xl font-bold font-mono">{value}</h4>
    </div>
  );

  const totalSales = data.reduce((acc, curr) => acc + curr.sales, 0);
  const totalVisitors = data.reduce((acc, curr) => acc + curr.visitors, 0);

  return (
    <section id="dashboard-demo" className="py-24 bg-black border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-white">Live Data <span className="text-neutral-500">Visualization</span></h2>
            <p className="text-neutral-400">Interactive BI Interface Simulator utilizing React & Recharts.</p>
          </div>
          <button
            onClick={handleRefresh}
            className={`flex items-center gap-2 px-4 py-2 bg-black hover:bg-white hover:text-black rounded-sm border border-white text-white transition-all ${isAnimating ? 'animate-spin' : ''}`}
          >
            <RefreshCcw size={16} /> Refresh Data
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Stats */}
          <div className="space-y-4 lg:col-span-1">
            <StatCard
              title="Total Revenue"
              value={`$${(totalSales).toLocaleString()}`}
              icon={DollarSign}
              active={activeMetric === 'sales'}
            />
            <StatCard
              title="Active Users"
              value={totalVisitors.toLocaleString()}
              icon={Users}
              active={activeMetric === 'visitors'}
            />
            <StatCard
              title="Conversion Rate"
              value="4.2%"
              icon={TrendingUp}
              active={false}
            />

            <div className="bg-neutral-950 p-4 border border-neutral-800 mt-6">
              <h5 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider">Metric Selection</h5>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setActiveMetric('sales')}
                  className={`px-3 py-2 text-left text-sm font-mono transition-all border ${activeMetric === 'sales' ? 'bg-white text-black border-white' : 'text-neutral-400 border-transparent hover:border-neutral-700'}`}
                >
                  &gt; Revenue_Analytics
                </button>
                <button
                  onClick={() => setActiveMetric('visitors')}
                  className={`px-3 py-2 text-left text-sm font-mono transition-all border ${activeMetric === 'visitors' ? 'bg-white text-black border-white' : 'text-neutral-400 border-transparent hover:border-neutral-700'}`}
                >
                  &gt; Traffic_Sources
                </button>
              </div>
            </div>
          </div>

          {/* Main Chart Area */}
          <div className="lg:col-span-3 bg-neutral-950 border border-neutral-800 p-6 relative overflow-hidden">
            <div className="h-[400px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffffff" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} />
                  <YAxis stroke="#666" axisLine={false} tickLine={false} tickFormatter={(value) => activeMetric === 'sales' ? `$${value}` : `${value}`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#000', borderColor: '#333', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area
                    type="monotone"
                    dataKey={activeMetric}
                    stroke="#ffffff"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorMetric)"
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardDemo;
