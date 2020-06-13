/* Fortune Teller */

function tellFortune(kidsNum, partnerName, geoLocation, jobTitle) {

    var future = "You will be a " + jobTitle + " in, " + geoLocation + " and married to " + partnerName + " with " + kidsNum + ".";
    console.log(future);
}

tellFortune(3, "Adam", "Chicago", "WebDev");