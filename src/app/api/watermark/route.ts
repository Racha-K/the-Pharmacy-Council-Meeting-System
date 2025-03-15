import { createCanvas, registerFont } from "canvas";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (!name) {
    return new Response("Missing name Parameter", { status: 400 });
  }

  // ขนาดของภาพ
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // ตั้งค่าให้พื้นหลังโปร่งใส
  ctx.clearRect(0, 0, width, height);

  // กำหนดค่าฟอนต์
  const textSize = 14;
  ctx.font = `${textSize}px Arial`;
  ctx.fillStyle = "rgba(211,211,211,0.5)";
  ctx.textAlign = "center";

  // วางข้อความซ้ำๆ บนภาพ
  const textSpacingX = 120;
  const textSpacingY = 50;
  for (let y = 0; y < height; y += textSpacingY) {
    for (let x = 0; x < width; x += textSpacingX) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((-15 * Math.PI) / 180); // หมุน -15 องศา
      ctx.fillText(name, 0, 0);
      ctx.restore();
    }
  }

  // แปลงเป็น PNG base64
  const base64Image = canvas.toBuffer("image/png").toString("base64");

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
