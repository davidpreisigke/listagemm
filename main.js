const form = document.querySelector('form')

console.log(form)

form.addEventListener ( 'submit', event => {

    event.preventDefault();

    const formData = new FormData (form)
    formData.append('age',40)

    console.log(formData)


    const productDescription = document.querySelector('#product-description')
    const productName= document.querySelector('#product-name')
    const productValue = document.querySelector('#product-value')

    const inputValue = document.getElementsByClassName('.value-label')

    console.log(productDescription.value)
    console.log(productName.value)
    console.log(productValue.value)

    console.log(inputValue)
    console.log('sending');
})