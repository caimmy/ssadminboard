Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin : function() {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function() {
        var me = this;
        var refs = this.getReferences();
        var userid = refs.userid.getValue();
        var password = refs.password.getValue();

        Ext.data.JsonP.request({
            url: GetApiAddress('admin/login'),
            params: {
                'phone': userid,
                'pass': password
            },
            callbackKey: 'callback',
            success: function(result) {
                if (result.success) {
                    me.getView().destroy();
                    Admin.getApplication().setMainView("Admin.view.main.Main");
                    me.redirectTo('dashboard', true);
                } else {
                    Ext.Msg.alert("failure", result.msg);
                }
            },
            failure: function(result) {
                Ext.Msg.alert("错误", result);
            }
        })
        
    },

    onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount:  function() {
        this.redirectTo('register', true);
    },

    onSignupClick:  function() {
        this.redirectTo('dashboard', true);
    },

    onResetClick:  function() {
        this.redirectTo('dashboard', true);
    }
});