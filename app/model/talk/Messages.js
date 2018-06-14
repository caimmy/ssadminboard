Ext.define("Admin.model.talk.Messages", {
    extend: 'Ext.data.Model',
    fields: [
        {name: '_id', type: 'int'},
        {name: 'sender', type: 'string'},
        {name: 'side', type: 'int'},
        {name: 'content', type: 'string'},
        {name: 'catalog', type: 'string'},
        {name: 'time', type: 'string'}
    ]
})