# Log Parser and Visualization

## Overview
This project is a **Next.js** application that parses log files, extracts relevant data, and visualizes it using **Recharts**. It provides an interactive UI for users to upload log files, filter data, and analyze IP traffic distribution.

## Features
- **Log File Upload**: Users can upload log files for parsing.
- **Date Filtering**: Users can filter logs by selecting a date range.
- **IP Histogram**: Displays IP address distribution using a bar chart.
- **Range Filtering**: Users can filter data between specified count ranges (e.g., 100-150) with a limit of 50.
- **Responsive UI**: Built with Tailwind CSS for a modern and responsive design.

## Tech Stack
- **Next.js (App Router)**
- **React & TypeScript**
- **Recharts** (For data visualization)
- **Tailwind CSS** (For styling)

## Installation
### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/Dkravi93/LogParserApp.git
   cd LogParserApp
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Run the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
4. Open `http://localhost:3000` in your browser.

## Usage
1. **Upload Log File**: Click the "Upload" button and select a log file.
2. **Filter Data**: Use the date picker to filter log entries.
3. **View IP Histogram**: The bar chart displays IP address traffic.
4. **Apply Count Range Filter**: Enter a minimum and maximum count (max range of 50) and click "Filter" to update the chart.

## API Endpoints
- **`POST /api/upload`**: Handles file uploads.
- **`GET /api/analyze?file=FILENAME`**: Parses and returns log data.

## Screenshots
<img width="939" alt="image" src="https://github.com/user-attachments/assets/ebdf00ad-31b6-4cfc-ac59-48797fde3dc1" />
<img width="944" alt="image" src="https://github.com/user-attachments/assets/2b900bb2-ddd1-42cf-b77b-1c293032580b" />



## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any queries or contributions, contact **dpakravi93@gmail.com**.

