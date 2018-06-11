Ext.define('Admin.view.authentication.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
        var bone = Ext.getCmp("bone_container");
        bone.removeAll(true, true);
        bone.add(Ext.create('Admin.view.main.Main'));
        this.redirectTo("dashboard");
    }
})