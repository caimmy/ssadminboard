Ext.define('Admin.view.authentication.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onInitialize: function(self, eOpts) {
        var refs = this.getReferences();
    },

    onLoginClick: function() {
        var refs = this.getReferences();
        var login_phone = refs.ref_phone.getValue().trim();
        var login_pwd = refs.ref_passwd.getValue().trim();
        if (login_phone.length == 0 || login_pwd.length == 0) {
            Ext.Msg.alert("错误", "账号或密码不能为空！");
        } else {
            var me = this;
            Ext.data.JsonP.request({
                url: GetApiAddress('admin/login'),
                params: {
                    'phone': login_phone,
                    'pass': login_pwd
                },
                callbackKey: 'callback',
                success: function(result) {
                    if (result.success) {
                        Ext.apply(Admin.getApplication(), {userAccount: login_phone});
                        var bone = Ext.getCmp("bone_container");
                        bone.removeAll(true, true);
                        bone.add(Ext.create('Admin.view.main.Main'));
                        me.redirectTo("dashboard");
                    } else {
                        Ext.Msg.alert("failure", result.msg);
                    }
                },
                failure: function(result) {
                    Ext.Msg.alert("错误", result);
                }
            })
        }
    }
})