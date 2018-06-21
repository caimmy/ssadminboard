Ext.define('Admin.view.talk.TalkshareController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.talksharecontroller',

    onSharebtn: function() {
        var refs = this.getReferences();
        var dialogwnd = this.getView().up('dialogwnd');
        var response = refs.response;
        var reg_remote_act = /act-(.*)/;
        var act = reg_remote_act.exec(dialogwnd.getItemId());
        console.log(act);
        if (act != null) {
            dialogwnd.getController().sendMessage(act[1], response.getValue());
        } else {
            Ext.Msg.alert('error', 'remote account not found!');
        }
        
    }
})