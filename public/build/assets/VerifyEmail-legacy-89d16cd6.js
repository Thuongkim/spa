System.register(["./vendor-legacy-98b246d1.js","./Errors-legacy-367ae0e4.js","./Success-legacy-3370d1dd.js","./app-legacy-3595deb5.js","./__commonjsHelpers__-legacy-742540af.js"],(function(e,s){"use strict";var r,t,a,i,o,n,l,c,d,u,m,h,y,g,f,p,v,x;return{setters:[e=>{r=e.H,t=e.m,a=e.e,i=e.r,o=e.l,n=e.i,l=e.g,c=e.k,d=e.t,u=e.w,m=e.q,h=e.j,y=e.o,g=e.n},e=>{f=e.E},e=>{p=e.S},e=>{v=e._,x=e.C},null],execute:function(){const s={components:{Errors:f,Success:p,CircleSvg:x,HomeIcon:r},props:{id:{type:Number,required:!0},hash:{type:String,required:!0}},data:()=>({errors:null,success:"",loading:!1}),computed:{...t({authenticated:"auth/authenticated",user:"auth/user",roles:"auth/roles"})},methods:{...a({verifyResend:"auth/verifyResend",verifyEmail:"auth/verifyEmail",popToast:"toast/popToast"}),async verify(){this.loading=!0,this.errors=null,this.success="";try{await this.verifyEmail({id:this.id,hash:this.hash}).then((e=>{this.loading=!1,this.success="Email Successfully Verified. Redirecting ...",this.popToast({message:"Email Successfully Verified",timer:5e3,icon:"success"}),setTimeout((()=>{this.$router.push({name:"dashboard"})}),1e3)}))}catch(e){this.errors="An errored, please try again later",this.popToast({message:"An errored, please try again later.",timer:5e3,icon:"error"}),this.loading=!1}this.loading=!1},async resend(){this.loading=!0;try{await this.verifyResend({id:this.id}).then((e=>{this.loading=!1,this.popToast({message:"Email sent.",timer:5e3,icon:"success"})}))}catch(e){this.popToast({message:"An errored, please try again later.",timer:5e3,icon:"error"}),this.loading=!1}}}},k={class:"mx-auto max-w-screen-md text-gray-900"},b={class:"flex justify-center"},w={class:"flex-1"},_={class:"w-auto rounded border-gray-300 bg-white p-3 text-gray-800 shadow dark:bg-slate-900 dark:text-gray-100"},j={class:"border-gray-300 p-3 pt-6 text-center font-semibold"},E={class:"rounded p-4"},C={class:"my-1 mx-auto mt-3 flex w-full items-center justify-center py-2 sm:mt-0 sm:w-8/12 md:w-10/12 md:p-4"},S={key:0},T={class:"text-center"},A=n("span",{class:"sr-only"},"Go Home",-1),H={key:1},R={key:0,class:"flex items-center justify-center rounded-sm bg-blue-500 p-2 px-6 text-white hover:bg-blue-600"};e("default",v(s,[["render",function(e,s,r,t,a,f){const p=i("success"),v=i("errors"),x=i("HomeIcon"),V=i("router-link"),q=i("circle-svg"),I=i("AppButton");return y(),o("div",k,[n("div",b,[n("div",w,[n("div",_,[a.success?(y(),l(p,{key:0,content:a.success,onClose:s[0]||(s[0]=e=>a.success=null)},null,8,["content"])):c("",!0),a.errors?(y(),l(v,{key:1,content:a.errors,"container-class":"w-full",onClose:s[1]||(s[1]=e=>a.errors=null)},null,8,["content"])):c("",!0),n("h5",j,d(e.user&&e.user.email_verified_at?"Your email is already confirmed":"Please confirm verification of your email"),1),n("div",E,[n("div",C,[e.user&&e.user.email_verified_at?(y(),o("div",S,[n("div",T,[e.authenticated?(y(),l(V,{key:0,to:{name:"dashboard"},class:"text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",onClick:e.closeDrop},{default:u((({isActive:e})=>[h(x,{class:"mx-auto mb-3 h-20 w-20 text-center"}),A])),_:1},8,["onClick"])):c("",!0)])])):(y(),o("div",H,[a.loading?(y(),o("div",R,[m(" Verifying Email "),h(q,{class:"ml-3 h-5 w-5"})])):(y(),l(I,{key:1,disabled:a.loading,loading:a.loading,onClick:s[2]||(s[2]=e=>a.errors?f.resend():f.verify())},{text:u((()=>[m(d(a.errors?"Oops! Resend Verification?":"Click to Verify")+" ",1),n("span",{class:g(["fa-fw fa-envelope ml-2",a.errors?"far fa-envelope":"fas fa-check"])},null,2)])),_:1},8,["disabled","loading"]))]))])])])])])])}]]))}}}));
//# sourceMappingURL=VerifyEmail-legacy-89d16cd6.js.map
