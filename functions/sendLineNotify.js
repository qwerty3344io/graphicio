exports.handler = async function(event, context) {
  const accessToken = "zQrvRTMjFolYRQlGGrTbJcR5VkYy5nqhVoGie9yu9e1";
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
