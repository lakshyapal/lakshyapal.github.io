class YoutubeMain{



    protected web_historyList:any
    protected web_watchLaterList:any
    protected web_LikedVideos:any
    protected web_SubcriptionsList:any
    protected web_restrictedMode:any

    protected web_viewerAddress:any
    protected web_viewerIP:any
    protected web_viewerNavigator:any
    protected web_viewerTimeStandard:any
    protected web_viewerCurrentLocationLat:any
    protected web_viewerCurrentLocationLong:any
    protected web_viewerProfilePic:any
    protected web_viewerIsLoginIn:any
    protected web_viewerNotificationCount:any
    protected web_viewerLoggedInemail:any
    protected web_viewerLoggedInPassword:any
    protected web_viewerNotificationData:any
    protected web_viewerLocationCode:any
    protected web_viewerLanguage:any

    protected web_videoTitle:any
    protected web_videoURL:any
    protected web_videoUniqueId:any
    protected web_videoThumbnailsImageURL:any
    protected web_videoTag:any
    protected web_videoCategoryId:any
    protected web_videoCategoryName:any
    protected web_videoLiveBroadcastContent:any
    protected web_videoDefaultLanguage:any
    protected web_annotations:any
    protected web_videoPlaybackSpeed:any
    protected web_videoSrtList:any
    protected web_videoDefaultSrt:any
    protected web_videIsSrtAvailable:any
    protected web_videoDuration:any
    protected web_videoQuality:any
    protected web_videoEmbedcode:any
    protected web_videodebugInfo:any
    protected web_statsForNerds:any
    protected web_viewVideoScreenResolutionValues:any
    protected web_loopVideo:any
    protected web_nextVideolist:any

    protected web_videoTotalLikes:any
    protected web_videoTotalviews:any
    protected web_videoTotalDislike:any
    protected web_videoTotalSubscriber:any
    protected web_videoDescriptionBox:any
    //comment section
    protected web_isEnablecommentBox:any
    protected web_commentCount:any
    protected web_commentBoxUsers:any
    protected web_commentBoxContent:any
    protected web_commentBoxTimeDuration:any
    protected web_commentBoxlikes:any
    protected web_commentBoxDislikes:any
    protected web_commentBoxrepliesCount:any
    protected web_commentBoxRepliesContent:any
    protected web_commentBoxRepliesLikes:any
    protected web_commentBoxRepliesDislikes:any

constructor(protected youtubeObj:{
    //current user details
     restrictedMode?:boolean
     viewerAddress?:string,
     viewerIP?:string,
     viewerNavigator?:string,
     viewerTimeStandard?:string,
     viewerCurrentLocationLat?:number,
     viewerCurrentLocationLong?:number,
     viewerProfilePic?:string,
     viewerIsLoginIn?:boolean,
     viewerNotificationCount?:number,
     viewerLoggedInemail?:string,
     viewerLoggedInPassword?:string,
     viewerNotificationData?:string[],
     viewerLocationCode?:any,
     viewerLanguage?:string,

     viewerhistoryList?:string[],
     viewerwatchLaterList?:string[],
     viewerLikedVideos?:string[],
     viewerSubcriptionsList?:string[],

    // video detail
     videoTitle?:string,
     videoURL?:string,
     videoUniqueId?:string,
     videoThumbnailsImageURL?:string,
     videoTag?:string[],
     videoCategoryId?:number,
     videoCategoryName?:string,
     videoLiveBroadcastContent?:any,
     videoDefaultLanguage?:string,
     annotations?:boolean,
     videoPlaybackSpeed?:any[],
     videoSrtList?:string[],
     videoDefaultSrt?:string,
     videIsSrtAvailable?:boolean,
     videoDuration?:string,
     videoQuality?:string[],
     videoEmbedcode?:string,
     videodebugInfo?:any,
     statsForNerds?:any,
     viewVideoScreenResolutionValues?:string[],
     loopVideo?:boolean,
     nextVideolist?:string[],

    // video social details
    
     videoTotalLikes?:any,
     videoTotalviews?:any,
     videoTotalDislike?:any,
     videoTotalSubscriber?:any,
     videoDescriptionBox?:string,
    //comment section
     isEnablecommentBox?:boolean,
     commentCount?:any,
     commentBoxUsers?:string[],
     commentBoxContent?:string[],
     commentBoxTimeDuration?:string[],
     commentBoxlikes?:number,
     commentBoxDislikes?:number,
     commentBoxrepliesCount?:number,
     commentBoxRepliesContent?:any,
     commentBoxRepliesLikes?:number[],
     commentBoxRepliesDislikes?:number[],

    //next looping video

     nextVideoId?:number,
     nextVideoAutoPlay?:boolean
}){


    this.web_viewerLocationCode = youtubeObj.viewerLocationCode;

    this.web_viewerLanguage = youtubeObj.viewerLanguage;

    this.web_historyList = youtubeObj.viewerhistoryList;
    this.web_watchLaterList = youtubeObj.viewerwatchLaterList;
    this.web_watchLaterList = youtubeObj.viewerLikedVideos;
    this.web_SubcriptionsList = youtubeObj.viewerSubcriptionsList;
    this.web_restrictedMode = youtubeObj.restrictedMode;

    this.web_viewerAddress=youtubeObj.viewerAddress;
    this.web_viewerIP=youtubeObj.viewerIP;
    this.web_viewerNavigator=youtubeObj.viewerNavigator;
    this.web_viewerTimeStandard=youtubeObj.viewerTimeStandard;
    this.web_viewerCurrentLocationLat= youtubeObj.viewerCurrentLocationLat;
    this.web_viewerCurrentLocationLong=youtubeObj.viewerCurrentLocationLong;
    this.web_viewerProfilePic=youtubeObj.viewerProfilePic;
    this.web_viewerIsLoginIn=youtubeObj.viewerIsLoginIn;
    this.web_viewerNotificationCount=youtubeObj.viewerNotificationCount
    this.web_viewerLoggedInemail=youtubeObj.viewerLoggedInemail
    this.web_viewerLoggedInPassword=youtubeObj.viewerLoggedInPassword
    this.web_viewerNotificationData=youtubeObj.viewerNotificationData
    this.web_viewerLocationCode=youtubeObj.viewerLocationCode
    this.web_viewerLanguage=youtubeObj.viewerLanguage

    this.web_videoTitle = youtubeObj.videoTitle
    this.web_videoURL=youtubeObj.videoURL
    this.web_videoUniqueId=youtubeObj.videoUniqueId
    this.web_videoThumbnailsImageURL=youtubeObj.videoThumbnailsImageURL
    this.web_videoTag=youtubeObj.videoTag
    this.web_videoCategoryId=youtubeObj.videoCategoryId
    this.web_videoCategoryName=youtubeObj.videoCategoryName
    this.web_videoLiveBroadcastContent=youtubeObj.videoLiveBroadcastContent
    this.web_videoDefaultLanguage=youtubeObj.videoDefaultLanguage
    this.web_annotations=youtubeObj.annotations
    this.web_videoPlaybackSpeed=youtubeObj.videoPlaybackSpeed
    this.web_videoSrtList=youtubeObj.videoSrtList
    this.web_videoDefaultSrt=youtubeObj.videoDefaultSrt
    this.web_videIsSrtAvailable=youtubeObj.videIsSrtAvailable
    this.web_videoDuration=youtubeObj.videoDuration
    this.web_videoQuality=youtubeObj.videoQuality
    this.web_videoEmbedcode=youtubeObj.videoEmbedcode
    this.web_videodebugInfo=youtubeObj.videodebugInfo
    this.web_statsForNerds=youtubeObj.statsForNerds
    this.web_viewVideoScreenResolutionValues=youtubeObj.viewVideoScreenResolutionValues
    this.web_loopVideo=youtubeObj.loopVideo

    this.web_videoTotalLikes=youtubeObj.videoTotalLikes
    this.web_videoTotalviews=youtubeObj.videoTotalviews
    this.web_videoTotalDislike=youtubeObj.videoTotalDislike
    this.web_videoTotalSubscriber=youtubeObj.videoTotalSubscriber
    this.web_videoDescriptionBox=youtubeObj.videoDescriptionBox
    //comment section
    this.web_isEnablecommentBox=youtubeObj.isEnablecommentBox
    this.web_commentCount=youtubeObj.commentCount
    this.web_commentBoxUsers=youtubeObj.commentBoxUsers
    this.web_commentBoxContent=youtubeObj.commentBoxContent
    this.web_commentBoxTimeDuration=youtubeObj.commentBoxTimeDuration
    this.web_commentBoxlikes=youtubeObj.commentBoxlikes
    this.web_commentBoxDislikes=youtubeObj.commentBoxDislikes
    this.web_commentBoxrepliesCount=youtubeObj.commentBoxrepliesCount
    this.web_commentBoxRepliesContent=youtubeObj.commentBoxRepliesContent
    this.web_commentBoxRepliesLikes=youtubeObj.commentBoxRepliesLikes
    this.web_commentBoxRepliesDislikes=youtubeObj.commentBoxRepliesDislikes

}// end constructor


getTheLoginId(){
    console.log( `${this.web_viewerLoggedInemail}`);
}

get getTheVideoTitle(){
    return this.web_videoTitle;
}

setViewerlocation(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.showPosition)
    }

}

