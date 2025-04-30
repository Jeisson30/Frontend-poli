const STORAGE_KEY = "problems";

export const ProblemRepository = {
  findAll() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },

  save(problem) {
    const problems = this.findAll();
    problems.push(problem);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(problems));
  },

  delete(index) {
    const problems = this.findAll();
    problems.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(problems));
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
};

function preloadMockData() {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing || JSON.parse(existing).length === 0) {
    const mockProblems = [
      {
        number: "1",
        shortName: "Sum",
        fullname: "Sum of Two Numbers",
        colorName: "Blue",
        colorRgb: "#0000FF",
        basename: "sum",
        descfile: "sum.pdf",
        zipFile: "sum.zip"
      },
      {
        number: "2",
        shortName: "Sort",
        fullname: "Array Sorting",
        colorName: "Green",
        colorRgb: "#00FF00",
        basename: "sort",
        descfile: "sort.pdf",
        zipFile: "sort.zip"
      },
      {
        number: "3",
        shortName: "MaxSubarray",
        fullname: "Maximum Subarray Problem",
        colorName: "Red",
        colorRgb: "#FF0000",
        basename: "maxsubarray",
        descfile: "maxsubarray.pdf",
        zipFile: "maxsubarray.zip"
      },
      {
        number: "4",
        shortName: "GraphDFS",
        fullname: "Depth First Search in Graphs",
        colorName: "Purple",
        colorRgb: "#800080",
        basename: "graphdfs",
        descfile: "graphdfs.pdf",
        zipFile: "graphdfs.zip"
      },
      {
        number: "5",
        shortName: "PrimeCheck",
        fullname: "Prime Number Checker",
        colorName: "Orange",
        colorRgb: "#FFA500",
        basename: "primecheck",
        descfile: "primecheck.pdf",
        zipFile: "primecheck.zip"
      }
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockProblems));
  }
}

preloadMockData();