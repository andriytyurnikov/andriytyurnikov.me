<section class="min-h-dvh flex flex-col items-center justify-center relative z-10 bg-transparent">
	<div class="scene-wrapper">
		<div class="scene">
			<div class="device desktop">Desktop</div>
			<div class="device laptop">Laptop</div>
			<div class="device tablet">Tablet</div>
			<div class="device phone">Phone</div>
		</div>
	</div>
</section>

<style>
	.scene-wrapper {
		width: 20rem;
	}

	.scene {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		transform-style: preserve-3d;
		animation: scene-keyframes 8s infinite ease-in-out;
	}

	.device {
		position: absolute;
		border-radius: 0.15rem;
		transform-style: preserve-3d;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.5rem;
		color: rgba(255, 255, 255, 0.7);
	}

	/* Desktop (base layer, full size) */
	.desktop {
		width: 100%;
		height: 100%;
		background: oklch(42% 0.16 290); /* deep purple */
	}

	/* Laptop - 291/521 × 189/293 */
	.laptop {
		width: 55.85%;
		height: 64.5%;
		background: oklch(52% 0.2 320); /* magenta */
		bottom: 0;
		left: 0;
		animation: laptop-keyframes 8s infinite ease-in-out;
	}

	/* Tablet - 156/521 × 208/293 */
	.tablet {
		width: 29.94%;
		height: 70.99%;
		background: oklch(65% 0.18 25); /* coral */
		bottom: 0;
		left: 56.72%;
		animation: tablet-keyframes 8s infinite ease-in-out;
	}

	/* Phone - 65/521 × 140/293 */
	.phone {
		width: 12.48%;
		height: 47.78%;
		background: oklch(78% 0.18 70); /* orange/gold */
		bottom: 0;
		left: 87.52%;
		animation: phone-keyframes 8s infinite ease-in-out;
	}

	/* Scene rotation */
	/* Perspective: 1270/521 = 2.44× base, 635/521 = 1.22× base */
	@keyframes scene-keyframes {
		20% {
			transform: perspective(48.75rem);
		}
		40%,
		60% {
			transform-origin: right;
			transform: perspective(48.75rem) rotateY(-30deg) rotateZ(5deg);
		}
		80%,
		100% {
			transform-origin: center;
			transform: perspective(24.38rem);
		}
	}

	/* Laptop: float then center */
	/* Z: 125/521 = 24% of 20rem = 4.8rem */
	/* X: center 27.9% → 50% = +22.1% of 20rem = 4.42rem */
	/* Y: center vertically = -2rem */
	@keyframes laptop-keyframes {
		0%,
		15% {
			transform: translateZ(0);
		}
		30%,
		50% {
			transform: translateZ(4.8rem);
		}
		70%,
		100% {
			transform: translateZ(4.8rem) translateX(4.42rem) translateY(-2rem);
		}
	}

	/* Tablet: float then center */
	/* Z: 255/521 = 49% of 20rem = 9.8rem */
	/* X: center 71.7% → 50% = -21.7% of 20rem = -4.34rem */
	/* Y: center vertically = -1.6rem */
	@keyframes tablet-keyframes {
		0%,
		15% {
			transform: translateZ(0);
		}
		30%,
		50% {
			transform: translateZ(9.8rem);
		}
		70%,
		100% {
			transform: translateZ(9.8rem) translateX(-4.34rem) translateY(-1.6rem);
		}
	}

	/* Phone: float then center */
	/* Z: 385/521 = 74% of 20rem = 14.8rem */
	/* X: center 93.8% → 50% = -43.8% of 20rem = -8.76rem */
	/* Y: center vertically = -2.9rem */
	@keyframes phone-keyframes {
		0%,
		15% {
			transform: translateZ(0);
		}
		30%,
		50% {
			transform: translateZ(14.8rem);
		}
		70%,
		100% {
			transform: translateZ(14.8rem) translateX(-8.76rem) translateY(-2.9rem);
		}
	}
</style>
