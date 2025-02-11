"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

export default function IpChart({ data }: { data: { [key: string]: number } }) {
    // Convert object data to array format and sort by count
    const allChartData = Object.entries(data)
        .map(([ip, count]) => ({ ip, count }))
        .sort((a, b) => b.count - a.count); // Sort descending by count

    // State for filtering
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(50);
    const [filteredData, setFilteredData] = useState(allChartData.slice(start, end));

    // Handles range filtering
    const applyFilter = () => {
        if (end - start !== 50) {
            alert("Range must be exactly 50!");
            return;
        }
        if (start < 0 || end > allChartData.length) {
            alert("Range out of bounds!");
            return;
        }
        setFilteredData(allChartData.slice(start, end));
    };

    return (
        <div className="p-4 border rounded shadow-md mt-4 mb-4 w-full">
            <h2 className="text-lg font-semibold text-center mb-4">IP Address Distribution</h2>

            {/* Range Selection */}
            <div className="flex items-center justify-center gap-4 mb-4">
                <input
                    type="number"
                    value={start}
                    onChange={(e) => setStart(parseInt(e.target.value))}
                    className="border p-2 rounded w-20 text-center"
                />
                <span className="text-lg font-semibold">to</span>
                <input
                    type="number"
                    value={end}
                    onChange={(e) => setEnd(parseInt(e.target.value))}
                    className="border p-2 rounded w-20 text-center"
                />
                <button
                    onClick={applyFilter}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Apply
                </button>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={filteredData} barSize={15}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="ip"
                        angle={60}
                        textAnchor="start"
                        interval={0} // Show all labels
                        height={100} // Extra space for labels
                    />
                    <YAxis width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#75c9a3" background={{ fill: "#eee" }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
