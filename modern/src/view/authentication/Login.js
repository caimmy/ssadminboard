Ext.define('Admin.view.authentication.Login', {
    extend: 'Admin.view.authentication.AuthBase',
    xtype: 'login',

    requires: [
        'Ext.field.Checkbox',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.layout.HBox',
        'Admin.view.authentication.LoginController'
    ],

    controller: 'login',

    title: "登陆烽火",

    items: [{
        xtype: 'panel',

        items: [{
            padding: '20 0 0 20',
            html: '请签入账号'
        },{
            xtype: 'container',
            padding: 20,
            defaults: {
                margin:'0 0 10 0'
            },
            layout: 'vbox',
            items: [{
                xtype: 'textfield',
                placeHolder: '手机号码',
                allowBlank: false,
                ui: 'light'
            },{
                xtype: 'passwordfield',
                placeHolder: '密码',
                allowBlank: false,
                ui: 'light'
            },{
                layout: 'hbox',
                items: [{
                    xtype: 'checkboxfield'
                },{
                    html: 'Remember Me',
                    style: 'marginRight:20px'
                },{
                    html: '<a href="#passwordreset">Forgot Password</a>'
                }]
            },{
                xtype: 'button',
                text: '登 录',
                iconAlign: 'right',
                iconCls: 'x-fa fa-angle-right',
                ui: 'confirm',
                formBind: true,
                listeners: {
                    tap: 'onLoginClick'
                }
            },{
                xtype: 'button',
                text: '申请新账号',
                ui: 'gray-button',
                iconAlign: 'right',
                iconCls: 'x-fa fa-user-plus',
                handler: function(){
                    window.location.href= "#register";
                }
            }]
        }]
    }]
});
