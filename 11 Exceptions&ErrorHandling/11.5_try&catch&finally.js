/*
    try 블록의 코드가 HTTP 연결이나 파일 같은 일종의 '자원'을 처리할 때가 있습니다. 프로그램에서 이 자원을 계쏙 가지고 있을 수 없으므로 에러가 있든 없든 어느 시점에는 이 자원을 해제해야 합니다.
    try 블록의 A 코드에서 에러가 발생했을 때, A코드 이후 코드에 자원 해제 코드가 있다면 자원을 해제할 수 없습니다. 그러므로 try 블록에서 자원을 해체하는건 안전하지 않습니다.
    이런 상황에서 finally 블록이 필요합니다. finally 블록은 에러가 일어나든, 일어나지 않든 반드시 호출됩니다.
*/

try {
    console.log("this line is executed...")
    throw new Error("whoops")
    console.log("this line is not...")
} catch(err) {
    console.log("there was an error...")
} finally {
    console.log("...always executed")
    console.log("perform cleanup here")
}