<template>
    <div class="login">
        <div class="top tc">
            <i class="icon-erji iconfont"></i>
            <p class="title">Enjoy The Music</p>
        </div>
        <mu-paper>
            <div class="label">
                <i class="icon-zhucedenglushoujihao iconfont"></i>
                <mu-text-field hintText="请输入手机号" class="demo-divider-form" :underlineShow="false" v-model="forms.phoneNum"/>
                <mu-divider/>
            </div>
            <div class="label">
                <i class="icon-mima iconfont"></i>
                <mu-text-field hintText="请输入密码" class="demo-divider-form" :underlineShow="false" v-model="forms.passWord" type="password"/>
                <mu-divider/>
            </div>
            
        </mu-paper>

        <div class="container" @click="login()">
            <mu-raised-button label="登录" class="demo-raised-button" primary fullWidth :class="{information:ok}"/>
        </div>
        <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
            {{errMsg}}
        </mu-popup>
        <mu-circular-progress :size="30" :class="{loading:load}" class="progress"/>
        <div class="maskoff" :class="{mask:mk}"></div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                topPopup: false,
                errMsg:'',
                forms:{
                    phoneNum:'15026753453',
                    passWord:'515835543',
                },
                ok:false,
                load:false,
                mk:false
            }
        },
        methods:{
            login(){
                let cphone = this.forms.phoneNum
                let psd = this.forms.passWord
                let ndate = new Date().valueOf()

                // this.load=true
                // this.mk=true
                // if(this.ok==true){
                //     this.errMsg='请填写登录信息'
                //     this['top' + 'Popup'] = true
                // }else if(this.ok==false){
                    this.$axios.get('http://localhost:8888/login/cellphone', {
                        params: {
                            'phone':cphone,
                            'password':psd
                        }
                    })
                    .then((res)=> {
                        if(res.data.code===200){
                            this.errMsg ='登录成功'
                            this.load=false
                            this.mk=false
                            console.log(res)
                            let uid = res.data.account.id
                            sessionStorage.setItem('uid',uid);
                            setTimeout(function() {
                                window.location.href='/music' 
                            }, 200);
                        }else{
                            this.errMsg ='登录失败'
                        }
                        this['top' + 'Popup'] = true
                    })
                    .catch(function (err) {
                    });
                // }
            },
            check(){
                
            },
            open (position) {
                this[position + 'Popup'] = true
            },
            close (position) {
                this[position + 'Popup'] = false
            }
        },
        created(){
        },
        computed:{
            phoneCheck(){
                return this.forms.phoneNum
            },
            psdCheck(){
                return this.forms.passWord
            }
        },
        watch:{
            topPopup (val) {
                if (val) {
                    setTimeout(() => {
                    this.topPopup = false
                    }, 2000)
                }
            },
            phoneCheck(val,oldval){
                let phoneCheck=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                if(!val){
                    this.errMsg ='手机号不能为空'
                    this['top' + 'Popup'] = true
                }else if(!phoneCheck.test(val)){
                    this.errMsg ='手机号格式错误'
                    this['top' + 'Popup'] = true
                }else{
                    this['top' + 'Popup'] = false
                }
            },
            deep:true,
            psdCheck(psd,oldpsd){
                let phone = this.forms.phoneNum
                if(phone){
                    if(psd){
                        this['top' + 'Popup'] = false
                        this.ok=false
                    }
                }

            }

        }
    }
</script>

<style>
    .login {margin-top: 50px;}
    .mu-paper {margin-top: 50px;}
    .iconfont {font-size: 20px;display: inline-block;position: relative;top:1px;margin-left: 15px;}
    .icon-erji {font-size: 40px;text-align: center;color:#7e57c2;display: inline-block;} 
    .login .title {font-size: 22px;color:#7e57c2;}
    .information {background: #ccc;}
    .progress {color:#7e57c2;position: fixed;top: 50%;left: 50%;margin:-15px 0 0 -15px;opacity: 0;transition:all ease 0.5s;
    z-index:-1;}
    .loading {opacity: 1;z-index:500;}
    .maskoff {position: absolute;top: 0;left: 0;width: 100%;height: 100%;background: rgba(255,255,255,0);transition:all ease 0.5s;z-index:-1;}
    .mask {background: rgba(255,255,255,0.65);z-index:100;}
    .demo-divider-form {
        margin-bottom: 0;
        margin-left: 20px;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
    }
    .demo-raised-button {
        margin:35px auto 0;width: 80%;font-size: 16px;
    }
    .demo-popup-top {
    width: 100%;
    opacity: .8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
    }

    .demo-popup-left {
    display: flex;
    width: 85%;
    max-width: 375px;
    height: 100%;
    align-items: center;
    padding: 24px;
    }

    .demo-popup-right {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 375px;
    align-items: center;
    padding: 24px;
    }

    .demo-popup-bottom {
    width: 100%;
    max-width: 375px;
    }
</style>