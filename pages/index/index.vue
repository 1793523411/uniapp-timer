<template>
	<view>
		<home v-if="PageCur=='home'" :select="select"></home>
		<chart v-if="PageCur=='chart'" :list="list"></chart>
		<anylize v-if="PageCur=='anylize'" :anylize="anylize"></anylize>
		<!-- <view  style="height: 42px;width: 10px;"></view> -->
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/add-circle' + [PageCur=='home'?'':'-no'] + '.png'"></image>
				</view>
				<!-- <view :class="PageCur=='home'?'text-green':'text-gray'">元素</view> -->
			</view>
			<view class="action" @click="update" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/refresh' + [PageCur=='home'?'':''] + '.png'"></image>
				</view>
				<!-- <view :class="PageCur=='home'?'text-green':'text-gray'">元素</view> -->
			</view>
			<view class="action" @click="NavChange" data-cur="chart">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/menu' + [PageCur == 'chart'?'':'-no'] + '.png'"></image>
				</view>
				<!-- <view :class="PageCur=='chart'?'text-green':'text-gray'">组件</view> -->
			</view>
			<view class="action" @click="NavChange" data-cur="anylize">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/layers' + [PageCur == 'anylize'?'':'-no'] + '.png'"></image>
				</view>
				<!-- <view :class="PageCur=='anylize'?'text-green':'text-gray'">组件</view> -->
			</view>
		</view>
		<!-- <view  style="height: 42px;width: 10px;"></view> -->
	</view>
</template>
<script>
	export default {
		data() {
			return {
				PageCur: 'chart',
				list: [],
				select: [],
				anylize:{},
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			update: function() {
				console.log('aaa')
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}
		},
		onLoad() {
			uniCloud.callFunction({
					name: 'getlist',
				})
				.then(res => {
					console.log(res)
					this.list = res.result.data
				});
			uniCloud.callFunction({
					name: 'getselect',
				})
				.then(res => {
					console.log(res.result.data[0].select)
					this.select = res.result.data[0].select
				});
			uniCloud.callFunction({
					name: 'getoneday',
				})
				.then(res => {
					console.log(res)
					this.anylize = res.result
				});
				
		}
	}
</script>

<style>

</style>
