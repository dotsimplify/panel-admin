import axios from "axios";

/**
 * It returns true if the object is empty, false if it's not
 * @param obj - The object to check if it's empty or not.
 */
export const isEmptyObject = (obj) => {
  if (typeof obj === "object" && obj != null) {
    return Object.keys(obj).length >= 1 ? false : true;
  }
  return true;
};

export const generate = (item, array, setFn) => {
  let tempArray = [];
  tempArray = [...array, item];
  return setFn(tempArray);
};
export const removeElements = (item, array, setFn) => {
  let temp = [...array];
  temp.splice(array.indexOf(item), 1);
  setFn(temp);
};
export const removeFromDropDown = (item, array, setFn) => {
  let temp = [...array];
  temp.filter();
};
export const formateDate = (date) => {
  const dateStr = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return dateStr;
};

export const formatTime = (date) => {
  const dateStr = new Date(date).toLocaleTimeString("en-IN");
  return dateStr.replace(/(:\d\d\s)/, " ");
};

export const smallString = (str, num) => {
  if (str && str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const tagExtract = (str) => {
  const tags = str.split(" ").join("");
  const newTags = tags.replace(/,/g, " ").split(" ");
  return newTags;
};

// Custom image Uploader

export const blogImageUploader = (
  imageFile,
  compeleteObj,
  dispatch,
  createBlogRequest,
  appLoading
) => {
  let formData = new FormData();
  formData.append("file", imageFile);
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/upload`, formData)
    .then((res) => {
      const imageData = {
        images: res.data,
      };
      const sendBlogDetails = { ...compeleteObj, ...imageData };
      dispatch(createBlogRequest(sendBlogDetails));
      dispatch(appLoading(false));
    });
};

// example filter function
// performSearchQuery([{name:"ahdohm"}, {name:"Dog"}, {name:"My Girl"}],"DO","name");
export const performSearchQuery = (array, searchTerm, field, secondField) => {
  let searchString = searchTerm.toString();
  if (array !== undefined && array.length > 0) {
    return array.filter(
      (res) =>
        res[field].toLowerCase().includes(searchString.toLowerCase()) ||
        res[secondField].toLowerCase().includes(searchString.toLowerCase())
    );
  }
  return;
};

export const todayDDMMYYY = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + "-" + mm + "-" + yyyy;
  return today;
};
