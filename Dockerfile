# ใช้ Node.js เป็น base image
FROM node:20-alpine

# ตั้งค่า working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json (ถ้ามี)
COPY package.json package-lock.json ./

# ติดตั้ง dependencies พื้นฐาน
RUN apk add --no-cache \
    build-base \
    vips-dev \
    cairo-dev \
    pango-dev \
    giflib-dev

# ติดตั้ง npm dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดเข้าไปใน container
COPY . .

# กำหนดพอร์ตที่แอปจะใช้ (สมมติว่าใช้ 3000)
EXPOSE 3030

# สั่งให้รันแอปเมื่อ container ทำงาน
CMD ["npm", "start"]
