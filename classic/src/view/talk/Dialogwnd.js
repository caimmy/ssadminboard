Ext.define('Admin.view.talk.Dialogwnd', {
    extend: 'Ext.Container',
    xtype: 'dialogwnd',

    scrollable: 'y',

    viewModel: {
        type: 'talkmodel'
    },

    controller: 'dialogwndcontroller',

    items: [{
        xtype: 'dialoghistory',
        reference: 'ref_dialoghistory',
        bind: {
            store: '{messages}'
        }
    }, {
        xtype: 'talkshare',
    }]
})