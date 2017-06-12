!function(){"use strict";angular.module("angularjs.tableau",[])}();
!function(){"use strict";function t(){function t(t,e){return e.tableau||t.warn("Tableau API does not seem to be loaded! Make sure to include the appropriate <script> tag."),u.api=e.tableau,u}function e(t){angular.extend(n,t)}function a(t){return angular.extend({},n,t)}t.$inject=["$log","$window"];var n={},u={createOptions:a,api:null};this.setDefaultOptions=e,this.$get=t}angular.module("angularjs.tableau").provider("tableau",t)}();
!function(){"use strict";function e(e,t){var n={restrict:"A",scope:{path:"@euiTableauViz",vizHeight:"@",filters:"&",onCustomViewLoad:"&",onCustomViewRemove:"&",onCustomViewSave:"&",onCustomViewSetDefault:"&",onFilterChange:"=",onMarksSelection:"&",onParameterChange:"&",onStoryPointSwitch:"&",onTabSwitch:"&",onToolbarStateChange:"&",onVizResize:"&"},link:function(n,o){var i;n.$watch("vizHeight",function(a){if(o.css("height",a),i)return void i.setFrameSize(void 0,a);var r=e.createOptions({width:"100%",height:a});n.filters&&angular.merge(r,n.filters),t.log("About to instantiate Viz object"),t.log("Path: "+n.path),t.log("Options: "+angular.toJson(r)),i=new e.api.Viz(o[0],n.path,r),n.onCustomViewLoad&&i.addEventListener("customViewLoad",function(e){t.log("Event 'customViewLoad' has fired"),n.onCustomViewLoad({arg1:e})}),n.onCustomViewRemove&&i.addEventListener("customViewRemove",function(e){t.log("Event 'customViewRemove' has fired"),n.onCustomViewRemove({arg1:e})}),n.onCustomViewSave&&i.addEventListener("customViewSave",function(e){t.log("Event 'customViewSave' has fired"),n.onCustomViewSave({arg1:e})}),n.onCustomViewSetDefault&&i.addEventListener("customViewSetDefault",function(e){t.log("Event 'customViewSetDefault' has fired"),n.onCustomViewSetDefault({arg1:e})}),n.onFilterChange&&i.addEventListener("filterChange",function(e){t.log("Event 'filterChange' has fired"),n.onFilterChange({arg1:e})}),n.onMarksSelection&&i.addEventListener("marksSelection",function(e){t.log("Event 'marksSelection' has fired"),n.onMarksSelection({arg1:e})}),n.onParameterChange&&i.addEventListener("parameterValueChange",function(e){t.log("Event 'parameterValueChange' has fired"),n.onParameterChange({arg1:e})}),n.onStoryPointSwitch&&i.addEventListener("storyPointSwitch",function(e){t.log("Event 'storyPointSwitch' has fired"),n.onStoryPointSwitch({arg1:e})}),n.onTabSwitch&&i.addEventListener("tabSwitch",function(e){t.log("Event 'tabSwitch' has fired"),n.onTabSwitch({arg1:e})}),n.onToolbarStateChange&&i.addEventListener("toolbarStateChange",function(e){t.log("Event 'toolbarStateChange' has fired"),n.onToolbarStateChange({arg1:e})}),n.onVizResize&&i.addEventListener("vizResize",function(e){t.log("Event 'vizResize' has fired"),n.onVizResize({arg1:e})})}),n.$on("$destroy",function(){i&&(i.dispose(),i=null)})}};return n}e.$inject=["tableau","$log"],angular.module("angularjs.tableau").directive("euiTableauViz",e)}();