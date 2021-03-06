/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    defaultToken : 'index',

    mainView: 'Admin.view.main.Bone',

    profiles: [
        'Phone',
        'Tablet'
    ],

    stores: [
        'NavigationTree'
    ],

    server_host: 'http://10.128.27.90:8888/',

    GetApiAddress: function(api) {
        return this.server_host + api;
    }
});