showPosition(position:any){
    console.log(this.web_viewerCurrentLocationLong = position.coords.longitude)
    console.log(this.web_viewerCurrentLocationLat = position.coords.latitude)
}

static embedCode = '<iframe width="853" height="480" src="https://www.youtube.com/embed/GXoErccq0vw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

copyEmbedCode(){
    console.log(this.web_videoEmbedcode = YoutubeMain.embedCode);
}

getTheVideoQuality(){
    for(let q of this.web_videoQuality){
        console.log(q)
    }
}
static videoTime = {hours:0,minutes:5,secconds:30}

copyURLAtCurrentTime(currentTime:{hours:number,minutes:number,second:number}){
    let total = YoutubeMain.videoTime.hours*60 + YoutubeMain.videoTime.minutes*60 + YoutubeMain.videoTime.secconds
    let totalcurrent:any = currentTime.hours*60 + currentTime.minutes*60+ currentTime.second;
    console.log(total,totalcurrent);
    (totalcurrent<total)? console.log(`${this.web_videoURL}&t=${totalcurrent}`):console.log(`cannot be copied`);
    
}

showVideoDetails(){
    console.log(this.web_videoDuration)
    console.log(this.getTheVideoTitle())
    console.log(this.web_videoCategoryName)
    console.log(this.web_videoLiveBroadcastContent)
    console.log(this.web_videoDefaultLanguage)
}

