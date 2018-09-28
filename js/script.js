/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName.name);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/'+ channelName.createdby + '" target="_blank"><strong>' + channelName.createdby + '</strong></a>';
    
    //check if the starred property of the channel object is true and return the respective star
    channelName.starred ? $('#channel-star').addClass('fas fa-star') : $('#channel-star').addClass('fas fa-star');

    /* #6 #liking channels on #click */
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
    $('#channel-star').toggleClass('far fa-star');
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

/* create a constructor function for messages */

function Message(text){
    this.createdBy = 'createdBy',
    this.latitude = latitude,
    this.longitude = longitude,
    this.createdOn = Date.now(),
    this.expiresOn = new Date(Date.now() + 900000),
    this.text = text,
    this.own = true
}
/* create sendMessage function */
function sendMessage(){
    var message1 = new Message("Hello Chatter");
    console.log(message1);
    var textMessage = $("#textMessage").val();
    
}
