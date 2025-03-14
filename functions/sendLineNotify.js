exports.handler = async function(event, context) {
  const accessToken = "EbAh5MprY0TXYxLoThuJ5k3gIzhQQ4uCnCnsLon37NM";
  const message = "📢 แจ้งเตือนจาก Netlify Functions!";

  const response = await fetch("https://notify-api.line.me/api/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Bearer ${accessToken}`,
    },
    body: new URLSearchParams({ message: message }),
  });

  return {
    statusCode: response.status,
    body: JSON.stringify(await response.json()),
  };
};
