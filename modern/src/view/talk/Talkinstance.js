Ext.define('Admin.view.talk.Talkinstance', {
    extend: 'Admin.view.profile.UserProfileBase',
    xtype: 'talkinstance',

    cls: 'userProfile-container',

    requires: [
        'Admin.view.talk.Talkshare'
    ],

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