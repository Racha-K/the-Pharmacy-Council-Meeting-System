# ใช้ Node.js image ที่รองรับ
FROM node:16-slim

# ติดตั้ง dependencies ที่จำเป็น
RUN apt-get update && apt-get install -y \
    build-essential \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# สร้างและเซ็ต directory ของแอปพลิเคชัน
WORKDIR /app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies ของแอปพลิเคชัน
RUN npm install

# คัดลอกไฟล์ source code ไปยัง container
COPY . .

RUN npm run build

# กำหนดให้ Docker ใช้งาน port 3000
EXPOSE 3030

# รันแอปพลิเคชัน
CMD ["npm", "start"]
