Ext.define('Admin.view.talk.TalkshareController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.talksharecontroller',

    onSharebtn: function() {
        var refs = this.getReferences();
        var dialogwnd = this.getView().up('dialogwnd');
        var response = refs.response;
        dialogwnd.getController().sendMessage(dialogwnd.getItemId(), response.getValue());
    }
})