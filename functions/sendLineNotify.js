exports.handler = async function(event, context) {
  const accessToken = "zQrvRTMjFolYRQlGGrTbJcR5VkYy5nqhVoGie9yu9e1";
  const message = "📢 แจ้งเตือนจาก Netlify Functions!";

  try {
    const response = await fetch("https://notify-api.line.me/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: new URLSearchParams({ message: message }),
    });

    const responseBody = await response.json();
    return {
      statusCode: response.status,
      body: JSON.stringify(responseBody),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "เกิดข้อผิดพลาดในการส่งข้อความ", error: error.message }),
    };
  }
};
