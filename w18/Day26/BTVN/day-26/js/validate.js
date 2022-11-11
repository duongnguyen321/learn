let checkEmail = (email) => {
    if (email.length === 0) return "blank"
    if (!email.includes("@")) return "missing@"
    return "ok"
} 

let checkPassword = (password) => {
    if(password.length === 0) return "blank"
    if(password.length < 8 || password.length > 16) return "length"
    return "ok"
}

export {checkEmail, checkPassword}