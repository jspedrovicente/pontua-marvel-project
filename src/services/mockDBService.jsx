
class MockService {

    static async login(formData) {
        try {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
            const data = await response.json()
                
            return data
        }
        catch {
            console.log('deu ruim')
        }      

    }

}

export default MockService