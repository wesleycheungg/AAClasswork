export const Signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        user
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