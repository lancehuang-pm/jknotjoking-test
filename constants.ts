import { Guest, Photo, TableData } from './types';

export const WEDDING_CONFIG = {
  groom: "Jack",
  bride: "Kensey",
  title: "Jack & Kensey's Wedding",
  date: "2026 Feb 07 Sat.",
  time: "11:30 迎賓酒會 Doors Open\n12:00 午宴開始 Reception",
  location: "台北漢來大飯店 3F 鉑金A廳\nGrand Hilai Taipei 3F Platinum Hall A",
  address: "No. 168, Jingmao 1st Rd, Nangang Dist, Taipei City\n台北市南港區經貿一路168號",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Hilai+Taipei"
};

// Raw data processing to create structured guest list
const rawGuestList = `
1	張偉、林靜、王磊、李芳、陳浩、劉婷、黃強、周敏、徐傑、何娜
2	吳俊、鄭雪、謝明、蔡琳、方宇、潘燕、韓峰、朱麗、孔杰、許婷
3	魏晨、楊洋、盧欣、侯強、龔蓉、戴磊、范瑋、曹婷、陶勇、羅紅
4	陸峰、鄒琳、白傑、梁敏、邱偉、馬芳、江浩、沈婷、田宇、龔娜
5	王凱、張麗、李強、劉洋、陳俊、周芳、黃傑、徐琳、何峰、吳婷
6	鄭浩、謝婷、蔡偉、方琳、潘傑、韓洋、朱娜、孔宇、許紅、魏芳
7	楊傑、盧婷、侯宇、龔峰、戴紅、范婷、曹偉、陶琳、羅傑、陸娜
8	鄒宇、白峰、梁紅、邱婷、馬偉、江琳、沈傑、田娜、王宇、張峰
9	李紅、劉婷、陳傑、周娜、黃宇、徐峰、何紅、吳婷、鄭傑、謝娜
10	蔡傑、方婷、潘偉、韓琳、朱傑、孔娜、許宇、魏峰、楊紅、盧婷
11	侯傑、龔娜、戴宇、范峰、曹紅、陶婷、羅偉、陸琳、鄒傑、白娜
12	梁宇、邱峰、馬紅、江婷、沈偉、田琳、王傑、張娜、李宇、劉峰
13	陳紅、周婷、黃偉、徐琳、何傑、吳娜、鄭宇、謝峰、蔡紅、方婷
14	潘偉、韓琳、朱傑、孔娜、許宇、魏峰、楊紅、盧婷、侯傑、龔娜
15	戴宇、范峰、曹紅、陶婷、羅偉、陸琳、鄒傑、白娜、梁宇、邱峰
16	馬紅、江婷、沈偉、田琳、王傑、張娜、李宇、劉峰、陳紅、周婷
17	黃偉、徐琳、何傑、吳娜、鄭宇、謝峰、蔡紅、方婷、潘偉、韓琳
18	朱傑、孔娜、許宇、魏峰、楊紅、盧婷、侯傑、龔娜、戴宇、范峰
19	曹紅、陶婷、羅偉、陸琳、鄒傑、白娜、梁宇、邱峰、馬紅、江婷
20	沈偉、田琳、王傑、張娜、李宇、劉峰、陳紅、周婷、黃偉、徐琳
`;

export const TABLES: TableData[] = rawGuestList.trim().split('\n').map(line => {
  const [numStr, namesStr] = line.split('\t');
  return {
    tableNumber: parseInt(numStr, 10),
    guests: namesStr.split('、').map(n => n.trim())
  };
});

// Flatten for easier search
export const ALL_GUESTS: Guest[] = TABLES.flatMap(table => 
  table.guests.map(name => ({ name, tableNumber: table.tableNumber }))
);

export const GALLERY_PHOTOS: Photo[] = [
  { id: 1, url: "https://picsum.photos/600/800?random=1", size: "large" },
  { id: 2, url: "https://picsum.photos/400/400?random=2", size: "small" },
  { id: 3, url: "https://picsum.photos/400/400?random=3", size: "small" },
  { id: 4, url: "https://picsum.photos/600/400?random=4", size: "medium" },
  { id: 5, url: "https://picsum.photos/400/600?random=5", size: "medium" },
  { id: 6, url: "https://picsum.photos/400/400?random=6", size: "small" },
  { id: 7, url: "https://picsum.photos/600/400?random=7", size: "medium" },
  { id: 8, url: "https://picsum.photos/400/400?random=8", size: "small" },
  { id: 9, url: "https://picsum.photos/600/800?random=9", size: "large" },
];