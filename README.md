# PiSync

PiSync is a device synchronization and monitoring system that allows users to manage and monitor PiSync devices through a web dashboard. It provides real-time device data, error logs, and device control capabilities, making it easier to maintain and operate multiple devices efficiently.

## Live Demo

Access the live application here: [PiSync Live](https://pi-syncc.vercel.app/)

## GitHub Repository

Explore the source code and contribute on GitHub: [PiSync GitHub](https://github.com/vshivam05/piSyncc)

## Login Credentials

To access the dashboard, use the following credentials:

- **Username:** admin  
- **Password:** admin123

## Features

- Real-time monitoring of PiSync devices  
- Device status and error logging  
- User-friendly web dashboard for device management  
- Secure login authentication  
- RESTful backend APIs for device communication  
- Scalable architecture supporting multiple devices  

## System Overview

The PiSync system is composed of three main components:

1. **PiSync Devices:**  
   Physical or virtual devices that collect and send data to the backend APIs. They communicate device status, errors, and other relevant information.

2. **Backend APIs:**  
   Server-side APIs handle requests from PiSync devices and the dashboard. They process device data, manage device states, and provide endpoints for the dashboard to fetch and update device information.

3. **Dashboard:**  
   The web-based dashboard provides a user interface for monitoring and managing PiSync devices. It interacts with the backend APIs to display real-time device data, error logs, and device controls.

### Interaction Flow and System Diagram

The following diagram illustrates the interaction between PiSync devices, backend APIs, and the dashboard:

```
+-------------------+          Internet         +-------------------+          
|                   |  ─────────────────────▶  |                   |          
| PiSync Device     |                          | PiSync API Server |          
| (e.g. PiBook)     |  ◀─────────────────────  |   (Node.js / REST)|          
|                   |       Sync status        |                   |          
+-------------------+                          +-------------------+          
                                                    ▲                         
                                                    │                         
                                                    │                         
                                             Fetches Data                     
                                                    │                         
                                                    ▼                         
                                          +-------------------+              
                                          |                   |              
                                          | Admin Dashboard   |              
                                          |   (React.js)      |              
                                          |                   |              
                                          +-------------------+              

```

- **PiSync Devices:** Continuously collect and send data, status updates, and error logs to the backend APIs.
- **Backend APIs:** Receive, process, and store device data; expose RESTful endpoints for the dashboard to fetch and update device information.
- **Dashboard:** Queries backend APIs to display real-time device data and status; allows users to send commands or updates back to devices via the APIs.

This architecture ensures real-time synchronization and management of PiSync devices through a seamless flow of data and control commands.

## Getting Started

To run the project locally, clone the repository and follow the setup instructions in the respective `client` and `server` directories.

### Prerequisites

- Node.js (v14 or higher recommended)  
- npm or yarn package manager  

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/vshivam05/piSyncc.git
   cd piSyncc
   ```

2. Setup the server:  
   ```bash
   cd server
   npm install
   npm start
   ```

3. Setup the client:  
   Open a new terminal window/tab:  
   ```bash
   cd client
   npm install
   npm run dev
   ```

4. Access the dashboard at `http://localhost:3000` (or the port specified by the client).

## License

This project is licensed under the MIT License.

## Contact

For any questions or contributions, please open an issue or pull request on the GitHub repository.
