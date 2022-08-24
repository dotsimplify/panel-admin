export const numberSort = (arr, col, previous, setPrevious, setArray) => {
  if (!previous) {
    const ascending = [...arr].sort((a, b) => {
      return parseInt(a[col]) - parseInt(b[col]);
    });
    setArray(ascending);
    setPrevious(true);
  } else {
    const descending = [...arr].sort((a, b) => {
      return parseInt(b[col]) - parseInt(a[col]);
    });
    setArray(descending);
    setPrevious(false);
  }
};
export const mixedSort = (arr, col, previous, setPrevious, setArray) => {
  if (!previous) {
    const ascending = [...arr].sort((a, b) => {
      const num1 = a[col].match(/\d+/);
      const num2 = b[col].match(/\d+/);
      return parseInt(num1[0]) - parseInt(num2[0]);
    });
    setArray(ascending);
    setPrevious(true);
  } else {
    const descending = [...arr].sort((a, b) => {
      const num1 = a[col].match(/\d+/);
      const num2 = b[col].match(/\d+/);
      return parseInt(num2[0]) - parseInt(num1[0]);
    });
    setArray(descending);
    setPrevious(false);
  }
};

export const dateSortWithTime = (dateArray, col, order, setOrder, setArray) => {
  if (order === "asc") {
    const ascending = [...dateArray].sort((a, b) => {
      return (
        new Date(a[col]).setHours(0, 0, 0, 0) -
        new Date(b[col]).setHours(0, 0, 0, 0)
      );
    });
    setOrder("dsc");
    setArray(ascending);
  }
  if (order === "dsc") {
    const descending = [...dateArray].sort((a, b) => {
      return (
        new Date(b[col]).setHours(0, 0, 0, 0) -
        new Date(a[col]).setHours(0, 0, 0, 0)
      );
    });
    setOrder("asc");
    setArray(descending);
  }
};
export const stringSorting = (arr, col, order, setOrder, setArray) => {
  if (order === "asc") {
    const ascending = [...arr].sort((a, b) => {
      return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
    });
    setOrder("dsc");
    setArray(ascending);
  }
  if (order === "dsc") {
    const descending = [...arr].sort((a, b) => {
      return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
    });
    setOrder("asc");
    setArray(descending);
  }
};
