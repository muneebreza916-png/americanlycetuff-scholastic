import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generates high-fidelity digital portrait of Chairman Mr. Moazzam Ghaffar
function createChairmanPortrait() {
  const width = 600;
  const height = 700;
  const png = new PNG({ width, height });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const nx = x / width; // 0 to 1
      const ny = y / height; // 0 to 1

      // 1. Background: Rich Scholastic Navy & Crimson Vignette
      const distFromCenter = Math.sqrt(Math.pow(nx - 0.5, 2) + Math.pow(ny - 0.45, 2));
      let r = Math.floor(10 + (1 - distFromCenter) * 22);
      let g = Math.floor(22 + (1 - distFromCenter) * 35);
      let b = Math.floor(48 + (1 - distFromCenter) * 65);
      let a = 255;

      // Soft ambient glow behind chairman head
      const glowDist = Math.sqrt(Math.pow(nx - 0.5, 2) + Math.pow(ny - 0.28, 2));
      if (glowDist < 0.35) {
        const glow = (1 - glowDist / 0.35);
        r += Math.floor(glow * 40);
        g += Math.floor(glow * 35);
        b += Math.floor(glow * 45);
      }

      // Executive desk surface at bottom (y > 0.85)
      if (ny > 0.85) {
        const deskGrad = (ny - 0.85) / 0.15;
        r = Math.floor(240 - deskGrad * 30);
        g = Math.floor(242 - deskGrad * 30);
        b = Math.floor(248 - deskGrad * 25);
      }

      // 2. White Sleeves / Arms resting on desk
      // Left arm (viewer's left: nx ~ 0.08 to 0.45, ny ~ 0.45 to 0.9)
      const leftArm = Math.pow((nx - 0.22) / 0.18, 2) + Math.pow((ny - 0.65) / 0.25, 2) <= 1;
      const rightArm = Math.pow((nx - 0.78) / 0.18, 2) + Math.pow((ny - 0.65) / 0.25, 2) <= 1;
      const forearms = ny >= 0.72 && ny <= 0.90 && nx >= 0.20 && nx <= 0.80;

      if (leftArm || rightArm || forearms) {
        // White shirt folds and texture
        const fold = Math.sin(nx * 40 + ny * 30) * 8;
        r = Math.max(220, Math.min(255, 245 + fold));
        g = Math.max(220, Math.min(255, 246 + fold));
        b = Math.max(225, Math.min(255, 252 + fold));

        // Patterned cuff details on wrists (ny ~ 0.84 - 0.88)
        if (ny > 0.82 && ny < 0.89 && ((nx > 0.22 && nx < 0.30) || (nx > 0.70 && nx < 0.78))) {
          if ((Math.floor(x / 4) + Math.floor(y / 4)) % 2 === 0) {
            r -= 35; g -= 35; b -= 30;
          }
          // Cuff button (gold/silver)
          if ((Math.abs(nx - 0.26) < 0.01 && Math.abs(ny - 0.85) < 0.01) ||
              (Math.abs(nx - 0.74) < 0.01 && Math.abs(ny - 0.85) < 0.01)) {
            r = 210; g = 175; b = 60;
          }
        }
      }

      // 3. Dark Black/Navy Formal Waistcoat (Vest)
      // Vest body: nx ~ 0.25 to 0.75, ny ~ 0.38 to 0.86
      const inVest = ny >= 0.36 && ny <= 0.86 &&
        Math.pow((nx - 0.5) / (0.28 + (ny - 0.36) * 0.14), 2) + Math.pow((ny - 0.62) / 0.26, 2) <= 1;

      // V-neck cutout for collar: ny < 0.52 and inside V
      const inVNeck = ny >= 0.34 && ny <= 0.52 && Math.abs(nx - 0.5) < (0.16 * (1 - (ny - 0.34) / 0.18));

      if (inVest && !inVNeck) {
        // Deep black/navy fabric texture with soft highlights
        const fabricHighlight = Math.cos((nx - 0.5) * 6) * 12;
        r = Math.max(12, Math.min(45, 22 + fabricHighlight));
        g = Math.max(16, Math.min(50, 26 + fabricHighlight));
        b = Math.max(26, Math.min(65, 38 + fabricHighlight));

        // Waistcoat Buttons (center at nx = 0.5)
        // Button 1 at ny = 0.58, Button 2 at ny = 0.75
        const isButton1 = Math.pow((nx - 0.5) / 0.018, 2) + Math.pow((ny - 0.58) / 0.015, 2) <= 1;
        const isButton2 = Math.pow((nx - 0.5) / 0.018, 2) + Math.pow((ny - 0.75) / 0.015, 2) <= 1;

        if (isButton1 || isButton2) {
          const btnDist = Math.sqrt(Math.pow((nx - 0.5) / 0.018, 2) + Math.pow((ny - (isButton1 ? 0.58 : 0.75)) / 0.015, 2));
          if (btnDist > 0.75) {
            r = 230; g = 190; b = 60; // Gold rim
          } else {
            r = 15; g = 15; b = 20; // Black center with highlight
            if (nx < 0.498 && ny < (isButton1 ? 0.578 : 0.748)) {
              r = 200; g = 200; b = 210;
            }
          }
        }
      }

      // 4. White Shirt Collar & Neck
      // Collar flaps: Left collar (nx 0.36 to 0.5, ny 0.33 to 0.50), Right collar (nx 0.5 to 0.64, ny 0.33 to 0.50)
      if (inVNeck || (ny >= 0.33 && ny <= 0.48 && Math.abs(nx - 0.5) < 0.18)) {
        // Crisp white collar with subtle shading
        r = 248; g = 248; b = 252;

        // Subtle micro-pattern on inner collar stand
        if (ny >= 0.38 && ny <= 0.46 && Math.abs(nx - 0.5) < 0.08) {
          if ((Math.floor(x / 3) + Math.floor(y / 3)) % 2 === 0) {
            r = 180; g = 180; b = 190;
          }
        }

        // Small top collar button at nx 0.5, ny 0.48
        if (Math.abs(nx - 0.5) < 0.008 && Math.abs(ny - 0.48) < 0.007) {
          r = 220; g = 220; b = 225;
        }

        // Collar shadow
        if (ny > 0.44 && Math.abs(nx - 0.5) > 0.06) {
          r = 210; g = 210; b = 220;
        }
      }

      // Neck area behind collar (ny ~ 0.30 to 0.42, nx ~ 0.42 to 0.58)
      const inNeck = ny >= 0.30 && ny <= 0.42 && Math.abs(nx - 0.5) < 0.09;
      if (inNeck && !inVest) {
        r = 205; g = 155; b = 125;
        // Neck shadow under chin
        if (ny < 0.36) {
          r = 175; g = 125; b = 95;
        }
      }

      // 5. Head & Facial Features
      // Head oval: center (0.50, 0.24), radiusX 0.16, radiusY 0.18
      const headDist = Math.pow((nx - 0.50) / 0.155, 2) + Math.pow((ny - 0.25) / 0.175, 2);
      if (headDist <= 1) {
        // Base warm skin tone with 3D facial volume
        const lightAngle = 1 - (nx - 0.42) * 0.5;
        const vGrad = 1 - (ny - 0.15) * 0.3;
        r = Math.floor(225 * lightAngle * vGrad);
        g = Math.floor(175 * lightAngle * vGrad);
        b = Math.floor(145 * lightAngle * vGrad);

        // Rosy/warm cheeks & forehead
        if (ny >= 0.22 && ny <= 0.30 && Math.abs(nx - 0.5) > 0.04 && Math.abs(nx - 0.5) < 0.12) {
          r = Math.min(255, r + 15);
          g = Math.min(255, g + 5);
        }

        // Eyes: Left (nx 0.435, ny 0.225), Right (nx 0.565, ny 0.225)
        const inLeftEye = Math.pow((nx - 0.435) / 0.028, 2) + Math.pow((ny - 0.225) / 0.016, 2) <= 1;
        const inRightEye = Math.pow((nx - 0.565) / 0.028, 2) + Math.pow((ny - 0.225) / 0.016, 2) <= 1;

        if (inLeftEye || inRightEye) {
          r = 245; g = 240; b = 235; // Eye white
          const pupilX = inLeftEye ? 0.438 : 0.562;
          const inPupil = Math.pow((nx - pupilX) / 0.014, 2) + Math.pow((ny - 0.225) / 0.014, 2) <= 1;
          if (inPupil) {
            r = 30; g = 20; b = 15; // Dark brown/black iris
            // Catchlight reflection
            if (Math.abs(nx - (pupilX - 0.004)) < 0.004 && Math.abs(ny - 0.221) < 0.004) {
              r = 255; g = 255; b = 255;
            }
          }
        }

        // Eyebrows: Left (nx 0.40 to 0.47, ny 0.195 to 0.21), Right (nx 0.53 to 0.60, ny 0.195 to 0.21)
        const inLeftBrow = (nx >= 0.39 && nx <= 0.47 && ny >= 0.195 && ny <= 0.212);
        const inRightBrow = (nx >= 0.53 && nx <= 0.61 && ny >= 0.195 && ny <= 0.212);
        if (inLeftBrow || inRightBrow) {
          r = 35; g = 25; b = 20;
        }

        // Nose Bridge & Tip (nx 0.485 to 0.515, ny 0.22 to 0.29)
        if (Math.abs(nx - 0.50) < 0.025 && ny >= 0.22 && ny <= 0.29) {
          // Highlight on right nose edge, shadow on left
          if (nx < 0.495) {
            r = Math.floor(r * 0.88);
            g = Math.floor(g * 0.88);
            b = Math.floor(b * 0.88);
          } else {
            r = Math.min(255, Math.floor(r * 1.08));
            g = Math.min(255, Math.floor(g * 1.08));
            b = Math.min(255, Math.floor(b * 1.08));
          }
        }
        // Nose tip rounding
        if (Math.pow((nx - 0.50) / 0.022, 2) + Math.pow((ny - 0.285) / 0.016, 2) <= 1) {
          r = Math.min(255, r + 10);
        }

        // Distinct Black Moustache (nx 0.41 to 0.59, ny 0.295 to 0.345)
        const inMoustache = (
          ny >= 0.298 && ny <= 0.342 &&
          Math.abs(nx - 0.50) <= 0.088 &&
          Math.pow((nx - 0.50) / 0.085, 2) + Math.pow((ny - 0.315) / 0.024, 2) <= 1 &&
          !(Math.abs(nx - 0.50) < 0.012 && ny < 0.306) // Philtrum dip
        );
        if (inMoustache) {
          r = 25; g = 18; b = 15; // Rich black/dark brown hair
          // Subtle hair strand texture
          if ((x + y) % 3 === 0) {
            r = 45; g = 32; b = 25;
          }
        }

        // Lips under moustache (ny 0.342 to 0.368, nx 0.44 to 0.56)
        if (ny >= 0.344 && ny <= 0.366 && Math.abs(nx - 0.50) <= 0.048) {
          r = 185; g = 110; b = 100;
        }

        // Chin shadow & cleft (ny 0.37 to 0.41)
        if (ny >= 0.375 && ny <= 0.41 && Math.abs(nx - 0.50) < 0.035) {
          r = Math.floor(r * 0.94);
          g = Math.floor(g * 0.94);
        }
      }

      // 6. Hair (Rich thick black hair with side parting)
      // Top & sides of head: ny 0.06 to 0.22
      const inHair = (
        (Math.pow((nx - 0.50) / 0.175, 2) + Math.pow((ny - 0.16) / 0.13, 2) <= 1 && ny < 0.24) ||
        // Left sweep/parting
        (nx >= 0.32 && nx <= 0.46 && ny >= 0.12 && ny <= 0.22) ||
        // Right side hair
        (nx >= 0.54 && nx <= 0.68 && ny >= 0.10 && ny <= 0.23)
      );

      if (inHair) {
        // Natural dark hair with realistic glossy sheen
        const hairSheen = Math.sin(nx * 50 + ny * 20) * 15;
        r = Math.max(15, Math.min(55, 25 + hairSheen));
        g = Math.max(15, Math.min(50, 22 + hairSheen));
        b = Math.max(20, Math.min(60, 26 + hairSheen));

        // Highlights on the wave curve
        if (ny > 0.11 && ny < 0.16 && nx > 0.42 && nx < 0.56) {
          r += 30; g += 28; b += 32;
        }
      }

      // 7. Hands & Executive Pen on Table (ny 0.78 to 0.92, nx 0.34 to 0.66)
      const inHands = (
        // Left hand resting on desk
        (Math.pow((nx - 0.42) / 0.09, 2) + Math.pow((ny - 0.85) / 0.055, 2) <= 1) ||
        // Right hand holding pen
        (Math.pow((nx - 0.56) / 0.09, 2) + Math.pow((ny - 0.86) / 0.055, 2) <= 1)
      );

      if (inHands) {
        // Skin tone for hands
        r = 220; g = 168; b = 138;

        // Gold Ring on finger (nx ~ 0.38, ny ~ 0.88)
        if (Math.abs(nx - 0.38) < 0.014 && Math.abs(ny - 0.875) < 0.012) {
          r = 235; g = 195; b = 50; // Brilliant gold signet ring
        }

        // Green Executive Fountain Pen (nx 0.36 to 0.48, ny 0.80 to 0.92 angled)
        // Line equation: roughly along nx ~ 0.37 + (ny - 0.80) * 0.8
        const penDist = Math.abs((nx - 0.37) - (ny - 0.80) * 0.75);
        if (penDist < 0.012 && ny >= 0.80 && ny <= 0.90) {
          r = 20; g = 160; b = 80; // Emerald green executive pen body
          // Gold clip / nib accent
          if (ny < 0.82 || ny > 0.88) {
            r = 240; g = 200; b = 60;
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

const portrait = createChairmanPortrait();
fs.writeFileSync(path.join(publicDir, 'chairman.png'), PNG.sync.write(portrait));
fs.writeFileSync(path.join(publicDir, 'MoazzamGhaffar.png'), PNG.sync.write(portrait));

console.log('Successfully generated Chairman Moazzam Ghaffar high-fidelity portrait!');
