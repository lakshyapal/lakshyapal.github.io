var YoutubeMain = /** @class */ (function () {
    function YoutubeMain(youtubeObj) {
        this.youtubeObj = youtubeObj;
        this.web_viewerLocationCode = youtubeObj.viewerLocationCode;
        this.web_viewerLanguage = youtubeObj.viewerLanguage;
        this.web_historyList = youtubeObj.viewerhistoryList;
        this.web_watchLaterList = youtubeObj.viewerwatchLaterList;
        this.web_watchLaterList = youtubeObj.viewerLikedVideos;
        this.web_SubcriptionsList = youtubeObj.viewerSubcriptionsList;
        this.web_restrictedMode = youtubeObj.restrictedMode;
        this.web_viewerAddress = youtubeObj.viewerAddress;
        this.web_viewerIP = youtubeObj.viewerIP;
        this.web_viewerNavigator = youtubeObj.viewerNavigator;
        this.web_viewerTimeStandard = youtubeObj.viewerTimeStandard;
        this.web_viewerCurrentLocationLat = youtubeObj.viewerCurrentLocationLat;
        this.web_viewerCurrentLocationLong = youtubeObj.viewerCurrentLocationLong;
        this.web_viewerProfilePic = youtubeObj.viewerProfilePic;
        this.web_viewerIsLoginIn = youtubeObj.viewerIsLoginIn;
        this.web_viewerNotificationCount = youtubeObj.viewerNotificationCount;
        this.web_viewerLoggedInemail = youtubeObj.viewerLoggedInemail;
        this.web_viewerLoggedInPassword = youtubeObj.viewerLoggedInPassword;
        this.web_viewerNotificationData = youtubeObj.viewerNotificationData;
        this.web_viewerLocationCode = youtubeObj.viewerLocationCode;
        this.web_viewerLanguage = youtubeObj.viewerLanguage;
        this.web_videoTitle = youtubeObj.videoTitle;
        this.web_videoURL = youtubeObj.videoURL;
        this.web_videoUniqueId = youtubeObj.videoUniqueId;
        this.web_videoThumbnailsImageURL = youtubeObj.videoThumbnailsImageURL;
        this.web_videoTag = youtubeObj.videoTag;
        this.web_videoCategoryId = youtubeObj.videoCategoryId;
        this.web_videoCategoryName = youtubeObj.videoCategoryName;
        this.web_videoLiveBroadcastContent = youtubeObj.videoLiveBroadcastContent;
        this.web_videoDefaultLanguage = youtubeObj.videoDefaultLanguage;
        this.web_annotations = youtubeObj.annotations;
        this.web_videoPlaybackSpeed = youtubeObj.videoPlaybackSpeed;
        this.web_videoSrtList = youtubeObj.videoSrtList;
        this.web_videoDefaultSrt = youtubeObj.videoDefaultSrt;
        this.web_videIsSrtAvailable = youtubeObj.videIsSrtAvailable;
        this.web_videoDuration = youtubeObj.videoDuration;
        this.web_videoQuality = youtubeObj.videoQuality;
        this.web_videoEmbedcode = youtubeObj.videoEmbedcode;
        this.web_videodebugInfo = youtubeObj.videodebugInfo;
        this.web_statsForNerds = youtubeObj.statsForNerds;
        this.web_viewVideoScreenResolutionValues = youtubeObj.viewVideoScreenResolutionValues;
        this.web_loopVideo = youtubeObj.loopVideo;
        this.web_videoTotalLikes = youtubeObj.videoTotalLikes;
        this.web_videoTotalviews = youtubeObj.videoTotalviews;
        this.web_videoTotalDislike = youtubeObj.videoTotalDislike;
        this.web_videoTotalSubscriber = youtubeObj.videoTotalSubscriber;
        this.web_videoDescriptionBox = youtubeObj.videoDescriptionBox;
        //comment section
        this.web_isEnablecommentBox = youtubeObj.isEnablecommentBox;
        this.web_commentCount = youtubeObj.commentCount;
        this.web_commentBoxUsers = youtubeObj.commentBoxUsers;
        this.web_commentBoxContent = youtubeObj.commentBoxContent;
        this.web_commentBoxTimeDuration = youtubeObj.commentBoxTimeDuration;
        this.web_commentBoxlikes = youtubeObj.commentBoxlikes;
        this.web_commentBoxDislikes = youtubeObj.commentBoxDislikes;
        this.web_commentBoxrepliesCount = youtubeObj.commentBoxrepliesCount;
        this.web_commentBoxRepliesContent = youtubeObj.commentBoxRepliesContent;
        this.web_commentBoxRepliesLikes = youtubeObj.commentBoxRepliesLikes;
        this.web_commentBoxRepliesDislikes = youtubeObj.commentBoxRepliesDislikes;
    } // end constructor
    YoutubeMain.prototype.getTheLoginId = function () {
        console.log("" + this.web_viewerLoggedInemail);
    };
    Object.defineProperty(YoutubeMain.prototype, "getTheVideoTitle", {
        get: function () {
            return this.web_videoTitle;
        },
        enumerable: true,
        configurable: true
    });
    YoutubeMain.prototype.setViewerlocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
    };
    YoutubeMain.prototype.showPosition = function (position) {
        console.log(this.web_viewerCurrentLocationLong = position.coords.longitude);
        console.log(this.web_viewerCurrentLocationLat = position.coords.latitude);
    };
    YoutubeMain.prototype.copyEmbedCode = function () {
        console.log(this.web_videoEmbedcode = YoutubeMain.embedCode);
    };
    YoutubeMain.prototype.getTheVideoQuality = function () {
        for (var _i = 0, _a = this.web_videoQuality; _i < _a.length; _i++) {
            var q = _a[_i];
            console.log(q);
        }
    };
    YoutubeMain.prototype.copyURLAtCurrentTime = function (currentTime) {
        var total = YoutubeMain.videoTime.hours * 60 + YoutubeMain.videoTime.minutes * 60 + YoutubeMain.videoTime.secconds;
        var totalcurrent = currentTime.hours * 60 + currentTime.minutes * 60 + currentTime.second;
        console.log(total, totalcurrent);
        (totalcurrent < total) ? console.log(this.web_videoURL + "?t=" + totalcurrent) : console.log("cannot be copied");
    };
    YoutubeMain.prototype.showVideoDetails = function () {
        console.log(this.web_videoDuration);
        console.log(this.getTheVideoTitle());
        console.log(this.web_videoCategoryName);
        console.log(this.web_videoLiveBroadcastContent);
        console.log(this.web_videoDefaultLanguage);
    };
    YoutubeMain.prototype.getTheNextVideo = function () {
        if (this.web_loopVideo == true) {
            console.log(this.web_nextVideolist);
        }
    };
    YoutubeMain.prototype.getTheVideoSocialDetails = function () {
        console.log(this.web_videoTotalLikes);
        console.log(this.web_videoTotalviews);
        console.log(this.web_videoTotalDislike);
        console.log(this.web_videoTotalSubscriber);
        console.log(this.web_videoDescriptionBox);
    };
    YoutubeMain.prototype.getTheComments = function () {
        if (this.web_isEnablecommentBox == true) {
            console.log(this.web_commentCount);
            console.log(this.web_commentBoxUsers);
            console.log(this.web_commentBoxContent);
            console.log(this.web_commentBoxTimeDuration);
            console.log(this.web_commentBoxlikes);
        }
        else {
            console.log("Comments are hidden for this video");
        }
    };
    YoutubeMain.embedCode = '<iframe width="853" height="480" src="https://www.youtube.com/embed/GXoErccq0vw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    YoutubeMain.videoTime = { hours: 0, minutes: 5, secconds: 30 };
    return YoutubeMain;
}()); // end class
var newobj = new YoutubeMain({ viewerLoggedInemail: 'lakshyapal028@gmail.com', viewerLoggedInPassword: '123xyz' });
newobj.getTheLoginId();
//html5 geolocation api
newobj.setViewerlocation();
// get the video resolution
var newobj2 = new YoutubeMain({ videoQuality: ['144', '360', '480', '720'] });
newobj2.getTheVideoQuality();
var newobj3 = new YoutubeMain({ videoURL: "https://www.youtube.com/watch?v=GXoErccq0vw" });
newobj3.copyURLAtCurrentTime({ hours: 0, minutes: 2, second: 45 });
