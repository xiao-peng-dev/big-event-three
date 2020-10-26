$(function() {
    $('#link-reg').on('click', function() {
        $('.login').hide()
        $('.reg').show()
    })
    $('#link-login').on('click', function() {
            $('.login').show()
            $('.reg').hide()
        })
        // 表单校验
    var form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(value) {
            var pwd = $('.reg [name=password]').val()
            if (value !== pwd) {
                return '两次输入的密码不一致,请重新输入'
            }
        }
    })

    // 提交ajax
    $('#from-reg').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: 'http://ajax.frontend.itheima.net/api/reguser',
            data: {
                username: $('.reg [name= username]').val(),
                password: $('.reg [name= password]').val()
            },
            success: function(res) {
                if (res.status !== 0)
                    return alert(res.message)
                alert(res.message)
            }

        })
    })

})