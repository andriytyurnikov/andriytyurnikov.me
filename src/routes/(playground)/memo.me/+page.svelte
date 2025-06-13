<script>
	import '../../../styles/default.css';
	import { base } from '$app/paths';
</script>

<h1 class="font-semibold text-[3rem] text-balance">
	# memo.me<span class="animate-[ping_1s_ease-in-out_infinite]">&VerticalLine;</span>
</h1>
<blockquote class="my-4">&gt; The living space of ideas.</blockquote>
<p class="leading-8 mb-6">
	Colaborative space for text. Lorem ipsum <i>*dolor*</i> sit amet, <b>**consectetur**</b>
	adipiscing elit. Curabitur eget sem non sem imperdiet pellentesque eu quis massa. Vestibulum auctor
	quam sit amet nulla efficitur, ac maximus urna consequat.
	<br />
	123456710 123456720 123456730 123456740 123456750 123456760 123456770 123456780 123456790
	<br />
	WTF?
	<!-- outline-none is critical for text input -->
	<input
		type="text"
		class="border
				px-2

				caret-cold-gray-100

				outline-none

				border-cold-gray-200
				focus:border-cold-gray-200

				focus:ring-1
				focus:ring-cold-gray-100
				focus:ring-offset-2
				focus:ring-offset-cold-gray-800

				bg-cold-gray-800
				focus:bg-cold-gray-600
				"
	/>
	<input class="bg-cold-gray-800" type="email" />
	<input class="bg-cold-gray-800" type="password" />
	<input class="h-7" type="checkbox" />
	<input class="h-7" type="radio" />
	<select class="h-7 border border-cold-gray-200 bg-cold-gray-800">
		<option>Option</option>
		<option>Option</option>
	</select>
	<input class="h-7 bg-cold-gray-800 shadow-md border" type="number" value="42" />
	<input
		class="h-7 bg-cold-gray-600 shadow-md shadow-gray-900 border"
		type="button"
		value="Button input"
	/>
	<input
		class="h-7 bg-cold-gray-600 shadow-md shadow-gray-900 border"
		type="submit"
		value="Submit input"
	/>
	<button class="h-7 bg-cold-gray-600 shadow-md shadow-gray-900 border">Button</button>
	<!-- Phasellus <i>*vehicula*</i> hendrerit lorem non interdum.
			Cras id gravida metus, non porta dui. Class aptent taciti sociosqu ad litora torquent per conubia
			nostra, per inceptos himenaeos. Morbi mollis dictum egestas. -->
</p>
