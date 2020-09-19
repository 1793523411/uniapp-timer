<template>
	<view style="height: 100vh;background-color: #fff;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<block slot="content">timer</block>
		</cu-custom>
		<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
		<button type="default" @click="a">aaa</button>
	</view>
</template>

<script>
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	var _self;
	var canvaPie = null;
	export default {
		data() {
			return {
				list:this.anylize,
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
			}
		},
		props:{
			anylize:Object
		},
		mounted() {
			console.log('111')
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			a(){
				console.log(this.list)
			},
			toJSON() {
			
			},
			getServerData(){
				let tmp = []
				for(let key in this.list){
					let obj = {
						name:key,
						data:this.list[key]
					}
					tmp.push(obj)
				}
				tmp.push({
					name:"睡觉",
					data:480
				})
				let Pie = {
					series: []
				};
				Pie.series = tmp;
				_self.showPie("canvasPie", Pie);
			},
			showPie(canvasId, chartData) {
				canvaPie = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					legend: {
						show: true
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
			touchPie(e) {
				canvaPie.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
			},
		}
	}
</script>

<style>
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
