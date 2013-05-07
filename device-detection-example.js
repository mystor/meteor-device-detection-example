if (Meteor.isClient) {
  Template.preferences.events({
    'click #preferTV': function(e, tmpl) {
      e.preventDefault();

      Meteor.Device.preferTV();
    },
    'click #preferTablet': function(e, tmpl) {
      e.preventDefault();

      Meteor.Device.preferTablet();
    },
    'click #preferPhone': function(e, tmpl) {
      e.preventDefault();

      Meteor.Device.preferPhone();
    },
    'click #preferDesktop': function(e, tmpl) {
      e.preventDefault();

      Meteor.Device.preferDesktop();
    },
    'click #preferBot': function(e, tmpl) {
      e.preventDefault();

      Meteor.Device.preferBot();
    },
    'click #preferNone': function(e, tmpl) {
      e.preventDefault();

      Meteor.Device.clearPreference();
    }
  });

  Template.preferences.hasPreference = function() {
    return Meteor.Device.hasPreference();
  }
}
