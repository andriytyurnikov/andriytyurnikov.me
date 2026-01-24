<section class="min-h-dvh flex flex-col items-center justify-center relative z-[1] bg-transparent">
	<h2 class="text-2xl tablet:text-3xl font-light mb-8 text-center">
		Responsivenes is about vision, not pixels
	</h2>
	<div class="scene-wrapper overflow-x-clip will-change-auto">
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
		width: 24rem;
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
	/* Perspective: 2.44× base = 58.5rem, 1.22× base = 29.28rem */
	@keyframes scene-keyframes {
		0% {
			transform: perspective(58.5rem);
		}
		40%,
		60% {
			transform-origin: right;
			transform: perspective(58.5rem) rotateY(-30deg) rotateZ(5deg);
		}
		80%,
		100% {
			transform-origin: center;
			transform: perspective(29.28rem);
		}
	}

	/* Laptop: Z = 5.76rem, X = 5.30rem, Y = -2.4rem */
	@keyframes laptop-keyframes {
		0%,
		50% {
			/* Phase 1-2: Flat on desktop during rotation */
			transform: translateZ(0);
		}
		65% {
			/* Phase 3: Float away (perpendicular only) */
			transform: translateZ(5.76rem);
		}
		85%,
		100% {
			/* Phase 4: Rotation reversed + planes realigned */
			transform: translateZ(5.76rem) translateX(5.3rem) translateY(-2.4rem);
		}
	}

	/* Tablet: Z = 11.76rem, X = -5.21rem, Y = -1.92rem */
	@keyframes tablet-keyframes {
		0%,
		50% {
			/* Phase 1-2: Flat on desktop during rotation */
			transform: translateZ(0);
		}
		65% {
			/* Phase 3: Float away (perpendicular only) */
			transform: translateZ(11.76rem);
		}
		85%,
		100% {
			/* Phase 4: Rotation reversed + planes realigned */
			transform: translateZ(11.76rem) translateX(-5.21rem) translateY(-1.92rem);
		}
	}

	/* Phone: Z = 17.76rem, X = -10.51rem, Y = -3.48rem */
	@keyframes phone-keyframes {
		0%,
		50% {
			/* Phase 1-2: Flat on desktop during rotation */
			transform: translateZ(0);
		}
		65% {
			/* Phase 3: Float away (perpendicular only) */
			transform: translateZ(17.76rem);
		}
		85%,
		100% {
			/* Phase 4: Rotation reversed + planes realigned */
			transform: translateZ(17.76rem) translateX(-10.51rem) translateY(-3.48rem);
		}
	}
</style>
