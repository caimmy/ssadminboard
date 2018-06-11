Ext.define('Admin.view.talk.Talkshare', {
    extend: 'Ext.panel.Panel',
    xtype: 'talkshare',

    bodyPadding : 10,
    layout: 'fit',

    cls: 'share-panel',
    
    items: [
        {
            xtype: 'textareafield',
            emptyText: "请输入您的回答"
        }
    ],
    
    bbar: {
        defaults : {
                margin:'0 10 5 0'
        },
        items:[
            {
                ui: 'header',
                iconCls: 'x-fa fa-image'
            },
            {
                ui: 'header',
                iconCls: 'x-fa fa-file'
            },
            '->',
            {
                text: '回答',
                ui: 'soft-blue'
            }
        ]
    }
})