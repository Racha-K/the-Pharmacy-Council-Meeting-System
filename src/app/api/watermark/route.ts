import sharp from "sharp";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (!name) {
    return new Response("Missing name Parameter", { status: 400 });
  }

  const width = 800;
  const height = 600;

  // สร้างพื้นหลังโปร่งใส
  const image = sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 }, // โปร่งใส
    },
  });

  // ตั้งค่าในรูปภาพให้มีข้อความซ้ำๆ
  const textSpacingX = 120;
  const textSpacingY = 50;
  const textSize = 14;

  let imageWithText = image;

  // วางข้อความซ้ำๆ บนภาพ
  for (let y = 0; y < height; y += textSpacingY) {
    for (let x = 0; x < width; x += textSpacingX) {
      imageWithText = imageWithText.composite([
        {
          input: Buffer.from(
            `<svg width="${width}" height="${height}">
              <text x="${x}" y="${y}" font-family="Arial" font-size="${textSize}" fill="rgba(211,211,211,0.5)" transform="rotate(-15 ${x} ${y})">${name}</text>
            </svg>`
          ),
          top: 0,
          left: 0,
        },
      ]);
    }
  }

  // แปลงเป็น PNG และทำการแปลงเป็น Base64
  const base64Image = await imageWithText
    .png()
    .toBuffer()
    .then((data) => data.toString("base64"));

  return new Response(
    JSON.stringify({
      image: `data:image/png;base64,${base64Image}`,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
