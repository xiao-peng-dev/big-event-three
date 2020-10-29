$(function() {
    getInfo()

    // 退出
    $('#btnlogout').on('click', function() {
        layer.confirm('确定要退出吗?', { icon: 3, title: '提示' }, function(index) {
            //do something
            localStorage.removeItem('token')
            location.href = '/login.html'
            layer.close(index);
        });
    })
})

function getInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',

        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg(res.message)
            }
            renderInfo(res.data)
        }
    })
}

function renderInfo(user) {
    var name = user.nickname || user.username
    $('.welcome').html('欢迎' + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').show().attr('src', user.user_pic)
        $('.text-avatar').hide()
    } else {
        var first = name[0].toUpperCase()
        $('.layui-nav-img').hide()
        $('.text-avatar').show().html(first)
    }



}