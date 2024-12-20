export const data = [
  {
    param: [],
    result: '',
  },
  {
    param: [5],
    result: '5',
  },
  {
    param: [1, 2, 3],
    result: '1-3',
  },
  {
    param: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    result: '1-10',
  },
  {
    param: Array.from({ length: 90 }, (_, i) => i + 10),
    result: '10-99',
  },
  {
    param: Array.from({ length: 300 }, (_, i) => i + 100),
    result: '100-399',
  },
  {
    param: [
      5, 3, 2, 4, 8, 10, 7, 1, 6, 9, 20, 21, 22, 25, 30, 31, 32, 50, 51, 52, 33, 44, 431, 432, 433,
      450, 451, 452,
    ],
    result: '1-10,20-22,25,30-33,44,50-52,431-433,450-452',
  },
];
