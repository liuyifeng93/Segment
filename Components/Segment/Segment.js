// Components/Segment/Segment.js
Component({
    /**
     * 组件的属性列表
     */

    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },

    properties: {
        items:{
            type: Array,
            value: []
        },

        defaultIndex: {
            type: Number,
            value: 0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentIndex: 0
    },

    lifetimes: {
        attached: function() {
            var that = this;
            this.setData({
                currentIndex: that.properties.defaultIndex
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        //html 'data-' 语法
        onItemTapEvent: function(event) {
            var index = event.target.dataset.index;
            var that = this;
            that.setData({
                currentIndex: index,
            })
            var detail = {"index": index};
            var options = {};
            that.triggerEvent("segmentChanged", detail, options)
        }
    }
})
