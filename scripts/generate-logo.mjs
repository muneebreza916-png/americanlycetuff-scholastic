import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate high resolution logo bitmap based on uploaded American Lycetuff Scholastic Campus branding
function createLogoPNG() {
  const width = 800;
  const height = 400;
  const png = new PNG({ width, height });

  // Fill transparent or white base
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const nx = x / width;
      const ny = y / height;

      let r = 255;
      let g = 255;
      let b = 255;
      let a = 0; // transparent background

      // ================= LEFT SHIELD CREST =================
      // Shield bounds: x from 40 to 220, y from 20 to 300
      const shieldCenterX = 140 / 800; // 0.175
      const shieldTopY = 25 / 400;    // 0.0625
      const shieldBottomY = 295 / 400;// 0.7375

      const inShieldOutline = (
        nx >= 0.06 && nx <= 0.30 &&
        ny >= 0.05 && ny <= 0.75 &&
        (ny <= 0.45 || Math.pow((nx - 0.18) / 0.12, 2) + Math.pow((ny - 0.45) / 0.30, 2) <= 1)
      );

      if (inShieldOutline) {
        // Navy Shield Border
        const borderDist = Math.abs(nx - 0.06) < 0.015 || Math.abs(nx - 0.30) < 0.015 || Math.abs(ny - 0.05) < 0.015 ||
          (ny > 0.45 && Math.abs(Math.pow((nx - 0.18) / 0.12, 2) + Math.pow((ny - 0.45) / 0.30, 2) - 1) < 0.15);

        if (borderDist) {
          r = 0; g = 32; b = 91; a = 255; // #00205b deep navy
        } else {
          r = 255; g = 255; b = 255; a = 255; // white inner fill

          // Top Header "LYCETUFF" inside shield (ny 0.07 to 0.16)
          if (ny >= 0.07 && ny <= 0.16 && nx >= 0.075 && nx <= 0.285) {
            r = 0; g = 32; b = 91; a = 255;
            // Text simulation
            if (ny >= 0.09 && ny <= 0.14 && (Math.floor(x / 4) % 2 === 0)) {
              r = 255; g = 255; b = 255;
            }
          }

          // Bull body silhouette in shield (nx 0.10 to 0.26, ny 0.18 to 0.38)
          const inBull = (
            (Math.pow((nx - 0.18) / 0.055, 2) + Math.pow((ny - 0.26) / 0.045, 2) <= 1) ||
            (Math.pow((nx - 0.13) / 0.025, 2) + Math.pow((ny - 0.22) / 0.03, 2) <= 1) ||
            // Legs
            (nx >= 0.13 && nx <= 0.15 && ny >= 0.28 && ny <= 0.36) ||
            (nx >= 0.21 && nx <= 0.23 && ny >= 0.28 && ny <= 0.36)
          );
          if (inBull) {
            r = 0; g = 32; b = 91; a = 255;
          }

          // Water waves below bull (ny 0.40, 0.45, 0.50)
          const wave1 = Math.abs(ny - (0.40 + Math.sin(nx * 50) * 0.008)) < 0.006 && nx >= 0.09 && nx <= 0.27;
          const wave2 = Math.abs(ny - (0.46 + Math.sin(nx * 50) * 0.008)) < 0.006 && nx >= 0.09 && nx <= 0.27;
          const wave3 = Math.abs(ny - (0.52 + Math.sin(nx * 50) * 0.008)) < 0.006 && nx >= 0.11 && nx <= 0.25;
          if (wave1 || wave2 || wave3) {
            r = 0; g = 32; b = 91; a = 255;
          }
        }
      }

      // Ribbon wrap at bottom left (nx 0.01 to 0.31, ny 0.48 to 0.74)
      const inRibbon = (
        (nx >= 0.01 && nx <= 0.07 && Math.pow((nx - 0.04) / 0.03, 2) + Math.pow((ny - 0.55) / 0.06, 2) <= 1) ||
        (ny >= 0.58 && ny <= 0.70 && nx >= 0.04 && nx <= 0.31 &&
         Math.abs((ny - 0.58) - (nx - 0.04) * 0.35) <= 0.065)
      );
      if (inRibbon) {
        r = 0; g = 32; b = 91; a = 255;
        // Ribbon scroll white edge
        if (nx < 0.05 && ny < 0.56) {
          r = 255; g = 255; b = 255;
        }
      }

      // ================= RIGHT BRAND TYPOGRAPHY =================
      // Line 1: AMERICAN (nx 0.32 to 0.98, ny 0.03 to 0.32)
      if (nx >= 0.32 && nx <= 0.98 && ny >= 0.03 && ny <= 0.32) {
        // Render bold condensed glyph letter blocks
        const letterIdx = Math.floor((nx - 0.32) / (0.66 / 8));
        const inLetterX = ((nx - 0.32) % (0.66 / 8)) / (0.66 / 8);
        if (inLetterX > 0.10 && inLetterX < 0.90) {
          r = 0; g = 32; b = 91; a = 255;
          // Inner counter holes for A, R
          if ((letterIdx === 0 || letterIdx === 4) && ny >= 0.08 && ny <= 0.18 && inLetterX > 0.35 && inLetterX < 0.65) {
            a = 0;
          }
        }
      }

      // Line 2: LYCETUFF (nx 0.32 to 0.98, ny 0.34 to 0.63)
      if (nx >= 0.32 && nx <= 0.98 && ny >= 0.34 && ny <= 0.63) {
        const inLetterX = ((nx - 0.32) % (0.66 / 8)) / (0.66 / 8);
        if (inLetterX > 0.10 && inLetterX < 0.90) {
          r = 0; g = 32; b = 91; a = 255;
        }
      }

      // Line 3: SCHOLASTIC CAMPUS (nx 0.38 to 0.94, ny 0.66 to 0.76)
      if (nx >= 0.38 && nx <= 0.94 && ny >= 0.66 && ny <= 0.76) {
        const inChar = ((nx - 0.38) % (0.56 / 16)) / (0.56 / 16);
        if (inChar > 0.15 && inChar < 0.85) {
          r = 0; g = 32; b = 91; a = 255;
        }
      }

      // Line 4: JUNIOR AND UPPER SCHOOL (Banner Polygon nx 0.30 to 0.98, ny 0.78 to 0.95)
      // Parallelogram banner cut
      const bannerLeftX = 0.30 + (ny - 0.78) * 0.25;
      const bannerRightX = 0.98 - (ny - 0.78) * 0.10;
      if (ny >= 0.78 && ny <= 0.95 && nx >= bannerLeftX && nx <= bannerRightX) {
        r = 0; g = 32; b = 91; a = 255;
        // White lettering inside banner
        if (ny >= 0.82 && ny <= 0.91 && nx >= 0.38 && nx <= 0.90) {
          const inChar = ((nx - 0.38) % (0.52 / 21)) / (0.52 / 21);
          if (inChar > 0.20 && inChar < 0.80) {
            r = 255; g = 255; b = 255;
          }
        }
      }

      png.data[idx] = r;
      png.data[idx + 1] = g;
      png.data[idx + 2] = b;
      png.data[idx + 3] = a;
    }
  }

  return png;
}

const logo = createLogoPNG();
fs.writeFileSync(path.join(publicDir, 'logo 2.png'), PNG.sync.write(logo));
fs.writeFileSync(path.join(publicDir, 'american-logo.png'), PNG.sync.write(logo));
fs.writeFileSync(path.join(publicDir, 'american logo.png'), PNG.sync.write(logo));

console.log('Successfully generated high-resolution American Lycetuff Scholastic Campus logo!');
