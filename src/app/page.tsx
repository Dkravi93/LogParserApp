"use client";
import { useState } from "react";
import FileUpload from "./components/Fileupload";
import DateSelector from "./components/DateSelector";
import LogAnalysis from "./components/LogAnalysis";

export default function Home() {
    const [selectedDate, setSelectedDate] = useState("");
    const [fileName, setFileName] = useState("");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Log Analysis Dashboard</h1>

            <div className="flex justify-center">
                <FileUpload onFileUpload={setFileName} />
                <DateSelector onDateChange={setSelectedDate} />
            </div>
            <div className="">{fileName}</div>

            {selectedDate && <p className="mt-4 text-lg">Selected Date: {selectedDate}</p>}
            {(fileName && selectedDate) && <LogAnalysis fileName={fileName} date={selectedDate}/>}
        </div>
    );
}
