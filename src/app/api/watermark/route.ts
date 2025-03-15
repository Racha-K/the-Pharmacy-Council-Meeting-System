import sharp from "sharp";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (!name) {
    return new Response("Missing name Parameter", { status: 400 });
  }

  // Image dimensions
  const width = 800;
  const height = 600;

  // Watermark text settings
  const textSize = 14;
  const textColor = "rgba(211,211,211,0.5)";
  const textSpacingX = 120;
  const textSpacingY = 50;
  const fontFamily = "Helvetica, Arial, sans-serif"; // Ensures iOS/macOS support

  let svgText = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;

  for (let y = 0; y < height; y += textSpacingY) {
    for (let x = 0; x < width; x += textSpacingX) {
      svgText += `<text x="${x}" y="${y}" font-size="${textSize}" fill="${textColor}" font-family="${fontFamily}" 
        transform="rotate(-15, ${x}, ${y})" text-anchor="middle" dominant-baseline="middle">${name}</text>`;
    }
  }

  svgText += `</svg>`;

  // Use sharp to render SVG as PNG
  const image = await sharp(Buffer.from(svgText)).png().toBuffer();

  // Convert to Base64
  const base64Image = image.toString("base64");

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
