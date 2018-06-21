Ext.define('Admin.view.talk.DialogwndController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dialogwndcontroller',

    sendMessage: function(recver, content) {
        var sender_from = Admin.getApplication().userAccount;
        console.log("send message");
        console.log("recver: " + recver + " \ncontent: " + content);
        var refs = this.getReferences();
        Ext.data.JsonP.request({
            url: Admin.getApplication().GetApiAddress("im/p2p"),
            callbackKey: "callback",
            params: {
                "from": sender_from,
                "to": recver,
                "msg": content
            },
            success: function(response) {
                refs.ref_dialoghistory.getStore().add({
                    _id: response.data,
                    sender: sender_from,
                    side: '0',
                    content: content,
                    catalog: '',
                    time: ''
                })
            },
            failure: function(reason) {
                Ext.Msg.alert("error", reason);
            }
        })
    }, 

    onInitialize: function(self, eOpts) {
        console.log("dialogwnd on initialized");
    }
})