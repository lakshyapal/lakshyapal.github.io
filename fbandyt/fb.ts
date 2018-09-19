abstract class profileUrls{
    
    public URL:any
    protected static spassword:string = 'abc123'
    constructor(){
        this.URL = {
            overview:'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410',
            edu:'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=education',
            living:'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=living',
            cinfo:'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=contact-info',
            rship:'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=relationship',
            bio:'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=bio',
            yoverview:'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=year-overviews'
        } 
    }

    abstract checklogin():any

}

class fb extends profileUrls{

    
    
    _o?:any
    _o_cworks?:any
    _o_ceducation?:any
    _o_cplace?:any
    _o_familymembers?:any
    _o_BOD?:any
    _o_URL?:string

    _we?:any
    _we_worked?:any
    _we_skills?:any
    _we_college?:any
    _we_highschool?:any
    _we_URL?:string

    _li?:any
    _li_currentCitiesAndHomeTown?:any
    _li_otherPlaces?:any
    _li_URL?:string

    _cb?:any
    _cb_mobilePhones?:any
    _cb_Emails?:any
    _cb_addPublicKey?:any
    _cb_websites?:any
    _cb_socialLinks?:any
    _cb_birthData?:any
    _cb_birthYear?:any
    _cb_gender?:any
    _cb_languages?:any
    _cb_religiousView?:any
    _cb_politicalView?:any
    _cb_URL?:string

    _fr?:any
    _fr_relationshipStatus?:any
    _fr_familyMembers?:any
    _fr_URL?:string

    _da?:any
    _da_aboutYou?:any
    _da_nickname?:any
    _da_favoriteQuote?:any
    _da_bloodGroup?:any
    _da_URL?:string

    constructor(
        
    protected overview?:{
        cworks?:string,
        ceducation?:string,
        cplace?:string,
        familymembers?:string[],
        DOB?:string,
        url?:string
    }|undefined,

    protected WorkandEdu?:{
        worked?:string[],
        skills?:string[],
        college?:string[],
        highschool?:string[],
        url?:string
    }|undefined,

    protected livedPlace?:{
        currentCitiesAndHomeTown?:string[],
        otherPlaces?:string[],
        url?:string
    }| undefined,

    protected contactAndBio?:{
        mobilePhones?:string[],
        Emails?:string[],
        addPublicKey?:string[]

        websites?:string[],
        socialLinks?:string[],
        birthData?:string,
        birthYear?:string,
        gender?:string,
        languages?:string[]
        religiousView?:string,
        politicalView?:string,
        url?:string
    }|undefined,

    protected FrndAndRelationship?:{
        relationshipStatus?:string,
        familyMembers?:string[],
        url?:string
    }|undefined,

    protected detailsAboutYou?:{
        aboutYou?:string,
        nickname?:string,
        favoriteQuote?:string,
        bloodGroup?:string,
        url?:string
    }|undefined
     
    ){
    
    super();
    this._o = overview
    this._o_cworks = this._o.cworks
    this._o_ceducation =this._o.ceducation
    this._o_cplace=this._o.cplace
    this._o_familymembers = this._o.familymembers
    this._o_BOD = this._o.DOB
    this._o_URL = this._o.url


    this._we = WorkandEdu
    this._we_worked = this._we.worked
    this._we_skills = this._we.skills
    this._we_college = this._we.college
    this._we_highschool = this._we.highschool
    this._we_URL = this._we.url

    this._li = livedPlace
    this._li_currentCitiesAndHomeTown = this._li.currentCitiesAndHomeTown
    this._li_otherPlaces = this._li.otherPlaces
    this._li_URL = this._li.url

    this._cb = contactAndBio
    this._cb_mobilePhones=this._cb.mobilePhones
    this._cb_Emails=this._cb.Emails
    this._cb_addPublicKey=this._cb.addPublicKey
    this._cb_websites=this._cb.websites
    this._cb_socialLinks=this._cb.socialLinks
    this._cb_birthData=this._cb.birthData
    this._cb_birthYear=this._cb.birthYear
    this._cb_gender=this._cb.gender
    this._cb_languages=this._cb.languages
    this._cb_religiousView=this._cb.religiousView
    this._cb_politicalView=this._cb.politicalView
    this._cb_URL = this._cb.url

    this._fr = FrndAndRelationship
    this._fr_relationshipStatus = this._fr.relationshipStatus
    this._fr_familyMembers = this._fr.familymembers
    this._fr_URL = this._fr.url

    this._da = detailsAboutYou
    this._da_aboutYou = this._da.aboutYou
    this._da_nickname = this._da.nickname
    this._da_favoriteQuote = this._da.favoriteQuote
    this._da_bloodGroup = this._da.bloodGroup
    this._da_URL = this._da.url

    }//cons end

    displayPrifleURl(){
        console.log(this.URL);
    }

    displayOverview(){
        if(this.checklogin() && this._o_URL == this.URL.overview){
            console.log(this._o)
            console.log(this._o_cworks)
            console.log(this._o_ceducation)
            console.log(this._o_cplace)
            console.log(this._o_familymembers)
            console.log(this._o_BOD)
        }
    }

    displayWorkAndEdu(){
        if(this.checklogin() && this._we_URL == this.URL.edu){
            console.log(this._we)
            console.log(this._we_worked)
            console.log(this._we_skills)
            console.log(this._we_college)
            console.log(this._we_highschool)
        }
    }

    displayLivedPlaces(){
        if(this.checklogin() && this._li_URL == this.URL.livedPlace){
            console.log(this._li)
            console.log(this._li_currentCitiesAndHomeTown)
            console.log(this._li_otherPlaces)
        }
    }

    displayContactAndBio(){
        if(this.checklogin() && this._cb_URL == this.URL.cinfo){
            console.log(this._cb)
            console.log(this._cb_mobilePhones)
            console.log(this._cb_Emails)
            console.log(this._cb_addPublicKey)
            console.log(this._cb_websites)
            console.log(this._cb_socialLinks)
            console.log(this._cb_birthData)
            console.log(this._cb_birthYear)
            console.log(this._cb_gender)
            console.log(this._cb_languages)
            console.log(this._cb_religiousView)
            console.log(this._cb_politicalView)
        }
    }

    displayFrndAndRelationship(){
        if(this.checklogin() && this._fr_URL == this.URL.rship){
            console.log(this._fr)
            console.log(this._fr_relationshipStatus)
            console.log(this._fr_familyMembers)
        }
    }

    displaydetailsAboutYou(){
        if(this.checklogin() && this._da_URL == this.URL.bio){
            console.log(this._da)
            console.log(this._da_aboutYou)
            console.log(this._da_nickname)
            console.log(this._da_favoriteQuote)
            console.log(this._da_bloodGroup)
        }
    }
    static pass = 'abc123'

    checklogin(){
        if(profileUrls.spassword == fb.pass){
            return true;
        }else{
            return false;
        }
    }

    
}

let obj:fb = new fb({cworks:'SW',ceducation:'KV',cplace:'Delhi',familymembers:['Rumika','ayush'],DOB:'20 JAN 1994',url:'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410'},{},{},{},{},{});

obj.displayOverview();