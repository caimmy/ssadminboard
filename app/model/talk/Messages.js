Ext.define("Admin.model.talk.Messages", {
    extend: 'Ext.data.Model',
    fields: [
        {name: '_id', type: 'string'},
        {name: 'sender', type: 'string'},
        {name: 'side', type: 'int'},
        {name: 'content', type: 'string'},
        {name: 'catalog', type: 'string'},
        {name: 'time', type: 'string'}
    ]
})