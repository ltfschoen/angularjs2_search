System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ArrayOfBookItemsPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Pipe to Filter Array of Objects
            ArrayOfBookItemsPipe = (function () {
                function ArrayOfBookItemsPipe() {
                }
                /**
                 * Sort by property passed in. Ensure convert each string
                 * value to lowercase otherwise capitalised are shown first.
                 */
                ArrayOfBookItemsPipe.prototype.sortByProperty = function (property) {
                    return function (a, b) {
                        var sortStatus = 0, aProp = a[property].toLowerCase(), bProp = b[property].toLowerCase();
                        if (aProp < bProp) {
                            sortStatus = -1;
                        }
                        else if (aProp > bProp) {
                            sortStatus = 1;
                        }
                        return sortStatus;
                    };
                };
                /**
                 * Pass data through filters. args is the name of the object property within
                 * the array to filter by. Return filtered set of data.
                 */
                ArrayOfBookItemsPipe.prototype.transform = function (booksArray, args) {
                    var sortedArray = booksArray.sort(this.sortByProperty(args.toLowerCase()));
                    return sortedArray;
                };
                ArrayOfBookItemsPipe = __decorate([
                    core_1.Pipe({
                        name: "bookItemsSortBy"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArrayOfBookItemsPipe);
                return ArrayOfBookItemsPipe;
            }());
            exports_1("ArrayOfBookItemsPipe", ArrayOfBookItemsPipe);
        }
    }
});

//# sourceMappingURL=array-of-book-items.pipe.js.map
