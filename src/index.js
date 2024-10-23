document
    .querySelector('form')
    .addEventListener('submit', (event) => {
        event.preventDefault()

        const { email } = Object.fromEntries(
            new FormData(event.target)
        )

        console.log(email)
    })