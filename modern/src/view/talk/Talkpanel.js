Ext.define('Admin.view.talk.Talkpanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'talkpanel',

    requires: [
        'Admin.view.talk.Dialogwnd'
    ],

    controller: 'talkpanelcontroller',

    listeners: {
        initialize: 'initialize',
    },
    
    //margin: '20 0 0 20',
    items: []
})