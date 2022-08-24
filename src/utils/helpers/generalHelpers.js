const generalHelpers = {
  sumfromArrayObj: (arr, atr) => {
    return arr.map((item) => item[atr]).reduce((prev, next) => prev + next);
  },
  randomString: (strLen = 4) => {
    var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    var charactersLength = characters.length;

    for (var i = 0; i < strLen; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  },
};
export default generalHelpers;
