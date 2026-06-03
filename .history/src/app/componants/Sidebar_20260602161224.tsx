const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block border-r border-gray-800">
      <nav className="space-y-2">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Dashboard</p>
        <a href="#" className="block py-2 px-3 rounded hover:bg-gray-800">Overview</a>
        <a href="#" className="block py-2 px-3 rounded hover:bg-gray-800">Analytics</a>
        <a href="#" className="block py-2 px-3 rounded hover:bg-gray-800">Settings</a>
      </nav>
    </aside>
  );
};
export default Sidebar;