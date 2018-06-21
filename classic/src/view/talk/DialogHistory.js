Ext.define('Admin.view.talk.DialogHistory', {
    extend: 'Ext.grid.Panel',
    xtype: 'dialoghistory',

    cls: 'search-all',

    selectedCls: 'search-result-item-selected',

    itemTpl: '<div class="search-result-item">' +
        '<div class="list-cls">{time}</div>'+
        '<div><a href="#">{sender}</a></div>'+
        '<div class="talk-item-text-backend">{content}</div>'+
        '<p>{catalog}</p>'+
    '</div>'
})