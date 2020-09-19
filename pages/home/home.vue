<template>
	<view style="height: 100vh;background-color: #fff;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<block slot="content">timer</block>
		</cu-custom>
		<view class="cu-form-group">
			<view class="title">时间选择</view>
			<picker mode="time" :value="time" start="00:00" end="23:59" @change="TimeChange">
				<view class="picker">
					{{time}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">时间选择</view>
			<picker mode="time" :value="time2" start="00:00" end="23:59" @change="TimeChange2">
				<view class="picker">
					{{time2}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title">事件选择</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'还未选择'}}
				</view>
			</picker>
		</view>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-grey lg" @click="submit">确定</button>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="text-orange "></text> 添加选择
			</view>
			<view class="action">
				<button class="cu-btn bg-cyan shadow" @tap="showModal" data-target="bottomModal">+</button>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green" @click="addselect">确定</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view>
				<view class="padding-xl">
					<view class="cu-form-group">
						<textarea maxlength="10" @input="textareaAInput" :value="value" ></textarea>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: '00:00',
				time2: '00:00',
				value: '',
				index: -1,
				picker: this.select,
				modalName: null,
			}
		},
		props: {
			select: Array
		},
		methods: {
			TimeChange(e) {
				this.time = e.detail.value
			},
			TimeChange2(e) {
				this.time2 = e.detail.value
			},
			textareaAInput: function(event) {
				// this.inputValue = event.target.value
				this.value = event.target.value
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			addselect(){
				let tmp = this.select
				if(tmp.includes(this.value)) return
				tmp.push(this.value)
				uniCloud.callFunction({
					name:'addselect',
					data:{
						select:tmp
					}
				})
				this.modalName = null
			},
			getHour(s1, s2) {
			   console.log(s1)
			   console.log(s2)
			   let f = s1.split(':')
			   let e = s2.split(':')
			   return (+e[0]-(+f[0]))*60+(+e[1])-+f[1]
			},
			submit() {
				if(this.index === -1) return 
				let hour = this.getHour(this.time,this.time2)
				console.log(hour)
				let myDate = new Date();
				let year = myDate.getFullYear();
				let month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
				let day = myDate.getDate(); //获取当前日(1-31)
				console.log(this.time)
				uniCloud.callFunction({
						name: 'addlist',
						data: {
							year: year,
							month: month,
							day: day,
							time: this.time,
							time2: this.time2,
							value: this.picker[this.index],
							hour:hour
						}
					})
					.then(res => {
						console.log(res)
						this.time = '00:00'
						this.time2 = '00:00'
						this.value = ''
						this.index = -1
					});
			}
		},
	}
</script>

<style>

</style>
