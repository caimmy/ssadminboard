Ext.define('Admin.view.talk.Talkpanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'talkpanel',

    requires: [
        'Admin.view.talk.Talkinstance',
    ],

    margin: '20 0 0 20',
    items: [{
        title: '爱较真的玩家',
        xtype: 'talkinstance'
    }, {
        title: '兴奋的玩家',
        xtype: 'panel',
        html: '<h3>Oop~</h3>'
    }, {
        title: '激动的玩家',
        xtype: 'panel',
        html: 'asdfasdfasf'
    }, {
        title: '激动的玩家1',
        xtype: 'panel',
        html: 'asdfasdfasf'
    }, {
        title: '激动的玩家2',
        xtype: 'panel',
        html: 'asdfasdfasf'
    }, {
        title: '激动的玩家3',
        xtype: 'panel',
        html: 'asdfasdfasf'
    }]
})