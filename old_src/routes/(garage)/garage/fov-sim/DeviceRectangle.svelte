<script>
	export let deviceWidthMM, deviceHeightMM, deviceDistanceMM, zoomFactor, fill;
	
	function derive_angular_size_in_degrees(phisical_size, viewing_distance) {
		return 57.3 * phisical_size / viewing_distance;
	}
	
	$: angularDeviceWidth = derive_angular_size_in_degrees(deviceWidthMM, deviceDistanceMM);
	$: angularDeviceHeight = derive_angular_size_in_degrees(deviceHeightMM, deviceDistanceMM);
</script>

<rect 
	stroke="none" 
	stroke-width="0" 
	transform="translate(50,30)" 
	x="-{angularDeviceWidth/2 * zoomFactor}" 
	y="-{angularDeviceHeight/2 * zoomFactor}" 
	width="{angularDeviceWidth * zoomFactor}" 
	height="{angularDeviceHeight * zoomFactor}" 
	fill={fill} opacity="0.25" >
</rect>
