g2 = new Dygraph( document.getElementById('graphdiv2'), 'DATE,Premium/Discount\n2023-11-16,0.0\n2023-11-17,0.0\n2023-11-20,-0.14481253719498266\n2023-11-21,-0.052757793764990346\n2023-11-22,-0.10225684042340921\n2023-11-24,-0.05554453481452226\n2023-11-27,-0.13442619050451077\n2023-11-28,-0.31899430367314796\n2023-11-29,-0.7720948461689137\n2023-11-30,-0.26117926394934043\n2023-12-01,-0.35897435897437324\n2023-12-04,-0.049881235154403125\n2023-12-05,-0.3724247226624344\n2023-12-06,-0.3835942143847748\n2023-12-07,-0.12974786192929688\n2023-12-08,-0.19683168316831923\n2023-12-11,-0.23678479509007255\n2023-12-12,-0.10697951879101719\n2023-12-13,0.07999999999999119\n2023-12-14,-0.1249519415609468\n2023-12-15,-0.10802469135803294\n2023-12-18,0.14896073903001295\n2023-12-19,-0.1389473684210607\n2023-12-20,0.4742268041237008\n2023-12-21,0.19160758766048058\n2023-12-22,0.033716475095779685\n2023-12-26,-0.48687713959680856\n2023-12-27,0.4860633829705918\n2023-12-28,-0.09351145038167807\n2023-12-29,0.03659931376285286\n2024-01-02,0.07910476557979607\n2024-01-03,0.11046285492024577\n2024-01-04,0.4853687085446756\n2024-01-05,0.2233404296497099\n2024-01-08,0.07701238390092069\n2024-01-09,0.128805620608885\n2024-01-10,0.17488262910798635\n2024-01-11,0.14712195121950877\n2024-01-12,0.15018520247767064\n2024-01-16,-0.10720667063727207\n2024-01-17,0.07630522088353242\n2024-01-18,0.04222266480780057\n2024-01-19,-0.009529481834413822\n2024-01-22,-0.015642422249151355\n2024-01-23,-0.11376292760540974\n2024-01-24,-0.20965517241379183\n2024-01-25,0.09420575482852467\n2024-01-26,0.014495592556329484\n2024-01-29,0.35462944761157633\n2024-01-30,-0.07573964497041841\n2024-01-31,-1.0137578616352338\n', { includeZero: true,     xlabel: 'Date',     xRangePad: 10,     ylabel: '<span style="position: absolute; transform: translate(-50%, -10px)">Premium/Discount</span>',     legend: 'always',     title: 'Historical Premium/Discount',     axisLabelFormatter: function (number) {                 if (typeof number === 'object') {                     return new Date(number).toLocaleDateString('en-us');                 }                 return parseFloat(number).toFixed(2) + '%';             },    valueFormatter: function (number) {                 var numDate = new Date(number);                 if (numDate > 1448327658) {                     return new Date(number).toLocaleDateString('en-us');                 }                 return parseFloat(number).toFixed(2) + '%';             }} );