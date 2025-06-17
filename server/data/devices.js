const devices = [];

const statuses = ["Success", "Pending", "Failed"];
const errorMessages = [
  "Connection Timeout",
  "Storage Full",
  "Unknown Sync Error",
  "Authentication Failure",
  "Server Not Reachable"
];

for (let i = 1; i <= 30; i++) {
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  devices.push({
    id: `device${i.toString().padStart(3, "0")}`,
    lastSync: new Date(Date.now() - Math.random() * 100000000).toISOString(),
    status,
    error: status === "Failed"
      ? errorMessages[Math.floor(Math.random() * errorMessages.length)]
      : null,
  });
}

export default devices;
