import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Pie, PieChart } from 'recharts';

const data = [
    { month: 'Jan', users: 400 },
    { month: 'Feb', users: 300 },
    { month: 'Mar', users: 600 },
    { month: 'Apr', users: 800 },
    { month: 'May', users: 700 },
    { month: 'Jun', users: 900 },
    { month: 'Jul', users: 1000 },
    { month: 'Aug', users: 1200 },
    { month: 'Sep', users: 1100 },
    { month: 'Oct', users: 1300 },
    { month: 'Nov', users: 1400 },
];

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="p-4 bg-blue-100 rounded-lg">
                                    <h3 className="text-lg font-semibold">Total Users</h3>
                                    <p className="text-2xl font-bold">0</p>
                                </div>
                                <div className="p-4 bg-green-100 rounded-lg">
                                    <h3 className="text-lg font-semibold">Active Projects</h3>
                                    <p className="text-2xl font-bold">0</p>
                                </div>
                                <div className="p-4 bg-yellow-100 rounded-lg">
                                    <h3 className="text-lg font-semibold">Recent Activity</h3>
                                    <p className="text-2xl font-bold">0</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-semibold">Analytics Overview</h3>
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h4 className="mb-2 text-lg font-medium">Monthly Users</h4>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={data}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Line type="monotone" dataKey="users" stroke="#8884d8" />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow">
                                        <h4 className="mb-2 text-lg font-medium">Activity Distribution</h4>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie
                                                        data={[
                                                            { name: 'Projects', value: 400 },
                                                            { name: 'Tasks', value: 300 },
                                                            { name: 'Meetings', value: 200 },
                                                        ]}
                                                        cx="50%"
                                                        cy="50%"
                                                        outerRadius={80}
                                                        fill="#8884d8"
                                                        dataKey="value"
                                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                    >
                                                    </Pie>
                                                    <Tooltip />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-semibold">Recent Activities</h3>
                                <div className="space-y-4">
                                    {[
                                        { title: 'New project created', time: '2 hours ago', type: 'create' },
                                        { title: 'Task completed', time: '4 hours ago', type: 'complete' },
                                        { title: 'Team meeting scheduled', time: '1 day ago', type: 'schedule' },
                                    ].map((activity, index) => (
                                        <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                                                <p className="text-sm text-gray-500">{activity.time}</p>
                                            </div>
                                            <span className="px-3 py-1 text-sm text-white bg-blue-500 rounded-full">
                                                {activity.type}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-semibold">Performance Metrics</h3>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="p-4 bg-purple-100 rounded-lg">
                                        <h4 className="text-sm font-medium text-purple-800">Response Time</h4>
                                        <p className="text-2xl font-bold">1.2s</p>
                                        <span className="text-sm text-purple-600">Avg. last 24h</span>
                                    </div>
                                    <div className="p-4 bg-indigo-100 rounded-lg">
                                        <h4 className="text-sm font-medium text-indigo-800">Success Rate</h4>
                                        <p className="text-2xl font-bold">99.9%</p>
                                        <span className="text-sm text-indigo-600">Last 7 days</span>
                                    </div>
                                    <div className="p-4 bg-pink-100 rounded-lg">
                                        <h4 className="text-sm font-medium text-pink-800">Error Rate</h4>
                                        <p className="text-2xl font-bold">0.1%</p>
                                        <span className="text-sm text-pink-600">Last 7 days</span>
                                    </div>
                                    <div className="p-4 bg-teal-100 rounded-lg">
                                        <h4 className="text-sm font-medium text-teal-800">Uptime</h4>
                                        <p className="text-2xl font-bold">100%</p>
                                        <span className="text-sm text-teal-600">Last 30 days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
