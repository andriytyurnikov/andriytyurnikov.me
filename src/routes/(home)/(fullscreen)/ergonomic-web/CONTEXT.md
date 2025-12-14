# Ergonomic Web

## Rationale

Little affordances may add up (or even multiply). The perceived and real complexity of addressing ergonomic challenges can be justified economically — small friction reductions compound across interactions and users.

---

## Ergonomic Layers

| Layer | Domain | Status |
|-------|--------|--------|
| **Perceptual** | Vision, FOV, visual angle, acuity | Developing |
| **Motor** | Thumb reach, gestures, handedness, Fitts's Law | Developing |
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

### Line Length: ~17 Degrees, Not 60 Characters

The traditional "60 character line length" rule is derived, not fundamental.

**The real constraint:** ~16-17 degrees of visual angle — the range for comfortable reading without head movement.

- 60 characters = approximation assuming typical font size + viewing distance
- ~17 degrees = the actual perceptual limit
- 40rem (responsive) ≈ 16.7°

**Key ratio:** 1° ≈ 2.4rem

**Reference dimensions:**
| Dimension | Responsive Rem | Degrees |
|-----------|----------------|---------|
| Portrait mobile width | ~24rem | ~10° |
| Body text max (line length) | 40rem | ~16.7° |

**Implication:** If rem is angular-consistent, then line width in rem is also angular-consistent. Set `max-width: 40rem` and the ~17° rule follows automatically across devices.

---

## Motor Ergonomics

### Handedness & Thumb Reach

**Portrait mode:** "Easy reach" = bottom of screen. Navbar belongs at bottom.

**Landscape mode:** "Easy reach" shifts to **dominant hand side**.
- Right-handed: right edge = easy reach
- Left-handed: left edge = easy reach

The "bottom" is not a fixed edge — it's **relative to grip position**.

### Detecting Handedness

CSS `orientation: landscape` doesn't tell us rotation direction. Need JS extension.

**Screen Orientation API:**
- `landscape-primary` → rotated one direction
- `landscape-secondary` → rotated opposite direction

Rotation direction hints at dominant hand (needs verification of mapping).

**Implementation:**
```
Screen Orientation API (JS)
    ↓
Inject to root element (class, data-attr, CSS var, or combined)
    ↓
CSS/Tailwind responds to injected state
```

**Injection strategies** (see Tailwind dark mode pattern):

| Strategy | Example | Enables |
|----------|---------|---------|
| Class | `<html class="right-handed">` | Tailwind variants: `right-handed:ml-auto` |
| Data attr | `<html data-hand="right">` | CSS selectors: `[data-hand="right"] .navbar` |
| CSS var | `--dominant-hand: right` | Calculations, runtime JS access |
| Combined | All three | Maximum flexibility |

### Pragmatic Approach

**Expose orientation to CSS, defer handedness assumptions.**

Just inject the raw orientation type:
- `portrait-primary`
- `portrait-secondary`
- `landscape-primary`
- `landscape-secondary`

Let layout author decide what each means for their UI. Don't bake in handedness inference yet.

**Default:** Right-handed fallback (~90% of population) when needed, but keep it optional/overridable.

---

## Form Factor Realities

### Two Worlds

| Group | Devices | Primary Constraint | Interaction |
|-------|---------|-------------------|-------------|
| **Touch/Handheld** | Phone, Tablet | Thumb reach (motor) | Touch, held in hand |
| **Desktop-class** | Laptop, Desktop, 4K | Viewing distance (perceptual) | Mouse/keyboard, stationary |

Different realities → different conventions:
- **Touch:** Nav at bottom/side, thumb-friendly tap targets, motor ergonomics dominate
- **Desktop:** Nav at top acceptable, denser UI possible, perceptual ergonomics dominate

### Limited Layouts, Maximum Affordance

Instead of infinite responsive complexity, a **limited polished set of layouts** can cover 80-90% of use cases with better ergonomic affordance.

Pareto principle for layouts — fewer patterns, better executed.

### Preliminary Layout Patterns

See `/garage/mobile-first-layouts` and `/zoned-layouts` for working examples.

**Structural layouts:**
| Pattern | Structure | Use Case |
|---------|-----------|----------|
| **Cover** | Header / Main / Footer | Landing pages, hero (footer = easy reach) |
| **Portrait Feed** | Nav / Main / Aside | Content feeds, media apps |
| **Responsive NavBar** | Orientation-aware nav | App shells |

**Content zones:**
| Pattern | Description |
|---------|-------------|
| Solo Minor | Single small zone |
| Solo | Single medium zone |
| Solo Wide | Single wide zone |
| Duo | Two equal zones |
| Duo Minor | Two small zones |
| Major + Minor | Asymmetric pair |
| Trio | Three equal zones |

**Orientation behavior:** Zones stack in portrait, go side-by-side in landscape.

**Key dimension:** `max-width: 40rem` (responsive) as practical maximum for body text blocks.

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

