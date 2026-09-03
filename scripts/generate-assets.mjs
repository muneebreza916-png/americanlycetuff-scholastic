import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';
import zlib from 'zlib';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Helper to create solid / gradient PNG with geometric shapes and text/monogram patterns
function createBrandedPNG(width, height, type, options = {}) {
  const png = new PNG({ width, height });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      
      let r = 7, g = 21, b = 43; // Navy base (#07152b)
      let a = 255;

      const normX = x / width;
      const normY = y / height;
      const distFromCenter = Math.sqrt(Math.pow(normX - 0.5, 2) + Math.pow(normY - 0.5, 2));

      if (type === 'logo') {
        // Shield and crest shape calculation
        const inShield = (normY >= 0.15 && normY <= 0.85 && Math.abs(normX - 0.5) <= (0.35 * (normY < 0.6 ? 1 : 1 - (normY - 0.6) * 2.2)));
        const isBorder = inShield && (
          Math.abs(normX - 0.5) >= (0.32 * (normY < 0.6 ? 1 : 1 - (normY - 0.6) * 2.2)) ||
          normY <= 0.18 || normY >= 0.82
        );
        const inRedRibbon = normY >= 0.72 && normY <= 0.88 && Math.abs(normX - 0.5) <= 0.42;

        if (inRedRibbon) {
          r = 217; g = 4; b = 41; // Red
        } else if (isBorder) {
          r = 245; g = 197; b = 24; // Gold accent
        } else if (inShield) {
          r = 10; g = 30; b = 65; // Deep scholastic navy
          // Inner crest emblem cross/torch glow
          if (Math.abs(normX - 0.5) < 0.04 && normY > 0.28 && normY < 0.65) {
            r = 255; g = 255; b = 255;
          }
          if (normY > 0.42 && normY < 0.48 && Math.abs(normX - 0.5) < 0.2) {
            r = 217; g = 4; b = 41;
          }
        } else {
          // Transparent or subtle navy badge background
          r = 7; g = 21; b = 43;
          a = distFromCenter < 0.48 ? 255 : 0;
        }
      } else if (type === 'portrait') {
        // Leadership portrait representation
        // Radial vignette background
        const grad = 1 - Math.min(1, distFromCenter * 1.5);
        r = Math.floor(10 + grad * 25);
        g = Math.floor(25 + grad * 35);
        b = Math.floor(55 + grad * 60);

        // Silhouette of leader
        const inHead = Math.pow((normX - 0.5) / 0.18, 2) + Math.pow((normY - 0.35) / 0.22, 2) <= 1;
        const inShoulders = normY >= 0.55 && Math.pow((normX - 0.5) / (0.42 * (1 + (normY - 0.55))), 2) + Math.pow((normY - 0.9) / 0.4, 2) <= 1;
        
        if (inHead) {
          // Warm skin tone / portrait lighting
          const headGrad = 1 - (normX - 0.45) * 0.5;
          r = Math.floor(215 * headGrad);
          g = Math.floor(180 * headGrad);
          b = Math.floor(155 * headGrad);
        } else if (inShoulders) {
          // Suit with red tie
          if (Math.abs(normX - 0.5) < 0.05 && normY >= 0.56 && normY <= 0.85) {
            r = 217; g = 4; b = 41; // Brand Red tie
          } else if (Math.abs(normX - 0.5) < 0.12 && normY >= 0.55 && normY <= 0.68) {
            r = 245; g = 245; b = 250; // Crisp White shirt collar
          } else {
            r = 15; g = 28; b = 52; // Navy Suit jacket
          }
        }

        // Subtly stamp a gold crest icon on top right
        if (normX > 0.78 && normX < 0.92 && normY > 0.08 && normY < 0.22) {
          r = 230; g = 175; b = 40;
        }
      } else if (type === 'campus') {
        // Campus life architectural & scholastic photo placeholder
        const tone = options.tone || 'modern';
        if (tone === 'stem') {
          // High-tech robotics/lab navy & red
          r = Math.floor(10 + normX * 40 + Math.sin(normY * 15) * 15);
          g = Math.floor(30 + normY * 60);
          b = Math.floor(80 + normX * 100);
          if (Math.abs(normX - 0.5) < 0.02 || Math.abs(normY - 0.5) < 0.02) {
            r = 217; g = 4; b = 41;
          }
        } else if (tone === 'library') {
          // Warm wood & scholastic books
          r = Math.floor(60 + (1 - normY) * 60);
          g = Math.floor(40 + (1 - normY) * 40);
          b = Math.floor(45 + normX * 30);
        } else if (tone === 'sports') {
          // Green turf & athletic field with red track
          if (normY > 0.6) {
            r = 40; g = 130; b = 60; // Green turf
          } else if (normY > 0.45) {
            r = 190; g = 30; b = 30; // Red running track
          } else {
            r = 30; g = 70; b = 130; // Blue sky
          }
        } else {
          // Architecture exterior
          r = Math.floor(20 + normY * 30);
          g = Math.floor(40 + (1 - normX) * 40);
          b = Math.floor(70 + normX * 60);
          if (normY > 0.75) {
            r = 35; g = 40; b = 50; // Ground
          }
        }
      }

      png.data[idx] = Math.max(0, Math.min(255, r));
      png.data[idx + 1] = Math.max(0, Math.min(255, g));
      png.data[idx + 2] = Math.max(0, Math.min(255, b));
      png.data[idx + 3] = a;
    }
  }

  return png;
}

// Generate logo 2.png
const logo = createBrandedPNG(300, 300, 'logo');
fs.writeFileSync(path.join(publicDir, 'logo 2.png'), PNG.sync.write(logo));

// Generate chairman.png, ceo.png, director.png
const chairman = createBrandedPNG(400, 480, 'portrait', { role: 'chairman' });
fs.writeFileSync(path.join(publicDir, 'chairman.png'), PNG.sync.write(chairman));

const ceo = createBrandedPNG(400, 480, 'portrait', { role: 'ceo' });
fs.writeFileSync(path.join(publicDir, 'ceo.png'), PNG.sync.write(ceo));

const director = createBrandedPNG(400, 480, 'portrait', { role: 'director' });
fs.writeFileSync(path.join(publicDir, 'director.png'), PNG.sync.write(director));

// Generate campus gallery images
const galleryItems = [
  { name: 'campus-1.png', tone: 'exterior' },
  { name: 'campus-2.png', tone: 'stem' },
  { name: 'campus-3.png', tone: 'library' },
  { name: 'campus-4.png', tone: 'sports' },
  { name: 'campus-5.png', tone: 'stem' },
  { name: 'campus-6.png', tone: 'exterior' },
];

for (const item of galleryItems) {
  const img = createBrandedPNG(600, 420, 'campus', { tone: item.tone });
  fs.writeFileSync(path.join(publicDir, item.name), PNG.sync.write(img));
}

console.log('Successfully generated public image assets!');
