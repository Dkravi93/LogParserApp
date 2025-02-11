import fs from "fs";
import path from "path";

export function parseLogFile(fileName: string) {
    const filePath = path.join(process.cwd(), "public/uploads", fileName);
    if (!fs.existsSync(filePath)) throw new Error("File not found");

    const logData = fs.readFileSync(filePath, "utf-8");
    const logLines = logData.split("\n").filter(line => line.trim() !== "");

    const ipCount: Record<string, number> = {};
    const hourlyCount: Record<string, number> = {};

    const logPattern = /^([\d\.]+) - - \[(\d{2})\/(\w{3})\/(\d{4}):(\d{2}):(\d{2}):(\d{2})/;

    logLines.forEach(line => {
        const match = line.match(logPattern);
        if (match) {
            const ip = match[1];
            const hour = match[5]; // Extract hour

            ipCount[ip] = (ipCount[ip] || 0) + 1;
            hourlyCount[hour] = (hourlyCount[hour] || 0) + 1;
        }
    });

    return { ipCount, hourlyCount };
}
