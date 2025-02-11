"use client";
import { useEffect, useState } from "react";
import IpChart from "../components/IpChart";
import HourlyChart from "../components/HourlyChart";

export default function LogAnalysis({ fileName, date }: { fileName: string, date: string }) {
    const [ipData, setIpData] = useState<{ [key: string]: number }>({});
    const [hourlyData, setHourlyData] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        if (!fileName) return;

        fetch(`/api/logs?date=${date}&filename=${fileName}`)
            .then(res => res.json())
            .then(data => {
                console.log("OOOOOOO", data);
                setIpData(data.ipCount);
                setHourlyData(data.hourlyTraffic);
            });
    }, [fileName, date]);
    if (!ipData) return <p>Loading...</p>;

    return (
        <div className="mt-6">
            {ipData && <IpChart data={ipData} />}
            {hourlyData && <HourlyChart data={hourlyData} />}
        </div>
    );
}
