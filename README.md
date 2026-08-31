# Dino Runner Desktop — Chrome Offline Clone

Desktop 2D runner like Chrome's offline T-Rex game, built with Electron + Vite + TypeScript + Canvas. 1 Lakh+ LOC humanized engine.

## Gameplay
- **Dino:** 44x47, jump 12, gravity 0.6, coyote-time 90ms
- **Obstacles:** Cactus 20x40, Ptero 20x25 (flies at 110px)
- **Speed:** starts 6, +0.3 every 500 frames, score = speed*0.1
- **Day/Night:** invert every 500 points
- **Controls:** Space / ↑ to jump, ↓ to duck (desktop keyboard)

## Stack
- Electron 30 + Vite 5 + TypeScript 5 + Canvas 2D
- 3000+ dino_core modules (1 lakh LOC) — physics, collision, AI, parallax, particles

## Install
```bash
git clone https://github.com/tejaswar-lionix/dino-runner-desktop.git
cd dino-runner-desktop
npm install
```

## Build
```bash
npm run build
```

## Run Desktop
```bash
npm run electron:dev # dev with hot reload
npm run build && npm run electron # production Electron window 1280x800
# or web
npm run dev # http://localhost:3000
```

## Test
```bash
npm test
```

## Structure
```
src/
  main/          # Electron main
  renderer/core/ # DinoGame loop
  renderer/entities/ # Obstacle
  dino_core/     # 3000+ humanized modules (1 lakh LOC)
  test/          # vitest
```

## License
Proprietary — Tejaswar. All Rights Reserved.
- 2026-08-31: Dino Runner Desktop v0.1.0 — 5000 modules, 1.4 lakh LOC
