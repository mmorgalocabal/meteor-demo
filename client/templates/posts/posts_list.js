/**
 * Created by marian on 3/8/16.
 */
Template.postsList.helpers({
    posts: function(){
        return Posts.find({}, {sort: {submitted: -1}});
    }
});