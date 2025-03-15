import sharp from "sharp";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (!name) {
    return new Response("Missing name Parameter", { status: 400 });
  }

  // กำหนดขนาดของภาพ
  const width = 800;
  const height = 600;

  // กำหนดฟอนต์และสไตล์
  const textSize = 14;
  const textColor = "rgba(211,211,211,0.5)";
  const textSpacingX = 120;
  const textSpacingY = 50;

  // สร้างภาพพื้นฐานด้วย sharp
  const image = sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }, // โปร่งใส
    },
  });

  const composites = []; // เก็บคำสั่ง composite ทั้งหมด

  // เพิ่มข้อความลงในภาพ
  for (let y = 0; y < height; y += textSpacingY) {
    for (let x = 0; x < width; x += textSpacingX) {
      composites.push({
        input: Buffer.from(
          `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <text x="${x}" y="${y + textSize}" font-size="${textSize}" fill="${textColor}" font-family="Helvetica, sans-serif"
              transform="rotate(-15, ${x}, ${y + textSize})" text-anchor="middle" dominant-baseline="middle">${name}</text>
          </svg>`
        ),
        top: 0,
        left: 0,
      });
    }
  }

  // ใช้ composite ทั้งหมดที่เก็บไว้
  const pngImage = await image.composite(composites).png().toBuffer();

  // แปลงเป็น Base64
  const base64Image = pngImage.toString("base64");

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
