import { useEffect, useRef } from "react";
import { Pharmacy } from "@/types/pharmacy-type";

const Watermark = ({ pharmacy }: { pharmacy: Pharmacy }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = (canvas as HTMLCanvasElement).getContext("2d");
    if (!ctx) return;
    const width = (canvas as HTMLCanvasElement).width;
    const height = (canvas as HTMLCanvasElement).height;

    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const rows = 9;
    const cols = 11;
    const xSpacing = width / cols + 10;
    const ySpacing = height / rows + 10;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * xSpacing + xSpacing / 2;
        const y = i * ySpacing + ySpacing / 2;

        const rotateAngle = -25;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotateAngle * Math.PI) / 180);
        ctx.fillText(`${pharmacy.first_name_th} ${pharmacy.last_name_th}`, 0, 0);
        ctx.restore();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1000,
      }}
    ></canvas>
  );
};

export default Watermark;
