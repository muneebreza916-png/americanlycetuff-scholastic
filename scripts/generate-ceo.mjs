import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function createCeoPortrait() {
  const width = 600;
  const height = 720;
  const png = new PNG({ width, height });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const nx = x / width; // 0 to 1
      const ny = y / height; // 0 to 1

      // 1. Background: Deep Scholastic Navy / Indigo Gradient Vignette
      const distFromCenter = Math.sqrt(Math.pow(nx - 0.5, 2) + Math.pow(ny - 0.45, 2));
      let r = Math.floor(10 + (1 - distFromCenter) * 20);
      let g = Math.floor(24 + (1 - distFromCenter) * 35);
      let b = Math.floor(52 + (1 - distFromCenter) * 70);
      let a = 255;

      // Soft ambient golden/cyan backlight rim behind head
      const glowDist = Math.sqrt(Math.pow(nx - 0.5, 2) + Math.pow(ny - 0.28, 2));
      if (glowDist < 0.38) {
        const glow = (1 - glowDist / 0.38);
        r += Math.floor(glow * 35);
        g += Math.floor(glow * 45);
        b += Math.floor(glow * 60);
      }

      // 2. Teal / Petrol Blue Executive Coat Body & Shoulders (ny 0.35 to 1.0)
      // Broad shoulders: nx 0.05 to 0.95, narrowing towards waist
      const shoulderCurve = Math.pow((nx - 0.5) / (0.32 + (ny - 0.35) * 0.22), 2) + Math.pow((ny - 0.68) / 0.36, 2);
      const inCoat = ny >= 0.34 && shoulderCurve <= 1;

      // Inner chest V-lapel cutout (ny 0.36 to 0.72)
      const lapelV = ny >= 0.34 && ny <= 0.72 && Math.abs(nx - 0.5) < (0.13 * (1 - (ny - 0.34) / 0.38));

      if (inCoat) {
        // Base Teal/Cyan-Navy Wool Texture
        // Color approx: #176582 / #0f4c63
        const weave = Math.sin(nx * 80 + ny * 60) * 6;
        const foldLight = Math.cos((nx - 0.5) * 5) * 15;
        r = Math.max(12, Math.min(48, 24 + foldLight + weave));
        g = Math.max(50, Math.min(125, 88 + foldLight + weave));
        b = Math.max(75, Math.min(155, 118 + foldLight + weave));

        // Epaulets on shoulders (ny 0.36 to 0.42, nx 0.12 to 0.28 and nx 0.72 to 0.88)
        const leftEpaulet = ny >= 0.36 && ny <= 0.42 && nx >= 0.14 && nx <= 0.30;
        const rightEpaulet = ny >= 0.36 && ny <= 0.42 && nx >= 0.70 && nx <= 0.86;
        if (leftEpaulet || rightEpaulet) {
          r = Math.min(255, r + 15);
          g = Math.min(255, g + 20);
          b = Math.min(255, b + 25);
          // Epaulet button
          if ((Math.abs(nx - 0.27) < 0.012 && Math.abs(ny - 0.40) < 0.012) ||
              (Math.abs(nx - 0.73) < 0.012 && Math.abs(ny - 0.40) < 0.012)) {
            r = 20; g = 30; b = 40;
          }
        }

        // Chest Flap Pockets with Buttons (ny 0.50 to 0.58, nx 0.18 to 0.36 & nx 0.64 to 0.82)
        const leftFlap = ny >= 0.50 && ny <= 0.56 && nx >= 0.18 && nx <= 0.36;
        const rightFlap = ny >= 0.50 && ny <= 0.56 && nx >= 0.64 && nx <= 0.82;
        if (leftFlap || rightFlap) {
          r = Math.max(10, r - 12);
          g = Math.max(30, g - 12);
          b = Math.max(50, b - 12);
          // Pocket flap buttons
          if ((Math.abs(nx - 0.32) < 0.012 && Math.abs(ny - 0.54) < 0.012) ||
              (Math.abs(nx - 0.68) < 0.012 && Math.abs(ny - 0.54) < 0.012)) {
            r = 25; g = 35; b = 45;
          }
        }

        // Front Center Placket & Horn Buttons (nx ~ 0.50, ny 0.70, 0.82, 0.94)
        if (Math.abs(nx - 0.50) < 0.025 && ny >= 0.68) {
          // Placket shadow
          if (nx < 0.50) {
            r = Math.max(10, r - 15);
            g = Math.max(35, g - 15);
            b = Math.max(55, b - 15);
          }
        }

        // Dark Matte Coat Buttons along center line
        const btn1 = Math.pow((nx - 0.50) / 0.018, 2) + Math.pow((ny - 0.70) / 0.014, 2) <= 1;
        const btn2 = Math.pow((nx - 0.50) / 0.018, 2) + Math.pow((ny - 0.82) / 0.014, 2) <= 1;
        const btn3 = Math.pow((nx - 0.50) / 0.018, 2) + Math.pow((ny - 0.94) / 0.014, 2) <= 1;
        if (btn1 || btn2 || btn3) {
          r = 25; g = 35; b = 45;
          if (nx < 0.495) {
            r = 75; g = 95; b = 115; // rim highlight
          }
        }

        // Coat Wide Lapels / Collar (ny 0.34 to 0.66)
        // Left lapel & Right lapel
        const isLeftLapel = ny >= 0.34 && ny <= 0.66 && nx >= 0.30 && nx <= 0.50 &&
          nx <= (0.34 + (ny - 0.34) * 0.25);
        const isRightLapel = ny >= 0.34 && ny <= 0.66 && nx >= 0.50 && nx <= 0.70 &&
          nx >= (0.66 - (ny - 0.34) * 0.25);
        if (isLeftLapel || isRightLapel) {
          r = Math.min(255, r + 12);
          g = Math.min(255, g + 14);
          b = Math.min(255, b + 16);
        }
      }

      // 3. Inner Dark Ribbed Polo/Mockneck with Metallic Zipper (ny 0.34 to 0.72 inside lapelV)
      if (lapelV || (ny >= 0.34 && ny <= 0.44 && Math.abs(nx - 0.5) < 0.14)) {
        // Dark Charcoal / Brown Ribbed inner knit (#2a2220 to #1a1614)
        const rib = Math.sin(nx * 120) * 8;
        r = Math.max(20, Math.min(65, 38 + rib));
        g = Math.max(18, Math.min(60, 32 + rib));
        b = Math.max(18, Math.min(58, 30 + rib));

        // Metal Zipper down the center (nx 0.492 to 0.508, ny 0.37 to 0.65)
        if (Math.abs(nx - 0.50) <= 0.008 && ny >= 0.37 && ny <= 0.65) {
          // Metallic teeth shimmer
          if (Math.floor(y / 3) % 2 === 0) {
            r = 195; g = 195; b = 205; // Bright steel
          } else {
            r = 50; g = 50; b = 60;
          }
        }
        // Metal zipper pull tab at top (ny 0.38 to 0.41, nx 0.490 to 0.510)
        if (Math.abs(nx - 0.50) <= 0.010 && ny >= 0.38 && ny <= 0.41) {
          r = 215; g = 215; b = 225;
        }
      }

      // 4. Neck & Collar Shading (ny 0.30 to 0.38, nx 0.41 to 0.59)
      const inNeck = ny >= 0.29 && ny <= 0.37 && Math.abs(nx - 0.5) < 0.10;
      if (inNeck) {
        r = 195; g = 145; b = 118;
        // Shadow under beard/chin
        if (ny < 0.34) {
          r = 155; g = 110; b = 88;
        }
      }

      // 5. Head & Facial Structure (center 0.50, 0.22, radiusX 0.155, radiusY 0.165)
      const headDist = Math.pow((nx - 0.50) / 0.150, 2) + Math.pow((ny - 0.225) / 0.160, 2);
      if (headDist <= 1) {
        // Base warm skin tone
        const lightAngle = 1 - (nx - 0.45) * 0.4;
        const vGrad = 1 - (ny - 0.12) * 0.25;
        r = Math.floor(228 * lightAngle * vGrad);
        g = Math.floor(172 * lightAngle * vGrad);
        b = Math.floor(142 * lightAngle * vGrad);

        // Well-groomed Full Beard & Moustache (ny 0.245 to 0.35, nx 0.36 to 0.64)
        const inBeard = (
          (ny >= 0.265 && ny <= 0.345 && Math.pow((nx - 0.50) / 0.115, 2) + Math.pow((ny - 0.285) / 0.065, 2) <= 1) ||
          // Jawline and sideburns
          (ny >= 0.19 && ny <= 0.32 && Math.abs(nx - 0.50) >= 0.10 && Math.abs(nx - 0.50) <= 0.142) ||
          // Moustache under nose
          (ny >= 0.248 && ny <= 0.282 && Math.abs(nx - 0.50) <= 0.075)
        );

        if (inBeard) {
          // Deep rich dark brown/black textured beard hair
          const hairNoise = Math.sin(nx * 90 + ny * 70) * 12;
          r = Math.max(20, Math.min(55, 30 + hairNoise));
          g = Math.max(18, Math.min(48, 25 + hairNoise));
          b = Math.max(16, Math.min(45, 22 + hairNoise));
        }

        // Lips area (ny 0.282 to 0.298, nx 0.45 to 0.55)
        if (ny >= 0.282 && ny <= 0.298 && Math.abs(nx - 0.50) <= 0.042) {
          r = 180; g = 115; b = 105;
        }

        // Nose Bridge (ny 0.19 to 0.25, nx 0.475 to 0.525)
        if (ny >= 0.19 && ny <= 0.25 && Math.abs(nx - 0.50) <= 0.022) {
          r = Math.min(255, Math.floor(r * 1.05));
          g = Math.min(255, Math.floor(g * 1.05));
          b = Math.min(255, Math.floor(b * 1.05));
        }

        // 6. Aviator Sunglasses with Gradient Tint & Metallic Gold/Silver Frame
        // Left lens: center (0.428, 0.195), radiusX 0.048, radiusY 0.038
        // Right lens: center (0.572, 0.195), radiusX 0.048, radiusY 0.038
        const inLeftLens = Math.pow((nx - 0.428) / 0.046, 2) + Math.pow((ny - 0.195) / 0.036, 2) <= 1;
        const inRightLens = Math.pow((nx - 0.572) / 0.046, 2) + Math.pow((ny - 0.195) / 0.036, 2) <= 1;

        if (inLeftLens || inRightLens) {
          // Sunset/Smoky Gradient Tint: darker at top (ny ~ 0.16) to lighter amber/rose at bottom (ny ~ 0.23)
          const lensY = (ny - 0.16) / 0.07;
          // Gradient from deep burgundy-slate to warm translucent amber
          r = Math.floor(45 + lensY * 95);
          g = Math.floor(30 + lensY * 45);
          b = Math.floor(40 + lensY * 55);

          // Diagonal light reflection slash across glasses
          const slashDist = Math.abs((nx - 0.40) + (ny - 0.18) * 1.4);
          if (slashDist < 0.015 && (inLeftLens || inRightLens)) {
            r = Math.min(255, r + 85);
            g = Math.min(255, g + 85);
            b = Math.min(255, b + 105);
          }
        }

        // Sunglasses Frames & Double Bridge Wire (Gold / Silver Metallic)
        // Left frame rim
        const leftRimDist = Math.sqrt(Math.pow((nx - 0.428) / 0.046, 2) + Math.pow((ny - 0.195) / 0.036, 2));
        const isLeftRim = leftRimDist >= 0.88 && leftRimDist <= 1.08;
        // Right frame rim
        const rightRimDist = Math.sqrt(Math.pow((nx - 0.572) / 0.046, 2) + Math.pow((ny - 0.195) / 0.036, 2));
        const isRightRim = rightRimDist >= 0.88 && rightRimDist <= 1.08;

        // Double Bridge between lenses (nx 0.47 to 0.53, ny 0.168 to 0.174 & ny 0.185 to 0.191)
        const isTopBridge = nx >= 0.472 && nx <= 0.528 && Math.abs(ny - 0.168) <= 0.003;
        const isLowerBridge = nx >= 0.472 && nx <= 0.528 && Math.abs(ny - 0.188) <= 0.003;

        if (isLeftRim || isRightRim || isTopBridge || isLowerBridge) {
          r = 235; g = 210; b = 160; // Pale champagne gold wire
          if (nx < 0.42 || nx > 0.58) {
            r = 255; g = 235; b = 195; // highlight
          }
        }
      }

      // 7. Hair (Modern styled comb-over with volume and texture)
      // Hair dome: ny 0.04 to 0.20
      const inHair = (
        // Top dome
        (Math.pow((nx - 0.50) / 0.165, 2) + Math.pow((ny - 0.135) / 0.105, 2) <= 1 && ny < 0.19) ||
        // Left side comb-over sweep with warm chestnut highlights
        (nx >= 0.33 && nx <= 0.48 && ny >= 0.06 && ny <= 0.18) ||
        // Right side fade
        (nx >= 0.52 && nx <= 0.66 && ny >= 0.08 && ny <= 0.18)
      );

      if (inHair) {
        // Natural rich brown hair with chestnut/honey highlights
        const hairWave = Math.sin(nx * 45 + ny * 35) * 20;
        const isHighlight = (nx > 0.38 && nx < 0.54 && ny > 0.06 && ny < 0.14);
        if (isHighlight) {
          r = Math.max(50, Math.min(145, 95 + hairWave));
          g = Math.max(35, Math.min(105, 68 + hairWave));
          b = Math.max(25, Math.min(80, 48 + hairWave));
        } else {
          r = Math.max(25, Math.min(75, 45 + hairWave));
          g = Math.max(20, Math.min(60, 35 + hairWave));
          b = Math.max(18, Math.min(50, 28 + hairWave));
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

const portrait = createCeoPortrait();
fs.writeFileSync(path.join(publicDir, 'ceo.png'), PNG.sync.write(portrait));
fs.writeFileSync(path.join(publicDir, 'FB_IMG_1787767953962.png'), PNG.sync.write(portrait));
fs.writeFileSync(path.join(publicDir, 'aitzaz-shah.png'), PNG.sync.write(portrait));

console.log('Successfully generated CEO Syed Aitzaz Shah high-fidelity cropped portrait!');
