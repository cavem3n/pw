import { step } from 'allure-js-commons'

export class Logger {
    static async logStep(description: string) {
        await step('STEP - ' + description, () => { })
    }

    static async logVerification(description: string) {
        await step(`VERIFICATION - ${description}`, () => { })
    }

    static async logPreCondition(description: string) {
        await step(`PRE-CONDITION - ${description}`, () => { })
    }

    static async logPostCondition(description: string) {
        await step(`POST-CONDITION - ${description}`, () => { })
    }
}