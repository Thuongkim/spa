System.register(["./vendor-legacy-98b246d1.js","./app-legacy-3595deb5.js","./vue-axios.esm.min-legacy-eb37414a.js","./__commonjsHelpers__-legacy-742540af.js"],(function(e,t){"use strict";var a,o,r,n,s,l,i,d,c,u,p,m,g,h,f,y,x,b,w,v,k,D,T,A,C,B,S,U,P,E,I;return{setters:[e=>{a=e.as,o=e.r,r=e.o,n=e.l,s=e.i,l=e.V,i=e.k,d=e.j,c=e.t,u=e.g,p=e.at,m=e.m,g=e.e,h=e.n,f=e.q,y=e.af,x=e.ag,b=e.L,w=e.f,v=e.ad,k=e.ae,D=e.p,T=e.au,A=e.U,C=e.z,B=e.E},e=>{S=e.t,U=e._,P=e.a,E=e.c,I=e.p},null,null],execute:function(){var t=document.createElement("style");t.textContent="[data-v-6c581770] .text-white,[data-v-7479a1d1] .text-white{color:#fff!important}\n",document.head.appendChild(t);const $={name:"AppDeleteModal",components:{ExclamationTriangleIcon:a},props:{show:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},cancelText:{type:String,default:"Cancel"},showConfirmButton:{type:Boolean,default:!0},confirmText:{type:String,default:"Confirm Delete"},title:{type:String,default:"Delete account"},text:{type:String,default:"Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone."}},data:()=>({blank:"AppDeleteModal"}),computed:{hasBodySlot(){return this.$slots.body},hasFooterSlot(){return this.$slots.footer}},methods:{track:S}},_={key:0,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},z=s("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-700 dark:bg-opacity-75"},null,-1),j={class:"fixed inset-0 z-10 overflow-y-auto"},F={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},L={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-slate-900 sm:my-8 sm:w-full sm:max-w-lg"},M={class:"bg-white px-4 pt-5 pb-4 dark:bg-slate-900 sm:p-6 sm:pb-4"},O={key:0,class:"px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},R={key:1,class:"sm:flex sm:items-start"},W={key:0,class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},H={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},N={id:"modal-title",class:"mb-4 mt-0 text-lg font-medium leading-6 text-red-500 dark:text-red-400"},Y={class:"mt-2"},q={class:"text-sm text-gray-700 dark:text-gray-300"},V={key:0,class:"px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},G={key:1,class:"flex justify-between px-4 py-3 sm:px-6"},J={name:"AccountAdministration",components:{AppDeleteModal:U($,[["render",function(e,t,a,p,m,g){const h=o("ExclamationTriangleIcon"),f=o("AppButton");return a.show?(r(),n("div",_,[z,s("div",j,[s("div",F,[s("div",L,[s("div",M,[g.hasBodySlot?(r(),n("div",O,[g.hasBodySlot?l(e.$slots,"body",{key:0}):i("",!0)])):(r(),n("div",R,[a.showIcon?(r(),n("div",W,[d(h,{class:"h-6 w-6 text-red-500"})])):i("",!0),s("div",H,[s("h3",N,c(a.title),1),s("div",Y,[s("p",q,c(a.text),1)])])]))]),g.hasFooterSlot?(r(),n("div",V,[g.hasFooterSlot?l(e.$slots,"footer",{key:0}):i("",!0)])):(r(),n("div",G,[a.showCancelButton?(r(),u(f,{key:0,text:a.cancelText,class:"mr-3",onClick:t[0]||(t[0]=t=>e.$emit("cancel"))},null,8,["text"])):i("",!0),a.showConfirmButton?(r(),u(f,{key:1,danger:"",text:a.confirmText,onClick:t[1]||(t[1]=t=>e.$emit("confirm"))},null,8,["text"])):i("",!0)]))])])])])):i("",!0)}]]),ShieldExclamationIcon:p},props:{},data:()=>({showDeleteModal:!1,readyToDelete:!1,loading:!1}),computed:{...m({user:"auth/user"})},methods:{...g({popToast:"toast/popToast",deleteAccount:"auth/deleteAccount"}),confirm(){const e=this;e.loading=!0,e.deleteAccount(this.user).then((t=>{e.popToast({message:"Account deleted successfully. We will miss you!",timer:5e4,icon:"success"}),e.loading=!1,e.showDeleteModal=!1})).catch((t=>{e.popToast({message:"Error deleteding account",timer:1e4,icon:"error"}),e.loading=!1,e.showDeleteModal=!1}))}}},K=s("h3",{class:"mb-5 text-center text-lg text-red-500"},"Delete Account",-1),Q=s("p",{class:"mb-3 text-center text-red-600"},[s("span",{class:"fa fa-exclamation-triangle fa-fw mr-3","aria-hidden":"true"}),s("strong",null,"Deleting"),f(" your account is "),s("u",null,[s("strong",null,"permanent")]),f(" and "),s("u",null,[s("strong",null,"cannot")]),f(" be undone. "),s("span",{class:"fa fa-exclamation-triangle fa-fw ml-3","aria-hidden":"true"})],-1),X={class:"mb-7 text-center"},Z=U(J,[["render",function(e,t,a,l,i,u){const p=o("ShieldExclamationIcon"),m=o("AppSwitch"),g=o("AppButton"),f=o("AppDeleteModal");return r(),n("div",null,[d(p,{class:"ml-auto mr-auto mt-6 mb-5 h-14 w-14 text-red-500"}),K,Q,s("div",{class:h(["mb-4 content-center rounded p-4 text-center",i.readyToDelete?"font-bold text-red-500":"text-yellow-600"])},[d(m,{enabled:i.readyToDelete,class:h(i.loading?"disabled":""),disabled:i.loading,onClick:t[0]||(t[0]=e=>i.readyToDelete=!i.readyToDelete)},null,8,["enabled","class","disabled"]),s("h3",{style:{"vertical-align":"4px"},class:"ml-3 inline-block cursor-pointer",onClick:t[1]||(t[1]=e=>i.readyToDelete=!i.readyToDelete)},c(i.readyToDelete?"Ready To Delete":"Not Ready To Delete"),1)],2),s("div",X,[d(g,{danger:"",text:"Delete My Account",disabled:!i.readyToDelete||i.loading,onClick:t[2]||(t[2]=e=>i.showDeleteModal=!0)},null,8,["disabled"])]),d(f,{show:i.showDeleteModal,onCancel:t[3]||(t[3]=e=>i.showDeleteModal=!1),onConfirm:t[4]||(t[4]=e=>u.confirm())},null,8,["show"])])}]]),ee={name:"AccountAuthentication",components:{PowerIcon:y},props:{},data:()=>({loading:!1,window:{},authWindowTitle:"Authentication Provider Authorization"}),computed:{...x("auth",{user:e=>e.user}),...m({authenticated:"auth/authenticated",user:"auth/user",roles:"auth/roles",logins:"auth/logins"}),socialLoginsEnabled(){return!!Object.values(this.logins).find((e=>"1"==e))},allowedProviders(){const e=[];for(const t in this.logins)0!=this.logins[t]&&"0"!=this.logins[t]&&e.push(t);return e.sort()},enabledProviders(){const e=[];return this.user.providers.forEach(((t,a)=>{this.allowedProviders.find((e=>e==t.provider))&&e.push(t)})),e},disabledProviders(){let e=this.allowedProviders;return this.user.providers.forEach(((t,a)=>{e=e.filter((e=>e!=t.provider))})),e}},mounted(){window.addEventListener("message",this.onMessage,!1)},beforeUnmount(){window.removeEventListener("message",this.onMessage)},methods:{...g({popToast:"toast/popToast",revokeProvider:"auth/revokeProvider",fetchOauthUrl:"auth/fetchOauthUrl",getUser:"auth/getUser"}),track:S,parseDisplayDate:P,capitalizeFirstLetter:E,providerIcon:I,providerConnected(e,t){const a=t.providers.find((t=>t.provider==e));return a||!1},triggerRevoke(e){const t=this;t.capitalizeFirstLetter(e.provider);const a=`Are you sure you want to <strong>Revoke</strong><br>${t.capitalizeFirstLetter(e.provider)} Authentication?<br><br><small><span class="far fa-clock fa-fw fa-xs mr-1"></span>First Used: ${t.parseDisplayDate(e.created_at)}</small><br><small><span class="far fa-clock fa-fw fa-xs mr-1"></span>Last Used: ${t.parseDisplayDate(e.updated_at)}</small>`;t.$swal.fire({title:"<strong>Revoke ",icon:"warning",html:a,showCancelButton:!1,showDenyButton:!0,confirmButtonColor:"#FF0000",denyButtonColor:"#777777",confirmButtonText:"Confirm Revoke",denyButtonText:"Cancel"}).then((a=>{a.isConfirmed?t.revokeProvider(e).then((e=>{t.popToast({message:"Provider successfully revoked",timer:5e3,icon:"success"})})).catch((e=>{t.popToast({message:"Error revoking provider",timer:1e4,icon:"error"})})):a.isDenied}))},async triggerConnect(e){this.track(`Social Login Provider Clicked: ${e}`,"clicked","user-account"),this.loading=!0;try{await b.get("/sanctum/csrf-cookie").then((e=>{}));const t=await this.fetchOauthUrl({provider:e}).then((e=>(this.loading=!1,e)));this.window=this.openWindow(t,this.authWindowTitle)}catch(t){this.track(`Social Provider Failed to Authorize: ${e}`,"error","auth-error"),this.popToast({message:"Failed authorize provider.",timer:1e4,icon:"error"}),this.window.close(),this.loading=!1}},async onMessage(e){const t=this;e.origin===window.origin&&e.data.token&&(e.data.token&&"cannot_add"==e.data.token?t.popToast({message:"Unable to authorize provider",timer:5e3,icon:"error"}):(t.popToast({message:"Successfully authorized provider",timer:2500,icon:"success"}),t.getUser().then((e=>{}))))},openWindow(e,t,a={}){"object"==typeof e&&(a=e,e=""),a={url:e,title:t,width:600,height:720,...a};const o=void 0!==window.screenLeft?window.screenLeft:window.screen.left,r=void 0!==window.screenTop?window.screenTop:window.screen.top,n=window.innerWidth||document.documentElement.clientWidth,s=window.innerHeight||document.documentElement.clientHeight;a.left=n/2-a.width/2+o,a.top=s/2-a.height/2+r;const l=Object.keys(a).reduce(((e,t)=>(e.push(`${t}=${a[t]}`),e)),[]).join(","),i=window.open(e,t,l);return window.focus&&i.focus(),i}}},te={key:0,class:"p-10 text-center text-gray-600"},ae=s("h2",{class:"text-lg"},"No applications are available for integration.",-1),oe={key:1},re={class:"grid grid-cols-1 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white sm:grid-cols-2 lg:grid-cols-3"},ne={class:"flex flex-col items-center pt-4 pb-4 pl-2 pr-2"},se={class:"mb-0 text-lg font-extrabold capitalize text-gray-900 dark:text-white"},le={key:0,class:"mb-1 mb-3 text-gray-600 dark:text-gray-400",style:{"line-height":"1.2","font-size":"0.6em"}},ie=s("span",{class:"font-bold uppercase text-gray-700 dark:text-gray-200"},[s("span",{class:"far fa-clock"}),f(" First Used: ")],-1),de=s("br",null,null,-1),ce={key:1,class:"mb-0 text-gray-600 dark:text-gray-400",style:{"line-height":"1.2","font-size":"0.6em"}},ue=s("span",{class:"font-bold uppercase text-gray-700 dark:text-gray-200"},[s("span",{class:"far fa-clock"}),f(" Last Used: ")],-1),pe=s("br",null,null,-1),me={class:"mt-4 flex space-x-3 md:mt-3"},ge={class:"flex flex-col items-center pt-4 pb-4 pl-2 pr-2"},he={class:"mb-2 text-lg font-extrabold capitalize text-gray-900 dark:text-white"},fe={class:"mt-4 mb-5 flex space-x-3 md:mt-5"},ye=s("div",{class:"clear-both"},null,-1),xe=U(ee,[["render",function(e,t,a,l,u,p){const m=o("PowerIcon"),g=o("AppButton"),y=w("tippy");return r(),n("div",null,[p.socialLoginsEnabled?i("",!0):(r(),n("div",te,[s("div",null,[d(m,{class:"ml-auto mr-auto mb-4 h-12 w-12"})]),ae])),p.socialLoginsEnabled?(r(),n("div",oe,[s("div",re,[(r(!0),n(v,null,k(p.enabledProviders,((e,t)=>(r(),n("div",{key:e+"_"+t,class:"mb-1 w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-900 dark:bg-gray-900"},[s("div",ne,[s("span",{class:h(["fa-4x mb-2",p.providerIcon(e.provider)])},null,2),s("h5",se,c(e.provider),1),e.created_at?(r(),n("div",le,[ie,de,f(" "+c(p.parseDisplayDate(e.created_at)),1)])):i("",!0),e.updated_at?(r(),n("div",ce,[ue,pe,f(" "+c(p.parseDisplayDate(e.updated_at)),1)])):i("",!0),s("div",me,[D(d(g,{danger:"",text:"Revoke",icon:"fa-solid fa-xmark fa-fw",onClick:t=>p.triggerRevoke(e)},null,8,["onClick"]),[[y,"Disconnect "+p.capitalizeFirstLetter(e.provider)+" from your account."]])])])])))),128)),(r(!0),n(v,null,k(p.disabledProviders,((e,t)=>(r(),n("div",{key:e+"_"+t,class:"mb-1 w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-900 dark:bg-gray-900"},[s("div",ge,[s("span",{class:h(["fa-4x mb-2",p.providerIcon(e)])},null,2),s("h5",he,c(e),1),s("div",fe,[D(d(g,{accent:"",text:"Connect",icon:"fa-solid fa-plug-circle-plus fw-fw",onClick:t=>p.triggerConnect(e)},null,8,["onClick"]),[[y,"Connect "+p.capitalizeFirstLetter(e)+" to your account."]])])])])))),128))])])):i("",!0),ye])}]]),be={name:"UserDownloadData",components:{},props:{},data:()=>({loading:!1}),computed:{...x("auth",{user:e=>e.user})},methods:{...g({popToast:"toast/popToast"}),track:S,async triggerUserDataDownload(){this.loading=!0;try{const e=await b.post(`/api/user/${this.user.id}/data`);e&&e.data&&e.data.status&&"success"==e.data.status?(this.loading=!1,this.userDataDownloadConfirmed(),this.track("User Triggered Data Download Successfully","user actions","trigger download success")):(this.loading=!1,this.popToast({message:"Failed to trigger data download.",timer:1e4,icon:"error"}))}catch(e){this.loading=!1,this.popToast({message:"Failed to trigger data download.",timer:1e4,icon:"error"})}},userDataDownloadConfirmed(){this.$swal.fire({title:"Success!",icon:"success",html:`Your data will be ready for download shortly. <br>A download link has been sent to your email <br>${this.user.email}`,showCancelButton:!1,showDenyButton:!1,confirmButtonColor:"#008000",confirmButtonText:"Dismiss"}).then((e=>{e.isConfirmed||e.isDenied}))}}},we={name:"AccountData",components:{UserDownloadData:U(be,[["render",function(e,t,a,n,s,l){const i=o("AppButton");return r(),u(i,{primary:"",text:"Process Download",loading:s.loading,class:"inline-flex items-center justify-center px-5 py-3",icon:s.loading?"fa fa-circle-notch fa-spin":"fa fa-download",onClick:t[0]||(t[0]=e=>l.triggerUserDataDownload())},null,8,["loading","icon"])}]])}},ve={class:""},ke={class:"mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"},De=s("h2",{class:"text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl"},[s("span",{class:"block"},[f(" Your Data "),s("span",{class:"text-indigo-600"},"On Demand")]),s("span",{class:"block text-gray-700 dark:text-gray-500"},"Download your user data.")],-1),Te={class:"mt-8 flex lg:mt-0 lg:flex-shrink-0"},Ae={class:"inline-flex rounded-md shadow"},Ce=U(we,[["render",function(e,t,a,l,i,c){const u=o("UserDownloadData");return r(),n("div",ve,[s("div",ke,[De,s("div",Te,[s("div",Ae,[d(u)])])])])}]]),Be={name:"AccountPrivacy",components:{},props:{},setup:()=>({}),data:()=>({blank:"AccountPrivacy"}),computed:{...x("sidebar",{sideBarOpen:e=>e.sideBarOpen,fullScreenSideBarOpen:e=>e.fullScreenSideBarOpen}),...x("auth",{user:e=>e.user,roles:e=>e.roles,token:e=>e.token,logins:e=>e.logins}),...m({authenticated:"auth/authenticated",user:"auth/user",roles:"auth/roles"})},watch:{},created(){},mounted(){},beforeUnmount(){},updated(){},methods:{...g({popToast:"toast/popToast"}),track:S}},Se={components:{ShieldExclamationIcon:p,CircleStackIcon:T,UserCircleIcon:A,ExclamationTriangleIcon:a,AccountAdministration:Z,AccountAuthentication:xe,AccountData:Ce,AccountPrivacy:U(Be,[["render",function(e,t,a,o,l,i){return r(),n("div",null,[s("h1",null,c(l.blank),1)])}],["__scopeId","data-v-6c581770"]])},data:()=>({activeTab:"authentication"}),computed:{},methods:{...g({popToast:"toast/popToast"}),track:S,changeTab(e){this.activeTab=e,this.track(`clicked tab: ${e}`)}}},Ue=(e=>(C("data-v-7479a1d1"),e=e(),B(),e))((()=>s("div",{class:"rounded-t border-b p-4 font-semibold dark:border-gray-600 dark:bg-slate-800"}," Account ",-1))),Pe={class:"rounded-b-lg bg-white p-4 dark:bg-slate-800"},Ee={class:"border-b-2 border-gray-200 dark:border-gray-700"},Ie={class:"flex flex-wrap justify-evenly text-center text-sm font-medium text-gray-500 dark:text-gray-400"};e("default",U(Se,[["render",function(e,t,a,l,c,p){const m=o("UserCircleIcon"),g=o("CircleStackIcon"),y=o("ExclamationTriangleIcon"),x=o("AccountAuthentication"),b=o("AccountData"),w=o("AccountPrivacy"),k=o("AccountAdministration");return r(),n(v,null,[Ue,s("div",Pe,[s("div",Ee,[s("ul",Ie,[s("li",{class:"mr-2 cursor-pointer",style:{"margin-top":"3px","margin-bottom":"-2px"},onClick:t[0]||(t[0]=e=>p.changeTab("authentication"))},[s("span",{class:h(["group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300","authentication"==c.activeTab?"active border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500":""])},[d(m,{class:"mr-1 h-5 w-5"}),f(" Authentication ")],2)]),s("li",{class:"mr-2 cursor-pointer",style:{"margin-top":"3px","margin-bottom":"-2px"},onClick:t[1]||(t[1]=e=>p.changeTab("data"))},[s("span",{class:h(["group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300","data"==c.activeTab?"active border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-500":""])},[d(g,{class:"mr-1 h-5 w-5"}),f(" Data ")],2)]),s("li",{class:"mr-2 cursor-pointer",style:{"margin-top":"3px","margin-bottom":"-2px"},onClick:t[2]||(t[2]=e=>p.changeTab("administration"))},[s("span",{class:h(["group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300","administration"==c.activeTab?"active border-red-600 text-red-600 dark:border-red-500 dark:text-red-500":""])},[d(y,{class:"mr-1 h-5 w-5"}),f(" Administration ")],2)])])]),s("div",{class:h(["rounded-b-lg bg-gray-50 p-4","administration"==c.activeTab?"dark:bg-gray-900":"dark:bg-gray-800"])},["authentication"==c.activeTab?(r(),u(x,{key:0})):i("",!0),"data"==c.activeTab?(r(),u(b,{key:1})):i("",!0),"privacy"==c.activeTab?(r(),u(w,{key:2})):i("",!0),"administration"==c.activeTab?(r(),u(k,{key:3})):i("",!0)],2)])],64)}],["__scopeId","data-v-7479a1d1"]]))}}}));
//# sourceMappingURL=Account-legacy-d9e87510.js.map
