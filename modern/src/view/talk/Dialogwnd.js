Ext.define('Admin.view.talk.Dialogwnd', {
    extend: 'Ext.Container',
    xtype: 'dialogwnd',

    scrollable: 'y',

    viewModel: {
        type: 'talkmodel'
    },

    items: [{
        xtype: 'dialoghistory',
        bind: {
            store: '{messages}'
        }
    }, {
        xtype: 'talkshare',
    }]
})