getTheNextVideo(){
    if(this.web_loopVideo== true){
        console.log(this.web_nextVideolist)
    }
}

getTheVideoSocialDetails(){
    console.log(this.web_videoTotalLikes)
    console.log(this.web_videoTotalviews)
    console.log(this.web_videoTotalDislike)
    console.log(this.web_videoTotalSubscriber)
    console.log(this.web_videoDescriptionBox)
}

getTheComments(){
    if(this.web_isEnablecommentBox == true){
    console.log(this.web_commentCount)
    console.log(this.web_commentBoxUsers)
    console.log(this.web_commentBoxContent)
    console.log(this.web_commentBoxTimeDuration)
    console.log(this.web_commentBoxlikes)
    }else{
        console.log(`Comments are hidden for this video`)
    }
}






}// end class

let newobj:YoutubeMain = new YoutubeMain({viewerLoggedInemail:'lakshyapal028@gmail.com',viewerLoggedInPassword:'123xyz'});

newobj.getTheLoginId();
//html5 geolocation api

newobj.setViewerlocation();
// get the video resolution
let newobj2:YoutubeMain = new YoutubeMain({videoQuality:['144','360','480','720']})
newobj2.getTheVideoQuality();

let newobj3:YoutubeMain = new YoutubeMain({videoURL:`https://www.youtube.com/watch?v=GXoErccq0vw`});
newobj3.copyURLAtCurrentTime({hours:0,minutes:2,second:45});


// other video details

let newobj4:YoutubeMain = new YoutubeMain({viewerLocationCode:'110053',viewerLanguage:'eng',loopVideo:true});