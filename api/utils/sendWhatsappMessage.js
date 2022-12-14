const axios = require('axios');
const url = require('url');

// API UTILIZADA: https://user.ultramsg.com/

const sendWhatsappMessage = async (phoneNumber, body) => {
  console.log(phoneNumber, body)
  const request = `https://api.ultramsg.com/${process.env.WHATSAPP_INSTANCE_ID}/messages/chat`;
  const params = new url.URLSearchParams({
    token: process.env.WHATSAPP_TOKEN,
    to: `+549${phoneNumber}`,
    body,
    priority: '1',
    referenceId: ''
  });
  return axios.post(request, params);
};

module.exports = sendWhatsappMessage;
