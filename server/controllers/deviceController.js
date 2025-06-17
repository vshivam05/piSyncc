import devices from "../data/devices.js";

const errorMessages = [
  "Connection Timeout",
  "Storage Full",
  "Unknown Sync Error",
  "Authentication Failure",
  "Server Not Reachable",
];

export const getAllDevices = (req, res) => {
  res.json(devices);
};

export const triggerSync = (req, res) => {
  const { deviceId } = req.params;
  const device = devices.find((d) => d.id === deviceId);

  if (!device) {
    return res.status(404).json({ message: "Device not found" });
  }

  const newStatus = Math.random() > 0.2 ? "Success" : "Failed";
  device.status = newStatus;
  device.lastSync = new Date().toISOString();
  device.error = errorMessages[Math.floor(Math.random() * errorMessages.length)];


  res.json({ message: "Sync triggered", device });
};

export const getErrorDevices = (req, res) => {
  const failedDevices = devices.filter((d) => d.status === "Failed");
  res.json(failedDevices);
};
