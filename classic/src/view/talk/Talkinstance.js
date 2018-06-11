Ext.define('Admin.view.talk.Talkinstance', {
    extend: 'Admin.view.profile.UserProfileBase',
    xtype: 'talkinstance',

    cls: 'userProfile-container',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'Admin.view.talk.Talkshare'
    ],

    layout: 'responsivecolumn',

    items: [
        {
            xtype: 'profilenotifications',
            userCls: 'big-50 small-100 shadow'
        },
        {
            xtype: 'talkshare',
            // Always 100% of container
            userCls: 'big-100 small-100 shadow'
        },
    ]
})