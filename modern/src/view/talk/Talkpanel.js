Ext.define('Admin.view.talk.Talkpanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'talkpanel',

    requires: [
        'Admin.view.talk.Dialogwnd'
    ],
    

    //margin: '20 0 0 20',
    items: [{
        xtype: 'panel',
        title: '我的聊天',
        html: '<h3>Oop~</h3>'
    }, {
        title: '激动的玩家',
        xtype: 'dialogwnd',
    }]
})