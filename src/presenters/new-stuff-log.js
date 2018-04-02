"use strict";

// 🐈

module.exports = function() {
  var self = {

    // equal to most newest update.id
    totalUpdates() { 
      return self.updates()[0].id;
    },
    
    /*  Example template:
    
     {
          id: 3,
          title: "Example Title",
          body: `
Your markdown body, here.

As long as you like.
`,
        },
        
        
    */

    // prepend new updates
    updates() {
      return [
        {
          id: 2,
          title: "Glitch for Teams",
          body: `
Soon, we’ll provide Glitch to teams at work, so developers, designers and anyone with an idea can create real, full-power apps incredibly easily.

But we’re counting on you to help us define what that offering will include. [Sign up](https://glitch.com/forteams) and let us know what you need from Glitch in the workplace, be the first to hear what’s coming to Glitch for Teams, and help inform its development.
`,
        },
        {
          id: 1,
          title: "Deleted, but not forgotten",
          body:
          `
You can now delete _and undelete_ projects. 🎉

Tidy up your profile page without fear of regret.
There's a new "Delete This" button on your project tiles that'll let you clean up 
your old experiments and help you present a healthier, more active looking profile page. 🥦

![Delete using the project's dropdown list](https://cdn.glitch.com/03736932-82dc-40e8-8dc7-93330c933143%2Fnew-stuff-delete.png?1518549490386)

All of your deleted projects are listed for you at the bottom of your profile page,
and you can restore them to life with just one click.

![Undelete projects using the new controls at the bottom of your profile page](https://cdn.glitch.com/03736932-82dc-40e8-8dc7-93330c933143%2Fnew-stuff-undelete.png?1518552423035)

No forever-💔 here, every project has a second chance.
`,
        },
      ];
    },
  };


  return self;
};
