import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  FileText,
  Database,
  Wrench,
  Settings, 
  User
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navigationItems = [
    { icon: Home, label: 'Dashboard', id: 'Dashboard' },
    { icon: FileText, label: 'Templates', id: 'Templates' },
    { icon: Database, label: 'Data Sources', id: 'DataSources' },
    { icon: Wrench, label: 'Tools', id: 'Tools' },
    { icon: Settings, label: 'Settings', id: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col ${
        sidebarCollapsed ? 'w-16' : 'w-60'
      } fixed h-full z-30 lg:relative lg:z-auto`}>
        
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <div className={`font-bold text-xl text-slate-800 transition-opacity duration-300 ${
            sidebarCollapsed ? 'opacity-0' : 'opacity-100'
          }`}>
            {!sidebarCollapsed && 'MicroSaaS'}
          </div>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          >
            {sidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4" role="navigation" aria-label="Main navigation">
          <ul className="space-y-1" role="list">
            {navigationItems.map((item, index) => (
              <li key={item.id} role="none">
                <button
                  href="#"
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 ease-in-out group relative ${
                    activeItem === item.id
                      ? 'bg-blue-50 text-blue-600 shadow-sm' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  role="menuitem"
                  aria-current={activeItem === item.id ? 'page' : undefined}
                  title={sidebarCollapsed ? item.label : undefined}
                >
                  {/* Active indicator */}
                  {activeItem === item.id && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full" />
                  )}
                  
                  <item.icon 
                    size={24} 
                    className={`flex-shrink-0 transition-colors duration-200 ${
                      activeItem === item.id ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-700'
                    }`}
                    aria-hidden="true"
                  />
                  
                  <span className={`ml-3 font-medium transition-all duration-300 ${
                    sidebarCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
                  }`}>
                    {!sidebarCollapsed && item.label}
                  </span>
                  
                  {/* Tooltip for collapsed state */}
                  {sidebarCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'
      } ml-0`}>
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-20">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <Menu size={20} />
          </button>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="User profile"
            >
              <User size={20} className="text-slate-600" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{activeItem}</h1>
              <p className="text-slate-600">
                {activeItem === 'Dashboard' && "Welcome back! Here's what's happening with your business today."}
                {activeItem === 'Templates' && "Manage and create templates for your projects."}
                {activeItem === 'DataSources' && "Configure and monitor your data connections."}
                {activeItem === 'Tools' && "Access powerful tools to enhance your workflow."}
                {activeItem === 'Settings' && "Customize your workspace and account preferences."}
              </p>
            </div>

            {/* Dynamic Content Based on Active Navigation */}
            {activeItem === 'Dashboard' && (
              <>
                {/* Stats Cards - 12-Column Grid */}
                <div className="grid grid-cols-12 gap-6 mb-8">
                  <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-sm font-medium text-slate-500 mb-2">Total Revenue</h3>
                      <p className="text-2xl font-bold text-slate-900">$45,231</p>
                      <p className="text-sm text-green-600 mt-1">+20.1% from last month</p>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-sm font-medium text-slate-500 mb-2">Active Users</h3>
                      <p className="text-2xl font-bold text-slate-900">2,345</p>
                      <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-12 lg:col-span-4">
                    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-sm font-medium text-slate-500 mb-2">Conversion Rate</h3>
                      <p className="text-2xl font-bold text-slate-900">3.24%</p>
                      <p className="text-sm text-red-600 mt-1">-2.1% from last month</p>
                    </div>
                  </div>
                </div>

                {/* Main Content Grid - 8/4 Split */}
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 lg:col-span-8">
                    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Revenue Overview</h3>
                      <div className="h-80 bg-slate-50 rounded-lg flex items-center justify-center">
                        <p className="text-slate-500">Chart visualization would go here</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
                      <div className="space-y-4">
                        {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-slate-900">Activity item {item}</p>
                              <p className="text-xs text-slate-500">2 hours ago</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Templates Content */}
            {activeItem === 'Templates' && (
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <div className="text-center py-12">
                      <FileText size={48} className="mx-auto text-slate-400 mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Template Management</h3>
                      <p className="text-slate-600">Create, edit, and organize your project templates here.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Data Sources Content */}
            {activeItem === 'DataSources' && (
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <div className="text-center py-12">
                      <Database size={48} className="mx-auto text-slate-400 mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Sources</h3>
                      <p className="text-slate-600">Connect and manage your data sources and integrations.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tools Content */}
            {activeItem === 'Tools' && (
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <div className="text-center py-12">
                      <Wrench size={48} className="mx-auto text-slate-400 mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Tools & Utilities</h3>
                      <p className="text-slate-600">Access powerful tools to streamline your workflow.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Content */}
            {activeItem === 'Settings' && (
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-8">
                  <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <div className="text-center py-12">
                      <Settings size={48} className="mx-auto text-slate-400 mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Account Settings</h3>
                      <p className="text-slate-600">Manage your account preferences and configuration.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <span className="text-sm font-medium text-slate-900">Profile Settings</span>
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <span className="text-sm font-medium text-slate-900">Billing</span>
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <span className="text-sm font-medium text-slate-900">Security</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {!sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}
    </div>
  );
};

export default Dashboard;