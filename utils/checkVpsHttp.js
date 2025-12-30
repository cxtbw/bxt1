const axios = require('axios');

async function checkVpsHttp(domain) {
  try {
    await axios.get(`http://${domain}`, { timeout: 5000 });
    return 'ONLINE';
  } catch {
    return 'OFFLINE';
  }
}

module.exports = { checkVpsHttp };
