Meteor.subscribe('posts');

// Intercom Settings
Deps.autorun(function(){
  if (Meteor.user() && !Meteor.loggingIn()) {
    var intercomSettings = {
      email: Meteor.user().emails[0].address,
      created_at: Math.round(Meteor.user().createdAt/1000),
      user_name: Meteor.user().username,
      user_id: Meteor.user()._id,
      user_hash: Meteor.user().intercomHash,
      app_id: "defb0a6f02dbc40ffbc423408555d8c033671095"   
    };
    Intercom('boot', intercomSettings);
  }
});
