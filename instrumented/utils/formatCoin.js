function cov_2f03au4u04() {
  var path = "/Users/ricardo/Downloads/hype-test-frontend/src/utils/formatCoin.js";
  var hash = "eb0227baddb71f99155450027ad9dbf1d93cd39a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/ricardo/Downloads/hype-test-frontend/src/utils/formatCoin.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 19
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 7,
          column: 4
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 19
          },
          end: {
            line: 1,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1,
            column: 30
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "eb0227baddb71f99155450027ad9dbf1d93cd39a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2f03au4u04 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2f03au4u04();
cov_2f03au4u04().s[0]++;

const formatCoin = value => {
  cov_2f03au4u04().f[0]++;
  const formatter = (cov_2f03au4u04().s[1]++, new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }));
  cov_2f03au4u04().s[2]++;
  return formatter.format(value);
};

export default formatCoin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb3JtYXRDb2luIiwidmFsdWUiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdCJdLCJzb3VyY2VzIjpbImZvcm1hdENvaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybWF0Q29pbiA9ICh2YWx1ZSkgPT4ge1xuXG4gIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInLCB7XG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgY3VycmVuY3k6ICdCUkwnLFxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgfSk7XG4gIFxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdENvaW47Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZOzs7Ozs7Ozs7OztBQWZaLE1BQU1BLFVBQVUsR0FBSUMsS0FBRCxJQUFXO0VBQUE7RUFFNUIsTUFBTUMsU0FBUyw2QkFBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7SUFDL0NDLEtBQUssRUFBRSxVQUR3QztJQUUvQ0MsUUFBUSxFQUFFLEtBRnFDO0lBRy9DQyxxQkFBcUIsRUFBRTtFQUh3QixDQUEvQixDQUFILENBQWY7RUFGNEI7RUFRNUIsT0FBT0wsU0FBUyxDQUFDTSxNQUFWLENBQWlCUCxLQUFqQixDQUFQO0FBQ0QsQ0FURDs7QUFXQSxlQUFlRCxVQUFmIn0=