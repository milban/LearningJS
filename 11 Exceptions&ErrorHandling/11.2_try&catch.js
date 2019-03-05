/*
    예상치 못한 에러에 대처하려면 try...cathc 문을 코드 전체를 감싸기
*/

const email = null

function validateEmail(email) {
    return email.match(/@/) ?
        email :
        new Error(`invalid email: ${email}`)
}

try{
    const validatedEmail = validateEmail(email)
    if(validatedEmail instanceof Error) {
        console.log(`Error: ${validatedEmail.message}`)
    } else {
        console.log(`Valid email: ${validatedEmail}`)
    }
} catch(err) {
    console.error(`Error: ${err.message}`)
}
