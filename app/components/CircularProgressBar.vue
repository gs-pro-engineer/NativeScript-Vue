<template>
	<GridLayout :height="height" :width="height">
		<RadRadialGauge>
			<RadialScale v-tkRadialGaugeScales startAngle="-90" sweepAngle="360">
				<ScaleStyle v-tkRadialScaleStyle ticksVisible="false" labelsVisible="false" lineThickness="0">
				</ScaleStyle>

				<RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100">
					<BarIndicatorStyle v-tkRadialBarIndicatorStyle :fillColor="fillBackgroundColor" cap="Round" barWidth="0.1">
					</BarIndicatorStyle>
				</RadialBarIndicator>

				<RadialBarIndicator v-tkRadialScaleIndicators minimum="0" :maximum="value" isAnimated="true">
					<BarIndicatorStyle v-tkRadialBarIndicatorStyle :fillColor="fillColor" cap="Round" barWidth="0.1">
					</BarIndicatorStyle>
				</RadialBarIndicator>
			</RadialScale>
		</RadRadialGauge>
		<Label :text="text" :color="textColor" :fontSize="textSize" class="m-x-auto m-y-auto" :marginTop="offset"></Label>
	</GridLayout>
</template>

<script>
export default {
    props: {
        size: { default: 100 },
        progress: { default: 0 },
        offset: { default: 0 },
        textColor: { default: "#bfbfc4" },
        fillColor: { default: "#FDA458" },
        fillBackgroundColor: { default: "#efeff4" }
    },
    computed: {
        height() {
            return Math.min(this.size, 250);
        },
        value() {
            return Math.min(this.progress, 100);
        },
        text() {
            return `${this.value.toFixed()}`;
        },
        textSize() {
            return;
            this.height / 3.5;
        }
    }
};
</script>

<style>
</style>
