
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-montserrat font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Welcome! Here is a quick overview of your app.
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-glow transition">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-gray-500">120 active users</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-glow transition">
          <h2 className="text-xl font-semibold mb-2">Sales</h2>
          <p className="text-gray-500">$3,450 earned this month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-glow transition">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="text-gray-500">45 new orders</p>
        </div>
      </div>

      {/* Placeholder content */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-soft">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="text-gray-600 list-disc pl-5 space-y-2">
          <li>User John Doe signed up</li>
          <li>Order #1234 completed</li>
          <li>Payment received for order #1235</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
