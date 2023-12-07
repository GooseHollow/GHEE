g2 = new Dygraph( document.getElementById('graphdiv2'), 'DATE,Premium/Discount\n2023-11-16,0\n2023-11-17,0\n2023-11-20,0\n2023-11-21,0\n2023-11-22,0\n2023-11-24,0\n2023-11-27,0\n2023-11-28,0\n2023-11-29,0\n2023-11-30,0\n2023-12-01,0\n2023-12-04,0\n2023-12-05,0\n2023-12-06,0\n', { includeZero: true,     xlabel: 'Date',     xRangePad: 10,     ylabel: '<span style="position: absolute; transform: translate(-50%, -10px)">Premium/Discount</span>',     legend: 'always',     title: 'Historical Premium/Discount',     axisLabelFormatter: function (number) {                 if (typeof number === 'object') {                     return new Date(number).toLocaleDateString('en-us');                 }                 return parseFloat(number).toFixed(2) + '%';             },    valueFormatter: function (number) {                 var numDate = new Date(number);                 if (numDate > 1448327658) {                     return new Date(number).toLocaleDateString('en-us');                 }                 return parseFloat(number).toFixed(2) + '%';             }} );