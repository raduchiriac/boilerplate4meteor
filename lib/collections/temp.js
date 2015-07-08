Temp = new Meteor.Collection('temp');

// !SIMPLESCHEMA
TempSchema = new SimpleSchema();
Temp.attachSchema(TempSchema);

// !HELPERS
Temp.helpers({});

// !HOOKS
Temp.after.insert(function (userId, doc) {});

// !PERMISSIONS
// server/permissions.js
