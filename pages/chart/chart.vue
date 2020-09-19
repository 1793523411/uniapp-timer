<template>
	<view style="height: 100vh;background-color: #fff;padding-bottom: 42px;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="false"><block slot="content">timer</block></cu-custom>
		<view class="cu-timeline">
			<!-- <view class="cu-time">昨天</view> -->
			<view class="cu-item cur text-red cuIcon-likefill" v-for="(item,index) in list2" :key="item._id">
							<!-- <view class="cu-time" v-if="list2[index].day!==list2[index-1].day">{{item.year}}-{{item.month}}-{{item.day}}</view> -->
				<view class="content bg-green shadow-blur">
					<text>{{item.time}} - {{item.time2}} ( {{item.year}}-{{item.month}}.{{item.day}} ) </text> <text v-if="item.hour" style="color: cyan;padding-left: 30rpx;"> 共{{item.hour}}分钟</text><br>{{item.value}}
				</view>
				<view v-if="index === list.length-1 " style="height: 42px;width: 10px;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list2:this.list
			}
		},
		props:{
			list:Array
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
