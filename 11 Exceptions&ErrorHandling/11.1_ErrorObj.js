// 에러 인스턴스 만들기
const err = new Error('invalid email')

// 실제 사용
function validateEmail(email) {
    return email.match(/@/) ?
        email :
        new Error(`invalid email: ${email}`)
}

const email = "jane@doe.com"

const validatedEmail = validateEmail(email)
if(validatedEmail instanceof Error) {
    console.log(`Error: ${validatedEmail.message}`)
} else {
    console.log(`Valid email: ${validatedEmail}`)
}