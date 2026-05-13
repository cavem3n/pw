export class LoginPageData {
    
    static get credentials() {
        return {
            usernames: {
                standardUser: 'standard_user',
                lockedOutUser: 'locked_out_user',
                problemUser: 'problem_user',
                performanceGlitchUSer: 'performance_glitch_user'
            },
            password: 'secret_sauce'
        }
    }
}