Meteor.methods({
  yakInsert: function(yak) {
    var postId = Yaks.insert({
      yak : yak, 
      score : 0, 
      submitted : new Date(), 
    });
  }
});