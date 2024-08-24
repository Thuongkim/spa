System.register(["./Success-legacy-3370d1dd.js","./Errors-legacy-367ae0e4.js","./app-legacy-3595deb5.js","./vendor-legacy-98b246d1.js","./__commonjsHelpers__-legacy-742540af.js"],(function(e,s){"use strict";var r,o,t,a,l,n,i,c,d,u,m,g,p,f,h,w,y,b,x,v;return{setters:[e=>{r=e.S},e=>{o=e.E},e=>{t=e._,a=e.C},e=>{l=e.an,n=e.ao,i=e.e,c=e.r,d=e.l,u=e.i,m=e.g,g=e.k,p=e.s,f=e.n,h=e.p,w=e.am,y=e.j,b=e.w,x=e.o,v=e.q},null],execute:function(){const s={components:{Success:r,Errors:o,CircleSvg:a,PaperAirplaneIcon:l,CheckCircleIcon:n},props:{useErrors:{type:Boolean,default:!1},useSuccess:{type:Boolean,default:!1}},data:()=>({form:{email:""},errors:null,success:null,loading:!1}),methods:{...i({forgotPassword:"auth/forgotPassword",popToast:"toast/popToast"}),async send(){this.loading=!0,this.errors=null,this.success=null;try{await this.forgotPassword(this.form).then((e=>{this.loading=!1,this.success=e,this.popToast({message:e,timer:1e4,icon:"success"})}))}catch(e){e.response&&422===e.response.status?(this.errors={message:e.response.data.message},this.popToast({message:e.response.data.message,timer:1e4,icon:"error"})):e.response&&401===e.response.status?(this.errors={message:e.response.data.message},this.popToast({message:"Invalid Email",timer:1e4,icon:"error"})):this.popToast({message:"An error occured",timer:1e4,icon:"error"}),this.loading=!1}}}},S={class:"mx-auto max-w-screen-md text-gray-900"},j={class:"flex justify-center"},k={class:"flex-1"},E={class:"w-auto border"},C=u("div",{class:"border-b p-4 font-semibold text-gray-700"}," Forgot your Password? ",-1),_={class:"bg-white p-4"},P={class:"my-1 w-full py-2 sm:flex sm:items-center sm:justify-between"},T=["disabled"],I={class:"my-1 w-full py-2 sm:flex sm:items-center sm:justify-end"},A={class:"mt-3 flex w-full items-center justify-between sm:mt-0 sm:w-8/12"},B=u("span",{class:"fa fa-reply fa-fw"},null,-1);e("default",t(s,[["render",function(e,s,r,o,t,a){const l=c("Success"),n=c("Errors"),i=c("PaperAirplaneIcon"),q=c("CheckCircleIcon"),F=c("CircleSvg"),G=c("AppButton"),H=c("router-link");return x(),d("div",S,[u("div",j,[u("div",k,[u("div",E,[C,u("div",_,[r.useSuccess&&t.success?(x(),m(l,{key:0,content:t.success,onClose:s[0]||(s[0]=e=>t.success=null)},null,8,["content"])):g("",!0),r.useErrors&&t.errors?(x(),m(n,{key:1,content:t.errors,onClose:s[1]||(s[1]=e=>t.errors=null)},null,8,["content"])):g("",!0),u("form",{class:"mx-auto w-full md:w-10/12 md:p-4",onSubmit:s[3]||(s[3]=p(((...e)=>a.send&&a.send(...e)),["prevent"]))},[u("div",P,[u("label",{for:"Email",class:f(["w-4/12",{"text-red-500":t.errors&&t.errors.errors&&t.errors.errors.email}])}," Email ",2),h(u("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>t.form.email=e),type:"email",name:"email",class:f([{"border-red-500":t.errors&&t.errors.errors&&t.errors.errors.email},"mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none sm:mt-0 sm:w-8/12"]),disabled:t.loading},null,10,T),[[w,t.form.email]])]),u("div",I,[u("div",A,[y(G,{loading:t.loading,disabled:t.loading||t.success,text:(t.loading,"Send Email"),"btn-class":"uppercase leading-snug inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg ",type:"submit"},{text:b((()=>[t.loading||t.success?g("",!0):(x(),m(i,{key:0,class:"mr-2 h-6 w-6"})),!t.loading&&t.success?(x(),m(q,{key:1,class:"mr-2 h-6 w-6"})):g("",!0),t.loading?(x(),m(F,{key:2,class:"mr-2 h-6 w-6"})):g("",!0),v(" Send Email ")])),_:1},8,["loading","disabled","text"]),y(H,{to:{name:"login"},class:"text-sm font-bold text-blue-500 hover:underline"},{default:b((()=>[B,v(" Go back ")])),_:1})])])],32)])])])])])}]]))}}}));
//# sourceMappingURL=ForgotPassword-legacy-6438cd40.js.map
