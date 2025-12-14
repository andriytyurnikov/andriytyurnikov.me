# Ergonomic Web

## Rationale

Little affordances may add up (or even multiply). The perceived and real complexity of addressing ergonomic challenges can be justified economically — small friction reductions compound across interactions and users.

---

## Ergonomic Layers

| Layer | Domain | Status |
|-------|--------|--------|
| **Perceptual** | Vision, FOV, visual angle, acuity | Developing |
| **Motor** | Thumb reach, gestures, handedness, Fitts's Law | Touched |
| **Cognitive** | Attention, memory, load, decision-making | To research |
| **Temporal** | Animation timing, latency, rhythm, pacing | To research |
| **Emotional** | Delight, frustration, trust, affect | To research |
| **Semantic** | Meaning, mental models, language, iconography | To research |

---

## Perceptual ergonomics

### Fundamentals

**Acuity density in FOV** — Human vision has variable sharpness. Foveal vision is sharp; peripheral fades. This is foundational to understanding where to place essential content.

**Distance to eye** — Different devices are held/viewed at different distances. This is foundational to form factors. Phone ~30cm, tablet ~40cm, desktop ~60cm.

**Angular degrees** — The truly ergonomic unit of visible size. What matters is how large something appears to the eye (visual angle), not pixels or physical size alone.

### The Platform Limitation

We don't have access to viewing distance in CSS/browsers. We can't measure degrees directly.

### The Solution: Responsive Rem

Make an educated guess from **screen resolution + orientation** to infer device tier, then scale rem to approximate angular units.

**Breakpoint logic:**
- 507px = iPad Picture-in-Picture size
- If both width AND height < 507px → phone or small floating window
- If ≥ 507px on both → tablet or larger as primary display

**Root font-size scale** (base unit = 4px):

| Device | Multiplier | Root font-size | Breakpoint |
|--------|-----------|----------------|------------|
| Mobile | ×4 | 16px | <507px |
| Tablet | ×5 | 20px | 507px |
| Laptop | ×6 | 24px | 1200px |
| Desktop | ×7 | 28px | 1537px |
| Desktop 4K | ×8 | 32px | 2049px |

**Result:** Rem becomes approximately angular-consistent across device tiers. 1rem ≈ same visual angle regardless of device.

### Line Length: 16 Degrees, Not 60 Characters

The traditional "60 character line length" rule is derived, not fundamental.

**The real constraint:** ~16 degrees of visual angle — the range for comfortable reading without head movement.

- 60 characters = approximation assuming typical font size + viewing distance
- 16 degrees = the actual perceptual limit
- 20rem (responsive) ≈ 16°

**Key ratio:** 1rem ≈ 0.8°

**Implication:** If rem is angular-consistent, then line width in rem is also angular-consistent. Set `max-width: 20rem` and the 16° rule follows automatically across devices.

---

## Ergonomic Zoning of Visual Scenes

**Status:** Research frontier — seeking new insights.

Building on responsive rem (≈ angular units), how do we zone layouts ergonomically?

### Open Questions
- What angular zones exist? (foveal ~2°, parafoveal ~5°, near-peripheral ~30°?)
- How do zones map to UI regions? (primary content, nav, periphery)
- Does handedness (thumb reach) intersect with visual zoning on touch devices?
- How does scrolling change zone strategy?
- Is there an optimal "visual hierarchy" expressed in degrees?

### Research Threads
(to be developed)

