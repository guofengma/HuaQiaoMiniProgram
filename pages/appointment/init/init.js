// pages/appointment/init/init.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		departmentName: '',
		doctorName: '',
		schedule: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.info(options);

		this.setData({
			departmentName: options.departmentName,
			doctorName: options.doctorName,
			schedule: JSON.parse(options.schedule)
		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	toPatientList: function (e) {
		console.info(e);

		wx.navigateTo({
			url: '/pages/list/patient/patient?userid=' + e.currentTarget.dataset.userid
		})
	},

	toConfirmAppointment: function (e) {
		console.info(e);

		wx.navigateTo({
			url: '/pages/appointment/confirm/confirm'
		})
	}
})