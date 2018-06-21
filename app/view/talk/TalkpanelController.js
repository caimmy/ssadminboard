Ext.define('Admin.view.talk.TalkpanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.talkpanelcontroller',

    initialize: function(self, eOpts) {
        var userAccount = Admin.getApplication().userAccount;
        // 注册消息实例
        var mimc = new MIMCUser(userAccount);

        mimc.registerServerAckHandler(function (packetId, sequence, timeStamp, errMsg) {
            console.log("ack");
            console.log(packetId);
        });

        mimc.registerP2PMsgHandler(function (P2PMsg) {
            var _id = P2PMsg.getPacketId();
            var _from = P2PMsg.getFromAccount();
            var _content = P2PMsg.getPayload();
            var _side = 1;
            var _time = '';//timestamp2str(P2PMsg.getTimeStamp());
            var _find_item_id = "act-" + _from;
            if (userAccount != _from) {
                var sub_component = self.getComponent(_find_item_id);
                if (sub_component) {
                    sub_component.down('dialoghistory').getStore().add({
                        _id: _id,
                        sender: _from,
                        side: _side,
                        content: _content,
                        catalog: '',
                        time: _time
                    });
                } else {
                    console.log('not found');
                    console.log(_find_item_id);
                    console.log(_content);
                    
                    self.add({
                        title: _from,
                        itemId: _find_item_id,
                        xtype: 'dialogwnd',
                    });
                    var new_dialog = self.getComponent(_find_item_id);
                    var history_panel = new_dialog.down('dialoghistory');
                    history_panel.setStore(Ext.create('Admin.store.talk.Messages', {}));
                    history_panel.getStore().add({
                        _id: _id,
                        sender: _from,
                        side: _side,
                        content: _content,
                        catalog: '',
                        time: _time
                    })
                }
            }
        });

        mimc.registerDisconnHandler(function() {
            console.log('disconnect');
        });

        Ext.apply(Admin.getApplication(), {mimc: mimc});
        Ext.data.JsonP.request({
            url: GetApiAddress('im/fetchmimctoken'),
            params: {
                account: userAccount
            },
            callbackKey: 'callback',
            success: function(result) {
                console.log(result);
                mimc.registerFetchToken(function() {
                    return result;
                });

                mimc.registerStatusChange(function(bindResult, errType, errReason, errDesc) {
                    console.log("status Change");
                    console.log(bindResult);
                });

                mimc.login();
            },
            failure: function(error) {
                console.log("failure");
                console.log(error);
            }
        })
    },

    fetchMIMCToken: function() {
        return {
            "code": 200,
            "message": "success",
            "data": {
                "appId": '2882303761517785685',
                "appPackage": 'com.xoyo.kefu',
                "appAccount": $appAccount,
                "miChid": $chid,
                "miUserId": $uuid,
                "miUserSecurityKey": $appSecret,
                "token": $token
            }
          };
    },
})