function inputShowPwd(ele){
    var T = this;
    this.container = $('.'+ele);  //input包装容器
    this.inputEle = this.container.find('input[type="password"]');   //input输入框
    this.deleteEle = this.inputEle.next(); //清空按钮

    //初始化样式及效果
    this.init();
}

inputShowPwd.prototype.init = function(){
    var T = this;

    (function(){
        //处理ie9不支持栅格键点击触发onpropertychange事件
        if(navigator.appName == 'Microsoft Internet Explorer'){
            if(navigator.appVersion.match(/9./i) == '9.'){
                T.inputEle.keyup(function(event){
                    if(event.keyCode == 8){
                        ($(this).val() == '') ? $(this).next().fadeOut(100) : $(this).next().fadeIn(100);
                        $(this).prev().val($(this).val());
                    }
                });
            }
        }

        T.inputEle.on('focus',function(){
            ;($(this).val() == '') ? $(this).next().fadeOut(100) : $(this).next().fadeIn(100); 
            $(this).prev().val($(this).val());

        }).on('input propertychange',function(){
            ;($(this).val() == '') ? $(this).next().fadeOut(100) : $(this).next().fadeIn(100);
            $(this).prev().val($(this).val());
        });

        T.deleteEle.on('mousedown',function(){
            $(this).prev().hide();
            $(this).parent().children('input[type="text"]').show();
        }).on('mouseup mouseout',function(){
            $(this).parent().children('input[type="text"]').hide();
            $(this).prev().show();
        });


    })();

    
}
