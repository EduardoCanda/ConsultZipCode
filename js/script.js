window.addEventListener('load', (event) => {

    event.preventDefault();

    const zipCodeInput = document.querySelector('#zip-code-input')
    const city = document.querySelector('#city-input')
    const district = document.querySelector('#district-input')
    const state = document.querySelector('#state-input')
    const address = document.querySelector('#address-input')
    const complement = document.querySelector('#complement-input')
    const ibgeCode = document.querySelector('#ibge-code-input')
    const searchButton = document.querySelector('#search-button')
    const clearButton = document.querySelector('#clear-button')

    zipCodeInput.addEventListener('keyup', (event) => {
        if (event.key === "Enter") {
            searchAddress(zipCodeInput.value);
        }
    });

    searchButton.addEventListener('click', () => {
        searchAddress(zipCodeInput.value);
    });

    clearButton.addEventListener('click', () => {
        clearPage();
    });


    async function searchAddress(zipCode) {
        if (zipCode.length < 8) {
            alert('Invalid zip code!');
            return;
        }

        const url = `https://viacep.com.br/ws/${zipCode}/json/`

        const res = await fetch(url);

        const json = await res.json()

        const adressData = { cep, localidade, uf, logradouro, complemento, ibge, bairro } = json

        zipCodeInput.value = adressData.cep
        city.value = adressData.localidade
        state.value = adressData.uf
        address.value = adressData.logradouro
        complement.value = adressData.complemento
        ibgeCode.value = adressData.ibge
        district.value = adressData.bairro
    }

    function clearPage() {
        zipCodeInput.value = ''
        city.value = ''
        state.value = ''
        address.value = ''
        complement.value = ''
        ibgeCode.value = ''
        district.value = ''
    }
});