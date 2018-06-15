Ext.define('Admin.view.talk.Talkshare', {
    extend: 'Ext.panel.Panel',
    xtype: 'talkshare',

    requires: [
        'Ext.Button',
        'Ext.field.Text',
        'Ext.Toolbar'
    ],

    padding: 10,
    layout: 'fit',

    cls: 'share-panel',

    items: [
        {
            xtype: 'textareafield',
            placeHolder: "输入您的解答?"
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            defaults : {
                margin:'0 10 5 0'
            },

            items: [
                {
                    iconCls: 'x-fa fa-camera',
                    ui: 'header'
                },
                {
                    iconCls: 'x-fa fa-file',
                    ui: 'header'
                },
                '->',
                {
                    text: '回复',
                    ui: 'soft-blue'
                }
            ]
        }
    ]
})