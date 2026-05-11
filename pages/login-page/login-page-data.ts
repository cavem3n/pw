export class LoginPageData {
    static get credentials (){
        return{
            usernames: {
                standarUser: 'standard_user',
                lockedOutUser: 'locked_out_user',
                problemUser: 'problem_user',
                performanceGlitchUsr: 'performance_glitch_user',
                errorUsr: 'error_user',
                visualUsr: 'visual_user'
            },
            password: 'secret_sauce'

        }
    }
}