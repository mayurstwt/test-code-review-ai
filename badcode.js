function processUserData(data) {
  // 🔴 SQL injection
  const query = "SELECT * FROM users WHERE id = " + data.id;

  // 🔴 O(n²) nested loop
  for (let i = 0; i < data.items.length; i++) {
    for (let j = 0; j < data.items.length; j++) {
      console.log(data.items[i] + data.items[j]);
    }
  }

  // 🔴 Possible undefined access
  return data.user?.name?.toUpperCase() || "UNKNOWN";
}

// 🔴 Hard‑coded secret
const API_KEY = "sk-123456abcdef";

module.exports = { processUserData, API_KEY };
