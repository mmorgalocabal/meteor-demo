/**
 * Created by marian on 3/8/16.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});