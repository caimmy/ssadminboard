Ext.define('Admin.view.talk.TalkModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.talkmodel',

    stores: {
        messages: {
            type: 'messages'
        }
    }
})