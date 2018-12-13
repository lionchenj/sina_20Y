window.onload = function () {
    var vm = new Vue({
        el: '#app',
        data: {
            error: null,
            input: "",
            domains: [],
        },
        created: function () {
            var that = this;
            chrome.storage.sync.get('domains', function(result){
                if (result['domains']){
                    that.domains = result['domains']
                }
            });
        },
        methods:{
            save:function (event) {
                event.preventDefault()
                // 判断是否是一个域名：
                if(this.input.match(/\w+\.\w+/) && this.domains.indexOf(this.input) == -1){
                    this.domains.splice(0,0,this.input)
                    var saveobj = {
                        domains : this.domains
                    }
                    chrome.storage.sync.set(saveobj,function(){});
                    chrome.extension.getBackgroundPage().start();
                }else{
                    if (this.domains.indexOf(this.input) != -1){
                        this.error = "添加过了"
                    }else{
                        this.error = "域名错误，请输入正确的域名"
                    }

                    var that = this;
                    setTimeout(function () {
                        that.error = null
                    },1500)
                }
            },
            deleteItem:function (index) {
                this.domains.splice(index,1)
                var saveobj = {
                    domains : this.domains
                }
                chrome.storage.sync.set(saveobj,function(){});
                chrome.extension.getBackgroundPage().start();
            }
        }
    })
}
