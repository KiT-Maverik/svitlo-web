# Світло — Light Through Media

A **38-second cinematic motion-design experiment** authored completely in React and rendered using Remotion. Two compositions are available: **1920 × 1080 (16:9)** and **1080 × 1920 (9:16)**, both at 30 fps. No cloud rendering, external assets, paid fonts, or video APIs are required.

## Run on your Mac

From the `svitlo-web` repository:

```bash
cd video/light-through-media
npm install
npm run studio
```

Open the Remotion Studio URL printed by the CLI (normally **http://localhost:3001**). Scrub the timeline, preview scenes and edit props (accent color, title, subtitle, mute soundtrack, show/hide physics labels).

To export videos **on your own computer**, close Studio if desired and run:

```bash
npm run render           # out/light-through-media.mp4 (16:9)
npm run render:vertical  # out/light-through-media-vertical.mp4 (9:16)
npm run poster           # out/poster.png (landscape still)
npm run check            # standalone TypeScript check
```

If you prefer CLI input props instead of editing Studio, create `my-props.json` (example below) and run:

```bash
npx remotion render src/index.ts LightThroughMedia out/custom.mp4 --props=./my-props.json
```

```json
{"accent":"#7df4ff","showPhysics":true,"sound":true,"title":"ЯК ПОДОРОЖУЄ СВІТЛО","subtitle":"Одна хвиля. Різні світи."}
```

These examples use `@remotion/cli` installed in this isolated folder. The web app dependencies and CI workflows are untouched. Generated audio, MP4 and poster files are ignored by git.

## What it demonstrates

| Timeline | Sequence | Techniques |
| --- | --- | --- |
| 0–5 s | Optical overture | Letter-reveal typography, camera-scale illusion, procedural star dust, concentric orbits |
| 5–13 s | The source | SVG ray tracing, dash animation, glows, wave motion, numeric counters, overlays |
| 13–24 s | Air → Water → Glass | Custom-timed scene transitions, glassmorphism, refraction governed by Snell's law, light caustic accents |
| 24–32 s | The race | Data-driven animated multi-track comparison using `c/n`, easing, staggered entry |
| 32–38 s | Finale | Formula cards, particle bloom, outro lock-up and fade |

Other techniques: `useCurrentFrame()`, `useVideoConfig()`, `interpolate()`, `spring()`, `Sequence`, parameterized `defaultProps`, deterministic procedural graphics, authored synthesis / audio mixing, responsive aspect ratios.

## Soundtrack

`scripts/generate-audio.mjs` produces a self-contained synthesized WAV in `public/soundtrack.wav` before Studio or video rendering. It is **not** downloaded or checked into git. Disable with `sound: false`. It uses repeatable sine harmonics and noise bursts; there are no third-party samples or copyright dependencies.

## Physics disclaimer

The *numbers* are approximately correct for visible light in vacuum, air, water and ordinary glass (using illustrative refractive indices `n = 1 / 1.000293 / 1.333 / 1.5`). `v = c/n`; Snell's law `n₁ sin θ₁ = n₂ sin θ₂` is used for ray bending at a boundary. Refractive indices depend on wavelength, glass type, temperature etc. Animated travel and wave effects are **time-stretched artistic visualizations**, not literal representations of the speed of light or atomic processes. Labels in the video explicitly say so.

## Explore the code

- `src/Root.tsx` — renderable compositions and resolutions.
- `src/constants.ts` — timeline, physical constants, props.
- `src/visuals.tsx` — backdrop, particles, interface and photon-ray effects.
- `src/scenes.tsx` — five narrative acts and reusable motion components.
- `src/LightThroughMedia.tsx` — time sequencing, transitions, soundtrack and camera frame.
- `scripts/generate-audio.mjs` — generated soundtrack.

## Licensing

Remotion licensing is governed by its [current license](https://www.remotion.dev/docs/license/pricing); individuals and qualifying small teams may use the free license. For distribution or organizational use, check eligibility.
