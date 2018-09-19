var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var profileUrls = /** @class */ (function () {
    function profileUrls() {
        this.URL = {
            overview: 'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410',
            edu: 'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=education',
            living: 'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=living',
            cinfo: 'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=contact-info',
            rship: 'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=relationship',
            bio: 'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=bio',
            yoverview: 'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410&section=year-overviews'
        };
    }
    profileUrls.spassword = 'abc123';
    return profileUrls;
}());
var fb = /** @class */ (function (_super) {
    __extends(fb, _super);
    function fb(overview, WorkandEdu, livedPlace, contactAndBio, FrndAndRelationship, detailsAboutYou) {
        var _this = _super.call(this) || this;
        _this.overview = overview;
        _this.WorkandEdu = WorkandEdu;
        _this.livedPlace = livedPlace;
        _this.contactAndBio = contactAndBio;
        _this.FrndAndRelationship = FrndAndRelationship;
        _this.detailsAboutYou = detailsAboutYou;
        _this._o = overview;
        _this._o_cworks = _this._o.cworks;
        _this._o_ceducation = _this._o.ceducation;
        _this._o_cplace = _this._o.cplace;
        _this._o_familymembers = _this._o.familymembers;
        _this._o_BOD = _this._o.DOB;
        _this._o_URL = _this._o.url;
        _this._we = WorkandEdu;
        _this._we_worked = _this._we.worked;
        _this._we_skills = _this._we.skills;
        _this._we_college = _this._we.college;
        _this._we_highschool = _this._we.highschool;
        _this._we_URL = _this._we.url;
        _this._li = livedPlace;
        _this._li_currentCitiesAndHomeTown = _this._li.currentCitiesAndHomeTown;
        _this._li_otherPlaces = _this._li.otherPlaces;
        _this._li_URL = _this._li.url;
        _this._cb = contactAndBio;
        _this._cb_mobilePhones = _this._cb.mobilePhones;
        _this._cb_Emails = _this._cb.Emails;
        _this._cb_addPublicKey = _this._cb.addPublicKey;
        _this._cb_websites = _this._cb.websites;
        _this._cb_socialLinks = _this._cb.socialLinks;
        _this._cb_birthData = _this._cb.birthData;
        _this._cb_birthYear = _this._cb.birthYear;
        _this._cb_gender = _this._cb.gender;
        _this._cb_languages = _this._cb.languages;
        _this._cb_religiousView = _this._cb.religiousView;
        _this._cb_politicalView = _this._cb.politicalView;
        _this._cb_URL = _this._cb.url;
        _this._fr = FrndAndRelationship;
        _this._fr_relationshipStatus = _this._fr.relationshipStatus;
        _this._fr_familyMembers = _this._fr.familymembers;
        _this._fr_URL = _this._fr.url;
        _this._da = detailsAboutYou;
        _this._da_aboutYou = _this._da.aboutYou;
        _this._da_nickname = _this._da.nickname;
        _this._da_favoriteQuote = _this._da.favoriteQuote;
        _this._da_bloodGroup = _this._da.bloodGroup;
        _this._da_URL = _this._da.url;
        return _this;
    } //cons end
    fb.prototype.displayPrifleURl = function () {
        console.log(this.URL);
    };
    fb.prototype.displayOverview = function () {
        if (this.checklogin() && this._o_URL == this.URL.overview) {
            console.log(this._o);
            console.log(this._o_cworks);
            console.log(this._o_ceducation);
            console.log(this._o_cplace);
            console.log(this._o_familymembers);
            console.log(this._o_BOD);
        }
    };
    fb.prototype.displayWorkAndEdu = function () {
        if (this.checklogin() && this._we_URL == this.URL.edu) {
            console.log(this._we);
            console.log(this._we_worked);
            console.log(this._we_skills);
            console.log(this._we_college);
            console.log(this._we_highschool);
        }
    };
    fb.prototype.displayLivedPlaces = function () {
        if (this.checklogin() && this._li_URL == this.URL.livedPlace) {
            console.log(this._li);
            console.log(this._li_currentCitiesAndHomeTown);
            console.log(this._li_otherPlaces);
        }
    };
    fb.prototype.displayContactAndBio = function () {
        if (this.checklogin() && this._cb_URL == this.URL.cinfo) {
            console.log(this._cb);
            console.log(this._cb_mobilePhones);
            console.log(this._cb_Emails);
            console.log(this._cb_addPublicKey);
            console.log(this._cb_websites);
            console.log(this._cb_socialLinks);
            console.log(this._cb_birthData);
            console.log(this._cb_birthYear);
            console.log(this._cb_gender);
            console.log(this._cb_languages);
            console.log(this._cb_religiousView);
            console.log(this._cb_politicalView);
        }
    };
    fb.prototype.displayFrndAndRelationship = function () {
        if (this.checklogin() && this._fr_URL == this.URL.rship) {
            console.log(this._fr);
            console.log(this._fr_relationshipStatus);
            console.log(this._fr_familyMembers);
        }
    };
    fb.prototype.displaydetailsAboutYou = function () {
        if (this.checklogin() && this._da_URL == this.URL.bio) {
            console.log(this._da);
            console.log(this._da_aboutYou);
            console.log(this._da_nickname);
            console.log(this._da_favoriteQuote);
            console.log(this._da_bloodGroup);
        }
    };
    fb.prototype.checklogin = function () {
        if (profileUrls.spassword == fb.pass) {
            return true;
        }
        else {
            return false;
        }
    };
    fb.pass = 'abc123';
    return fb;
}(profileUrls));
var obj = new fb({ cworks: 'SW', ceducation: 'KV', cplace: 'Delhi', familymembers: ['Rumika', 'ayush'], DOB: '20 JAN 1994', url: 'https://www.facebook.com/lakshya.pal.92/about?lst=100001630978119%3A100001630978119%3A1537338410' }, {}, {}, {}, {}, {});
obj.displayOverview();
