import sharp from "sharp";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (!name) {
    return new Response("Missing name Parameter", { status: 400 });
  }

  const width = 800;
  const height = 600;
  const textSize = 14;
  const textColor = "rgba(211,211,211,0.5)";
  const textSpacingX = 120;
  const textSpacingY = 50;

  const image = sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }, // โปร่งใส
    },
  });

  const composites = [];

  for (let y = 0; y < height; y += textSpacingY) {
    for (let x = 0; x < width; x += textSpacingX) {
      const svgText = `
        <svg width="${textSpacingX}" height="${textSpacingY}" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="20" font-size="${textSize}" fill="${textColor}" font-family="Helvetica, sans-serif"
            transform="rotate(-15, 10, 20)" text-anchor="start">${name}</text>
        </svg>
      `;
      composites.push({
        input: Buffer.from(svgText),
        top: y,
        left: x,
      });
    }
  }

  const pngImage = await image.composite(composites).png().toBuffer();
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
