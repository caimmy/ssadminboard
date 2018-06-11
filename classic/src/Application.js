Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    stores: [
        'NavigationTree'
    ],

    //defaultToken : 'index',

    // The name of the initial view to create. This class will gain a "viewport" plugin
    // if it does not extend Ext.Viewport.
    //
    //mainView: 'Admin.view.main.Main',
    launch: function() {
        this.setMainView('Admin.view.authentication.Login');
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
