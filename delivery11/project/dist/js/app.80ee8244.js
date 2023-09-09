(function(){var t={2133:function(t,s,e){"use strict";var i=e(144),a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"layout"},[s("heading"),s("main-content",{attrs:{dishesRef:t.dishesRef}}),s("slider"),s("contacts")],1)},n=[],r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"container"},[s("header",{staticClass:"header"},[s("nav",{staticClass:"nav"},[s("button",{staticClass:"burger-menu",on:{click:t.toggleMenu}},[s("div",{staticClass:"bar"}),s("div",{staticClass:"bar"}),s("div",{staticClass:"bar"})]),s("div",{staticClass:"nav__items",class:{"nav__items--open":t.isMenuOpen}},[s("a",{staticClass:"nav__items-item",attrs:{href:"#"}},[t._v("Payment")]),s("a",{staticClass:"nav__items-item",attrs:{href:"#"}},[t._v("About Us")]),s("a",{staticClass:"nav__items-item",attrs:{href:"#"}},[t._v("Contacts")])]),t._m(0),t._m(1)])]),t._m(2)])])},o=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav__logo logo"},[s("img",{attrs:{src:e(8807),alt:"logotype"}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav__items-contacts"},[s("p",{staticClass:"nav__items-item"},[t._v("Daily 11am - 9pm")]),s("p",{staticClass:"nav__items-contact"},[s("img",{attrs:{src:e(7491),alt:"cellphone"}}),t._v(" 0 800 33 08 98 ")])])},function(){var t=this,s=t._self._c;return s("main",{staticClass:"main"},[s("div",{staticClass:"main__text"},[s("h1",{staticClass:"main__title title"},[t._v("Food delivery in Kovel")]),s("p",{staticClass:"main__subscription"},[t._v(" If you decide to relax or have unexpected guests, call us. We make sure that your vacation is comfortable, enjoyable and delicious ")])]),s("div",{staticClass:"main__img"},[s("img",{staticClass:"main__img-image",attrs:{src:e(5356),alt:"pizza"}})])])}],c={data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}},l=c,d=e(1001),u=(0,d.Z)(l,r,o,!1,null,"3f7a4950",null),h=u.exports,_=function(){var t=this,s=t._self._c;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content__header"},[s("div",{staticClass:"content__header-basket",on:{mouseenter:function(s){t.isOrderSummaryVisible=!0},mouseleave:function(s){t.isOrderSummaryVisible=!1}}},[s("button",{staticClass:"content__header-basket-btn"},[s("img",{staticClass:"content__header-basket-btn-img",attrs:{src:e(935),alt:""}}),s("span",{staticClass:"content__header-basket-btn-order-count"},[t._v(t._s(t.orderCount))])]),t.isOrderSummaryVisible?s("div",{staticClass:"content__header-order-summary"},[t._v(" = "+t._s(t.totalOrderPrice)+" ₴ ")]):t._e()]),s("h2",{staticClass:"content__header-title title"},[t._v("Popular dishes")])]),s("div",{staticClass:"content__dishes"},[s("div",{staticClass:"content__dishes-tabs"},t._l(t.categories,(function(e){return s("button",{key:e,staticClass:"content__dishes-tabs-btn",class:{active:e===t.activeCategory},on:{click:function(s){return t.changeCategory(e)}}},[t._v(" "+t._s(e)+" ")])})),0),s("div",{staticClass:"content__dishes-offers"},t._l(t.displayedDishes,(function(e,i){return s("article",{directives:[{name:"show",rawName:"v-show",value:i<t.visibleCount,expression:"index < visibleCount"}],key:i,staticClass:"content__dishes-offers-dish"},[s("img",{staticClass:"content__dishes-offers-dish-img",attrs:{src:e.image,alt:e.title}}),s("div",{staticClass:"content__dishes-offers-dish-content"},[s("h3",{staticClass:"content__dishes-offers-dish-content-title"},[t._v(" "+t._s(e.title)+" ")]),s("p",{staticClass:"content__dishes-offers-dish-content-size"},[t._v(" "+t._s(e.size)+" ")])]),s("div",{staticClass:"content__dishes-offers-dish-subscription"},[s("p",{staticClass:"content__dishes-offers-dish-ingredients"},[t._v(" "+t._s(e.ingredients)+" ")]),s("p",{staticClass:"content__dishes-offers-dish-price"},[t._v(t._s(e.price))])]),s("button",{staticClass:"content__dishes-offers-dish-button",on:{click:function(s){return t.addDishToCart(e)}}})])})),0),t.showLoadMore?s("button",{staticClass:"content__dishes-offers-btn",on:{click:t.toggleShowMore}}):t._e()])])])},f=[],p=(e(7658),e(6100)),v={props:["dishesRef"],data(){return{dishes:[],displayedDishes:[],batchSize:8,visibleCount:8,showLoadMore:!1,categories:["Pizza","Sushi","Salad","Dessert","Drinks"],selectedCategory:"Pizza",activeCategory:"",cart:[],orderCount:0,totalOrderPrice:0,isOrderSummaryVisible:!1}},methods:{changeCategory(t){this.activeCategory=t,console.log("Chosen category",t),this.selectedCategory=t;const s=t.toLowerCase();this.displayedDishes=[],this.cart=[],this.displayedDishes=this.dishes[s]||[],this.lastDisplayedIndex=this.displayedDishes.length,this.showLoadMore=this.displayedDishes.length>this.batchSize;for(const e of this.dishes[t]||[]){if(!(this.displayedDishes.length<this.batchSize)){this.showLoadMore=!0;break}this.displayedDishes.push(e)}this.lastDisplayedIndex=this.displayedDishes.length},addDishToCart(t){this.cart.push(t),this.orderCount+=1,this.totalOrderPrice+=parseFloat(t.price.replace(" UAH","")),this.isOrderSummaryVisible=!0},toggleShowMore(){8===this.visibleCount?(this.visibleCount=this.displayedDishes.length,this.showMoreText="Show Less"):(this.visibleCount=8,this.showMoreText="Load More")}},mounted(){(0,p.PL)(this.dishesRef).then((t=>{t.forEach((t=>{const s=t.data();console.log("Fetched dish:",s);const e=s.type||"Other",i=e.toLowerCase();this.dishes[i]||this.$set(this.dishes,i,[]),this.dishes[i].push(s)})),this.changeCategory(this.selectedCategory)})).catch((t=>{console.error("Error getting dishes: ",t)}))}},m=v,C=(0,d.Z)(m,_,f,!1,null,"2ac629ec",null),g=C.exports,b=function(){var t=this,s=t._self._c;return s("div",{staticClass:"slider"},[s("VueSlickCarousel",t._b({attrs:{autoplay:!0}},"VueSlickCarousel",t.settings,!1),[s("div",{staticClass:"slide"},[s("img",{attrs:{src:e(9639),alt:"slide restaurant"}})]),s("div",{staticClass:"slide"},[s("img",{attrs:{src:e(6955),alt:"slide restaurant"}})]),s("div",{staticClass:"slide"},[s("img",{attrs:{src:e(6693),alt:"slide restaurant"}})]),s("div",{staticClass:"slide"},[s("img",{attrs:{src:e(9639),alt:"slide restaurant"}})]),s("div",{staticClass:"slide"},[s("img",{attrs:{src:e(9639),alt:"slide restaurant"}})]),s("div",{staticClass:"slide"},[s("img",{attrs:{src:e(6955),alt:"slide restaurant"}})]),s("div",{staticClass:"slide"},[s("img",{attrs:{src:e(552),alt:"slide restaurant"}})]),s("div",{staticClass:"slide"},[s("img",{attrs:{src:e(9230),alt:"slide restaurant"}})])]),t._m(0)],1)},y=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"slider-contacts"},[s("p",{staticClass:"slider-contacts__text"},[t._v(" Instagram: "),s("a",{staticClass:"slider-contacts__text-link",attrs:{href:"#"}},[t._v(" @classic_kovel")])])])}],x=e(8061),w=e.n(x),k={components:{VueSlickCarousel:w()},data(){return{settings:{dots:!1,edgeFriction:.35,infinite:!0,speed:500,variableWidth:!0,autoplay:1500,slidesToShow:3,slidesToScroll:1}}}},O=k,S=(0,d.Z)(O,b,y,!1,null,"6b4c0c20",null),D=S.exports,M=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},P=[function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"container"},[s("div",{staticClass:"contacts__content"},[s("h2",{staticClass:"contacts__content-title title"},[t._v(" Fill out the form and we will call you ")]),s("form",{staticClass:"contacts__form",attrs:{action:"",method:"get",onsubmit:"return validateForm()"}},[s("input",{staticClass:"contacts__form-input",attrs:{type:"text",placeholder:"Your name",name:"name",id:"name"}}),s("input",{staticClass:"contacts__form-input",attrs:{type:"tel",placeholder:"Phone number",name:"phone",id:"phone",required:"",pattern:"[0-9]{10}"}}),s("div",{staticClass:"contacts__form-btn"},[s("input",{staticClass:"contacts__form-btn-input",attrs:{type:"submit",value:"Call back"}})])]),s("img",{staticClass:"contacts__img",attrs:{src:e(1526),alt:"delivery car"}})])])]),s("footer",{staticClass:"footer"},[s("p",{staticClass:"footer__text"},[t._v("© Classic Family Restaurant")]),s("img",{staticClass:"footer__logotype",attrs:{src:e(8807),alt:"logotype"}}),s("p",{staticClass:"footer__text"},[t._v("© Classic Family Restaurant")])])])}],z=e(2581),j=e.n(z),F=j(),L=(0,d.Z)(F,M,P,!1,null,"bf7c8bda",null),Z=L.exports,T={components:{Heading:h,MainContent:g,Slider:D,Contacts:Z},data(){return{dishesRef:(0,p.hJ)((0,p.ad)(),"dishes")}}},I=T,V=(0,d.Z)(I,a,n,!1,null,null,null),R=V.exports,E=e(3977);const A={apiKey:"AIzaSyBzu3bePwE18ZGi4J0veSLmldrZzpPmYhc",authDomain:"delivery-restaurant-535a0.firebaseapp.com",projectId:"delivery-restaurant-535a0",storageBucket:"delivery-restaurant-535a0.appspot.com",messagingSenderId:"989483012279",appId:"1:989483012279:web:ac6fa10790ed057975fd32"};(0,E.ZF)(A);const J=(0,p.ad)();(0,p.hJ)(J,"dishes");i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(R)}).$mount("#app")},2581:function(){},935:function(t,s,e){"use strict";t.exports=e.p+"img/bag.33113965.svg"},8807:function(t,s,e){"use strict";t.exports=e.p+"img/logos.cfc5430a.svg"},7491:function(t,s,e){"use strict";t.exports=e.p+"img/phone.6dfc73f1.svg"},1526:function(t,s,e){"use strict";t.exports=e.p+"img/car.bc53c6f6.png"},5356:function(t,s,e){"use strict";t.exports=e.p+"img/main-img.5e679379.png"},9639:function(t,s,e){"use strict";t.exports=e.p+"img/slide2.ebfe3b2f.png"},6955:function(t,s,e){"use strict";t.exports=e.p+"img/slide3.ea58cb65.png"},6693:function(t,s,e){"use strict";t.exports=e.p+"img/slide4.db9d96cc.png"},552:function(t,s,e){"use strict";t.exports=e.p+"img/slide5.d3fa51e5.png"},9230:function(t,s,e){"use strict";t.exports=e.p+"img/slide6.56f49c0a.png"}},s={};function e(i){var a=s[i];if(void 0!==a)return a.exports;var n=s[i]={exports:{}};return t[i].call(n.exports,n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(s,i,a,n){if(!i){var r=1/0;for(d=0;d<t.length;d++){i=t[d][0],a=t[d][1],n=t[d][2];for(var o=!0,c=0;c<i.length;c++)(!1&n||r>=n)&&Object.keys(e.O).every((function(t){return e.O[t](i[c])}))?i.splice(c--,1):(o=!1,n<r&&(r=n));if(o){t.splice(d--,1);var l=a();void 0!==l&&(s=l)}}return s}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[i,a,n]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.p="/Delivery-11/"}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,i){var a,n,r=i[0],o=i[1],c=i[2],l=0;if(r.some((function(s){return 0!==t[s]}))){for(a in o)e.o(o,a)&&(e.m[a]=o[a]);if(c)var d=c(e)}for(s&&s(i);l<r.length;l++)n=r[l],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(d)},i=self["webpackChunkproject"]=self["webpackChunkproject"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(2133)}));i=e.O(i)})();
//# sourceMappingURL=app.80ee8244.js.map