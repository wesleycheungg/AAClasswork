export const Signup = formUser => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        formUser
    })
)

export const Login = formUser => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        formUser
    })
)

export const Logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session',
    })
)