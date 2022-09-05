var zahed={
    tshirt:{
        color:"Black",
        Quality:"Good",
        Brand:"Yellow",
        Price:760,
    },

    person:{
        strong_point:"He can heal yourself",
        bad_point:"Emotional",
        skills:"Python,JS,AWS,Django,REST-API,Node.js,express.js,React.js,Mongodb,PostGreSQL",
        hate_list:"Human",
        travel:true,
        hangout:"He love to hangout",
        earnings:"Good",
        company:"Syscomatic Technologies",
        quote:"Everything is returns back oneday!"
    },

    education:{
        school:"NKHS",
        University:"Daffodil",
        cg:"3.66",

    },
    dream:{
        sattlement:"Germany",
        startup:"Succssfully-launch"
    },
    hiding:{
        life:"he love to hide himself",
        fav_song:"100 miles,Har kala korlam re!"
    }
}


// console.log(zahed['life']); simple array vsalue access korar jonno

// how to access nested array value


var result=zahed['hiding']['life']

console.log(result);

