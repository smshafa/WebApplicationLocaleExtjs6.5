﻿Ext.onReady(function () {
    alert('hi');


    Ext.define('User', {
        extend: 'Ext.data.Model',
        fields: ['name', 'email', 'phone']
    });

    var userStore = Ext.create('Ext.data.Store', {
        model: 'User',
        data: [{
            name: 'Lisa',
            email: 'lisa@simpsons.com',
            phone: '555-111-1224'
        }, {
            name: 'Bart',
            email: 'bart@simpsons.com',
            phone: '<q =\"'
        }, {
            name: 'Homer',
            email: 'homer@simpsons.com',
            phone: '555-222-1244'
        }, {
            name: 'Marge',
            email: 'marge@simpsons.com',
            phone: '555-222-1254'
        }, {
            name: 'Shreya',
            email: 'marge@simpsons.com',
            phone: '555-222-1254'
        }

        ]
    });

    Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        store: userStore,
        storeId: 'mystore',
        width: 400,
        height: 200,
        title: 'Application Users',
        columns: [{
            text: 'Name',
            width: 100,
            sortable: false,
            hideable: false,
            dataIndex: 'name'
        }, {
            text: 'Email Address',
            width: 150,
            dataIndex: 'email',
            hidden: true
        }, {
            text: 'Phone Number',
            flex: 1,
            dataIndex: 'phone',
            renderer: function (v) {
                return Ext.htmlEncode(v);
            }
        }]
    });

    return;
    var task = {
        run: function () {
            userStore.load()
        },
        interval: 5000 //5 seconds
    }

    var runner = new Ext.util.TaskRunner();

    runner.start(task);


});