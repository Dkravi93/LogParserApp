"use client";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector({ onDateChange }: { onDateChange: (date: string) => void }) {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
        onDateChange(event.target.value);
    };

    const handleClear = () => {
        setSelectedDate("");
        onDateChange("");
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Select a Date</label>

            <div className="relative flex items-center border rounded-md p-2 shadow-sm">
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="w-full px-3 py-2 border-none outline-none focus:ring-2 focus:ring-blue-400 rounded-md text-gray-700 bg-gray-50"
                />
                {selectedDate && (
                    <button
                        onClick={handleClear}
                        className="ml-2 px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
}
